import * as React from 'react';
import { useForm, Controller, type SubmitHandler, type Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useCreateReservation } from '@/lib/api';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from 'date-fns';
import { CalendarIcon, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const reservationSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  date: z.union([z.string(), z.date()])
    .transform(val => typeof val === 'string' ? new Date(val) : val)
    .refine(date => !isNaN(date.getTime()), {
      message: 'Please select a valid date',
    }),
  time: z.string().regex(/^\d{2}:\d{2}$/, 'Please select a valid time'),
  guests: z.number({
    required_error: 'Number of guests is required',
    invalid_type_error: 'Please enter a valid number',
  })
  .min(1, 'At least 1 guest is required')
  .max(20, 'Maximum 20 guests per reservation'),
  specialRequests: z.string().optional(),
  type: z.enum(['standard', 'essence']),
  menuSelections: z.array(
    z.object({
      guestNumber: z.number(),
      starter: z.string().optional(),
      soup: z.string().optional(),
      main: z.string().optional(),
      dessert: z.string().optional(),
    })
  ).optional(),
});

type ReservationFormData = z.infer<typeof reservationSchema>;

const essenceMenuOptions = {
  starters: [
    "Mo:Mo - Vegan (Textured soy, cabbage, Himalayan spices)",
    "Mo:Mo - Chicken (Free-range chicken with garlic & ginger)",
    "Mo:Mo - Pork (Traditional Kathmandu-style rich & gamey)",
    "Aloo Sadeko (potato salad with lemon & toasted mustard)",
    "Gundruk Ko Achar (fermented leafy greens with kale)"
  ],
  soups: [
    "Vegan Thukpa (Shiitake & ginger broth with rice noodles)",
    "Standard Thukpa (Chicken broth with vegetables & dhaniya)",
    "Kwati (mixed legumes with cumin & turmeric)"
  ],
  mains: [
    "Vegan Thakali (Soy in jimbu & tomato sauce)",
    "Chicken Thakali (Free-range with garam masala)",
    "Lamb Thakali (Slow-cooked with fennel & bay leaves)"
  ],
  desserts: [
    "Sikarni (cardamom-spiced hung yogurt with nuts)",
    "Sel Roti with honey (traditional ring-shaped bread)",
    "Kheer (rice pudding with almonds & raisins)"
  ]
};

// Custom hook for creating a reservation
const useCreateReservationLocal = () => {
  const { mutate, isPending, isError, error } = useCreateReservation();
  
  return {
    mutate,
    isPending,
    isError,
    error: error as Error | null
  };
};

