import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChefHat, ArrowLeft, Loader2 } from "lucide-react";
import { Link } from "wouter";

type FormData = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
  essenceGuests: string;
  menuSelections: Array<{
    guestNumber: number;
    starter: string;
    soup: string;
    main: string;
    dessert: string;
  }>;
};

type MenuOptions = {
  starters: string[];
  soups: string[];
  mains: string[];
  desserts: string[];
};

type ReservationType = "standard" | "essence" | null;

const essenceMenuOptions: MenuOptions = {
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

export default function ReservationsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [reservationType, setReservationType] = useState<ReservationType>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
    specialRequests: "",
    essenceGuests: "1",
    menuSelections: []
  });
  const [availableSets, setAvailableSets] = useState(20); // Maximum 20 sets per day

  const fetchAvailableSets = async () => {
    try {
      const response = await fetch('http://localhost:4000/api/menu-sets');
      const data = await response.json();
      if (data.availableSets !== undefined) {
        setAvailableSets(data.availableSets);
      }
    } catch (error) {
      console.error('Error fetching available sets:', error);
    }
  };

  // Fetch available sets when component mounts
  useEffect(() => {
    fetchAvailableSets();
  }, []);

  const handleInputChange = (field: keyof FormData, value: string) => {
    if (field === "essenceGuests") {
      const numGuests = parseInt(value) || 0;
      const newSelections = Array.from({ length: numGuests }, (_, index) => ({
        guestNumber: index + 1,
        starter: "",
        soup: "",
        main: "",
        dessert: ""
      }));
      setFormData(prev => ({
        ...prev,
        [field]: value,
        menuSelections: newSelections
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleMenuSelection = (guestIndex: number, course: keyof FormData['menuSelections'][0], value: string) => {
    setFormData(prev => ({
      ...prev,
      menuSelections: prev.menuSelections.map((selection, index) =>
        index === guestIndex ? { ...selection, [course]: value } : selection
      )
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // First reserve the menu sets
      if (reservationType === 'essence' && formData.essenceGuests) {
        const response = await fetch('http://localhost:4000/api/menu-sets/reserve', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            numSets: parseInt(formData.essenceGuests)
          })
        });

        const data = await response.json();
        if (!data.success) {
          throw new Error(data.message || 'Failed to reserve menu sets');
        }

        // Update local state
        fetchAvailableSets();
      }

      // Then create the reservation
      const response = await fetch('http://localhost:4000/api/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          reservationType,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ 
          success: true, 
          message: 'Reservation submitted successfully! You will receive a confirmation email shortly.' 
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '2',
          specialRequests: '',
          essenceGuests: '1',
          menuSelections: [],
        });
        setReservationType(null);
      } else {
        throw new Error(data.error || 'Failed to submit reservation');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      setSubmitStatus({ 
        success: false, 
        message: error instanceof Error ? error.message : 'Failed to submit reservation. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <Button variant="ghost" className="flex items-center gap-2 text-primary-custom hover:text-primary-custom/80">
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="yadri-font text-3xl md:text-4xl font-bold text-primary-custom">
                Himalayan Curry & Tandoor House
              </h1>
              <p className="text-primary-custom font-medium">Reservations</p>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h2 className="yadri-font text-4xl md:text-5xl font-bold text-primary-custom mb-4">
            Make a Reservation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your dining experience at our authentic Himalayan restaurant
          </p>
        </div>

        {/* Reservation Type Selection */}
        {!reservationType ? (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card 
              className="cursor-pointer border-2 hover:border-primary-custom transition-all duration-500 hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
              onClick={() => setReservationType("standard")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-custom to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-10"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-custom mb-2">Standard Dining</CardTitle>
                <CardDescription className="text-gray-600">
                  Enjoy our regular dining experience with our full à la carte menu.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-primary-custom">
                  <ChefHat className="w-5 h-5" />
                  <span>À la carte menu</span>
                </div>
                <div className="mt-4">
                  <Button className="w-full">Book Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer border-2 hover:border-primary-custom transition-all duration-500 hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
              onClick={() => setReservationType("essence")}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-custom to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-10"></div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-custom mb-2">Essence of Himalayan</CardTitle>
                <CardDescription className="text-gray-600">
                  Experience our curated Himalayan menu featuring authentic Nepali dishes.
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm text-primary-custom">Only {availableSets} sets available today</span>
                    <span className="text-sm text-gray-500">(Max 20 sets per day)</span>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-primary-custom">
                  <ChefHat className="w-5 h-5" />
                  <span>Multi-course Himalayan menu</span>
                </div>
                <div className="mt-4">
                  <Button className="w-full">Book Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setReservationType(null)}
                  className="rounded-full"
                >
                  <ArrowLeft className="h-5 w-5" />
                </Button>
                <div>
                  <CardTitle className="text-2xl font-bold text-primary-custom">
                    {reservationType === 'standard' ? 'Standard Dining' : 'Essence of Himalayan'}
                  </CardTitle>
                  <CardDescription>
                    {reservationType === 'standard' 
                      ? 'Reserve your table for our à la carte dining experience'
                      : 'Reserve your spot for our authentic Himalayan menu experience'}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>


                  <div className="space-y-2">
                    <Label htmlFor="date">Date *</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => handleInputChange('date', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Time *</Label>
                    <Input
                      id="time"
                      type="time"
                      value={formData.time}
                      onChange={(e) => handleInputChange('time', e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleInputChange('guests', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? 'person' : 'people'}
                          </SelectItem>
                        ))}
                        <SelectItem value="9+">9+ (Contact us)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {reservationType === 'essence' && (
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border border-orange-200">
                    <h4 className="yadri-font text-2xl font-bold text-primary-custom mb-6 text-center">Select Your 4-Course Himalayan Journey</h4>
                    
                    {/* Number of Essence Menus */}
                    <div className="mb-6 bg-white p-4 rounded-lg border border-orange-300">
                      <Label htmlFor="essenceGuests" className="text-base font-medium text-primary-custom">How many Essence of Himalayan set menus? *</Label>
                      <Select onValueChange={(value) => handleInputChange("essenceGuests", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select number of set menus" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Set Menu{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    {/* Individual Menu Selections for Each Guest */}
                    {formData.menuSelections.map((selection, guestIndex) => (
                      <div key={guestIndex} className="bg-white p-6 rounded-lg border border-orange-300 mb-4">
                        <h5 className="yadri-font text-lg font-bold text-primary-custom mb-4 text-center bg-orange-100 py-2 rounded">
                          Guest {guestIndex + 1} - Menu Selection
                        </h5>
                        
                        <div className="grid gap-4">
                          <div>
                            <Label className="text-base font-medium text-primary-custom">1. Starter: Nepali Flavor *</Label>
                            <Select
                              value={selection.starter}
                              onValueChange={(value) => handleMenuSelection(guestIndex, 'starter', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose appetizer" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.starters.map((item, i) => (
                                  <SelectItem key={i} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">2. Soup: Sherpa's Bowl *</Label>
                            <Select
                              value={selection.soup}
                              onValueChange={(value) => handleMenuSelection(guestIndex, 'soup', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose soup" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.soups.map((item, i) => (
                                  <SelectItem key={i} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">3. Main Course: Thakali *</Label>
                            <Select
                              value={selection.main}
                              onValueChange={(value) => handleMenuSelection(guestIndex, 'main', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose main course" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.mains.map((item, i) => (
                                  <SelectItem key={i} value={item}>
                                    {item}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">4. Dessert: Sweet Ending *</Label>
                            <Select
                              value={selection.dessert}
                              onValueChange={(value) => handleMenuSelection(guestIndex, 'dessert', value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Choose dessert" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.desserts.map((item, i) => (
                                  <SelectItem key={i} value={item}>
                                    {item}
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

                <div className="space-y-2">
                  <Label htmlFor="specialRequests">Special Requests</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    placeholder="Any allergies, dietary restrictions, or special occasions?"
                    rows={3}
                  />
                  <p className="text-sm text-gray-500">
                    We'll do our best to accommodate your requests.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setReservationType(null)}
                    className="w-full sm:w-auto"
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-primary-custom to-blue-600 hover:from-blue-600 hover:to-primary-custom text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Reservation'
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Status Message */}
        {submitStatus && (
          <div className={`fixed bottom-6 right-6 p-4 rounded-lg shadow-lg ${
            submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <p className="font-medium">{submitStatus.message}</p>
          </div>
        )}
      </main>
    </div>
  );
}