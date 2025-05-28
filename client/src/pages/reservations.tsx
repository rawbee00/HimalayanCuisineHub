import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Calendar, ChefHat, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ReservationsPage() {
  const [reservationType, setReservationType] = useState<"standard" | "essence" | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
    // Essence of Himalayan specific fields
    essenceGuests: "",
    menuSelections: [] as Array<{
      guestNumber: number;
      starter: string;
      soup: string;
      main: string;
      dessert: string;
    }>
  });

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

  const handleInputChange = (field: string, value: string) => {
    if (field === "essenceGuests") {
      const numGuests = parseInt(value);
      const newSelections = Array.from({ length: numGuests }, (_, index) => ({
        guestNumber: index + 1,
        starter: "",
        soup: "",
        main: "",
        dessert: ""
      }));
      setFormData(prev => ({ ...prev, [field]: value, menuSelections: newSelections }));
    } else {
      setFormData(prev => ({ ...prev, [field]: value }));
    }
  };

  const handleMenuSelection = (guestIndex: number, course: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      menuSelections: prev.menuSelections.map((selection, index) =>
        index === guestIndex ? { ...selection, [course]: value } : selection
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log("Reservation submitted:", { type: reservationType, ...formData });
    alert("Reservation request submitted! We'll contact you shortly to confirm your booking.");
    // Reset form
    setFormData({
      name: "", email: "", phone: "", date: "", time: "", guests: "", specialRequests: "",
      essenceGuests: "", menuSelections: []
    });
    setReservationType(null);
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
        {!reservationType && (
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card 
              className="cursor-pointer border-2 hover:border-primary-custom transition-all duration-500 hover:shadow-xl transform hover:scale-105 group relative overflow-hidden"
              onClick={() => setReservationType("standard")}
            >
              {/* Sliding Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-custom to-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-10"></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-blue-100 group-hover:bg-blue-200 p-4 rounded-full transition-all duration-300 transform group-hover:scale-110">
                    <Users className="text-primary-custom group-hover:text-blue-700 transition-colors duration-300" size={40} />
                  </div>
                </div>
                <h3 className="yadri-font text-2xl font-bold text-primary-custom mb-4 group-hover:text-blue-700 transition-colors duration-300">Standard Reservation</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Reserve a table and explore our full menu when you arrive. Perfect for experiencing our diverse Indian and Nepali cuisine at your own pace.
                </p>
                <div className="space-y-3 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  <div className="flex items-center justify-center gap-3 transform group-hover:translate-x-2 transition-transform duration-300">
                    <Clock size={18} />
                    <span>Order from full menu upon arrival</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 transform group-hover:translate-x-2 transition-transform duration-300 delay-75">
                    <Calendar size={18} />
                    <span>Same day reservations available</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 transform group-hover:translate-x-2 transition-transform duration-300 delay-150">
                    <Users size={18} />
                    <span>Flexible dining experience</span>
                  </div>
                </div>
                <Button className="mt-6 bg-primary-custom hover:bg-blue-600 text-white px-8 py-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Choose Standard
                </Button>
              </CardContent>
            </Card>

            <Card 
              className="cursor-pointer border-2 hover:border-orange-500 transition-all duration-500 hover:shadow-xl transform hover:scale-105 bg-gradient-to-br from-orange-50 to-yellow-50 group relative overflow-hidden"
              onClick={() => setReservationType("essence")}
            >
              {/* Sliding Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-0 group-hover:opacity-10"></div>
              
              <CardContent className="p-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-orange-100 group-hover:bg-orange-200 p-4 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-12">
                    <ChefHat className="text-primary-custom group-hover:text-orange-700 transition-colors duration-300" size={40} />
                  </div>
                </div>
                <h3 className="yadri-font text-2xl font-bold text-primary-custom mb-4 group-hover:text-orange-700 transition-colors duration-300">Essence of Himalayan</h3>
                <div className="bg-orange-200 group-hover:bg-orange-300 text-orange-800 group-hover:text-orange-900 font-bold py-2 px-4 rounded-lg mb-4 transition-all duration-300 transform group-hover:scale-105">
                  39,99€ per person
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  Our signature 4-course Nepali dining experience. Pre-select your authentic dishes for this culinary journey from the Himalayas to your table.
                </p>
                <div className="space-y-3 text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                  <div className="flex items-center justify-center gap-3 transform group-hover:-translate-x-2 transition-transform duration-300">
                    <ChefHat size={18} />
                    <span>4-course pre-selected menu</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 transform group-hover:-translate-x-2 transition-transform duration-300 delay-75">
                    <Calendar size={18} />
                    <span>Advance reservation required</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 transform group-hover:-translate-x-2 transition-transform duration-300 delay-150">
                    <Clock size={18} />
                    <span>Authentic Nepali experience</span>
                  </div>
                </div>
                <Button className="mt-6 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 transform group-hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                  Choose Essence Experience
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Reservation Form */}
        {reservationType && (
          <Card className="bg-white shadow-xl">
            <CardHeader className="text-center bg-gray-50">
              <CardTitle className="yadri-font text-3xl font-bold text-primary-custom">
                {reservationType === "standard" ? "Standard Reservation" : "Essence of Himalayan Experience"}
              </CardTitle>
              {reservationType === "essence" && (
                <p className="text-orange-600 font-bold text-lg mt-2">39,99€ per person - Please select your 4-course menu below</p>
              )}
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Basic Information */}
                <div>
                  <h4 className="text-xl font-bold text-primary-custom mb-4">Reservation Details</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-base font-medium">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="text-base font-medium">Number of Guests *</Label>
                      <Select onValueChange={(value) => handleInputChange("guests", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select number of guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(num => (
                            <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="date" className="text-base font-medium">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleInputChange("date", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-base font-medium">Preferred Time *</Label>
                      <Select onValueChange={(value) => handleInputChange("time", value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="18:00">6:00 PM</SelectItem>
                          <SelectItem value="18:30">6:30 PM</SelectItem>
                          <SelectItem value="19:00">7:00 PM</SelectItem>
                          <SelectItem value="19:30">7:30 PM</SelectItem>
                          <SelectItem value="20:00">8:00 PM</SelectItem>
                          <SelectItem value="20:30">8:30 PM</SelectItem>
                          <SelectItem value="21:00">9:00 PM</SelectItem>
                          <SelectItem value="21:30">9:30 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Essence of Himalayan Menu Selection */}
                {reservationType === "essence" && (
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
                            <Select onValueChange={(value) => handleMenuSelection(guestIndex, "starter", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder={`Choose appetizer for Guest ${guestIndex + 1}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.starters.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">2. Soup: Sherpa's Bowl *</Label>
                            <Select onValueChange={(value) => handleMenuSelection(guestIndex, "soup", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder={`Choose warming broth for Guest ${guestIndex + 1}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.soups.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">3. Main Course: Thakali *</Label>
                            <Select onValueChange={(value) => handleMenuSelection(guestIndex, "main", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder={`Choose main curry dish for Guest ${guestIndex + 1}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.mains.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label className="text-base font-medium text-primary-custom">4. Dessert: Sweet Ending *</Label>
                            <Select onValueChange={(value) => handleMenuSelection(guestIndex, "dessert", value)}>
                              <SelectTrigger className="mt-2">
                                <SelectValue placeholder={`Choose traditional Nepali sweet for Guest ${guestIndex + 1}`} />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.desserts.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
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
                <div>
                  <Label htmlFor="specialRequests" className="text-base font-medium">Special Requests or Dietary Requirements</Label>
                  <Textarea
                    id="specialRequests"
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                    placeholder="Please let us know about any allergies, dietary preferences, special occasions, or other requests..."
                    rows={4}
                    className="mt-2"
                  />
                </div>

                {/* Submit Buttons */}
                <div className="flex gap-4 justify-center pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setReservationType(null)}
                    className="px-8 py-3 text-base"
                  >
                    Back to Options
                  </Button>
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-primary-custom to-blue-600 hover:from-blue-600 hover:to-primary-custom text-white px-8 py-3 text-base font-medium"
                  >
                    Submit Reservation Request
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}