export function ReservationForm({ onSuccess }: { onSuccess?: () => void }) {
  const { mutate: createReservation, isPending, isError, error } = useCreateReservationLocal();
  
  const { register, handleSubmit, watch, control, formState: { errors }, setValue } = useForm<ReservationFormData>({
    // @ts-ignore - The type inference is having trouble with the date field
    resolver: zodResolver(reservationSchema) as unknown as Resolver<ReservationFormData, any>,
    defaultValues: {
      type: 'standard',
      guests: 2,
      menuSelections: [{ guestNumber: 1 }],
    },
  });

  const reservationType = watch('type');
  const guests = watch('guests') || 1;
  const menuSelections = watch('menuSelections') || [];

  const availableTimes = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00',
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00'
  ];

  const onSubmit: SubmitHandler<ReservationFormData> = (formData) => {
    if (formData.type === 'essence' && formData.guests > 30) {
      alert('Maximum 30 plates allowed for Essence of Himalayan experience');
      return;
    }

    const formattedData = {
      ...formData,
      date: formData.date instanceof Date ? formData.date.toISOString().split('T')[0] : 
           typeof formData.date === 'string' ? formData.date : '',
      menuSelections: formData.menuSelections?.map(selection => ({
        ...selection,
        guestNumber: Number(selection.guestNumber) || 1
      }))
    };
    
    createReservation(formattedData, {
      onSuccess: () => {
        onSuccess?.();
      },
    });
  };

  const updateMenuSelections = (numGuests: number) => {
    const newSelections = Array.from({ length: numGuests }, (_, i) => {
      const existing = menuSelections?.[i] || {};
      return {
        ...existing,
        guestNumber: i + 1,
      };
    });
    setValue('menuSelections', newSelections);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Make a Reservation</CardTitle>
        <CardDescription>
          Book your table for an unforgettable dining experience.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                placeholder="Your name"
                {...register('name')}
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                {...register('email')}
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                {...register('phone')}
                className={errors.phone ? 'border-red-500' : ''}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label>Date *</Label>
              <Controller
                name="date"
                control={control}
                render={({ field }) => {
                  const [isOpen, setIsOpen] = React.useState(false);
                  return (
                    <Popover open={isOpen} onOpenChange={setIsOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            'w-full justify-start text-left font-normal',
                            !field.value && 'text-muted-foreground',
                            errors.date && 'border-red-500',
                            'cursor-pointer'
                          )}
                          onClick={() => setIsOpen(true)}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, 'PPP')
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-white" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value as Date | undefined}
                          onSelect={(date) => {
                            if (date) {
                              field.onChange(date);
                              setIsOpen(false);
                            }
                          }}
                          initialFocus
                          disabled={(date) => {
                            const today = new Date();
                            today.setHours(0, 0, 0, 0);
                            return date < today;
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  );
                }}
              />
              {errors.date && (
                <p className="text-sm text-red-500">{errors.date.message}</p>
              )}
            </div>

            {/* Time */}
            <div className="space-y-2">
              <Label>Time *</Label>
              <select
                {...register('time')}
                className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                    errors.time ? 'border-red-500' : ''
                  }`}
              >
                <option value="">Select a time</option>
                {availableTimes.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {errors.time && (
                <p className="text-sm text-red-500">{errors.time.message}</p>
              )}
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests">Number of Guests *</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                max={reservationType === 'essence' ? '30' : '20'}
                {...register('guests', { valueAsNumber: true })}
                onChange={(e) => {
                  const numGuests = parseInt(e.target.value);
                  if (!isNaN(numGuests)) {
                    updateMenuSelections(numGuests);
                  }
                }}
                className={errors.guests ? 'border-red-500' : ''}
              />
              {errors.guests && (
                <p className="text-sm text-red-500">{errors.guests.message}</p>
              )}
            </div>

            {/* Reservation Type */}
            <div className="space-y-2">
              <Label>Reservation Type *</Label>
              <div className="space-y-2">
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant={reservationType === 'standard' ? 'default' : 'outline'}
                    onClick={() => setValue('type', 'standard')}
                  >
                    Standard
                  </Button>
                  <div className="relative">
                    <Button
                      type="button"
                      variant={reservationType === 'essence' ? 'default' : 'outline'}
                      onClick={() => setValue('type', 'essence')}
                      className="relative"
                    >
                      Essence of Himalayan
                      {reservationType === 'essence' && (
                        <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {watch('guests') || 0}/30
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
                {reservationType === 'essence' && (
                  <p className="text-xs text-yellow-600">
                    * Advance booking required (24h notice). Maximum 30 plates available.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Menu Selections for Essence of Himalayan */}
          {reservationType === 'essence' && (
            <div className="space-y-6">
              <h3 className="text-lg font-medium">Menu Selections</h3>
              {Array.from({ length: guests }).map((_, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-medium">Guest {index + 1}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Starter</Label>
                      <Select
                        onValueChange={(value) => {
                          const newSelections = [...menuSelections];
                          newSelections[index] = {
                            ...newSelections[index],
                            guestNumber: index + 1,
                            starter: value,
                          };
                          setValue('menuSelections', newSelections);
                        }}
                        value={menuSelections[index]?.starter || ''}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a starter" />
                        </SelectTrigger>
                        <SelectContent>
                          {essenceMenuOptions.starters.map((starter) => (
                            <SelectItem key={starter} value={starter}>
                              {starter}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Soup</Label>
                      <Select
                        onValueChange={(value) => {
                          const newSelections = [...menuSelections];
                          newSelections[index] = {
                            ...newSelections[index],
                            guestNumber: index + 1,
                            soup: value,
                          };
                          setValue('menuSelections', newSelections);
                        }}
                        value={menuSelections[index]?.soup || ''}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a soup" />
                        </SelectTrigger>
                        <SelectContent>
                          {essenceMenuOptions.soups.map((soup) => (
                            <SelectItem key={soup} value={soup}>
                              {soup}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Main Course</Label>
                      <Select
                        onValueChange={(value) => {
                          const newSelections = [...menuSelections];
                          newSelections[index] = {
                            ...newSelections[index],
                            guestNumber: index + 1,
                            main: value,
                          };
                          setValue('menuSelections', newSelections);
                        }}
                        value={menuSelections[index]?.main || ''}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a main course" />
                        </SelectTrigger>
                        <SelectContent>
                          {essenceMenuOptions.mains.map((main) => (
                            <SelectItem key={main} value={main}>
                              {main}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Dessert</Label>
                      <Select
                        onValueChange={(value) => {
                          const newSelections = [...menuSelections];
                          newSelections[index] = {
                            ...newSelections[index],
                            guestNumber: index + 1,
                            dessert: value,
                          };
                          setValue('menuSelections', newSelections);
                        }}
                        value={menuSelections[index]?.dessert || ''}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a dessert" />
                        </SelectTrigger>
                        <SelectContent>
                          {essenceMenuOptions.desserts.map((dessert) => (
                            <SelectItem key={dessert} value={dessert}>
                              {dessert}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Special Requests */}
          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Textarea
              id="specialRequests"
              placeholder="Any special requests or dietary restrictions?"
              {...register('specialRequests')}
              className="min-h-[100px]"
            />
          </div>

          {/* Error Message */}
          {isError && (
            <div className="p-4 bg-red-50 text-red-700 rounded-md">
              {error instanceof Error ? error.message : 'Failed to create reservation. Please try again.'}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Book Table'
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
