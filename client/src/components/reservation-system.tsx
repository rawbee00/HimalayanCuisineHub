import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Clock, Users, Calendar, ChefHat } from "lucide-react";

export default function ReservationSystem() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
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
    starter: "",
    soup: "",
    main: "",
    dessert: ""
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
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the reservation data to your backend
    console.log("Reservation submitted:", { type: reservationType, ...formData });
    alert("Reservation request submitted! We'll contact you shortly to confirm.");
    setIsReservationOpen(false);
    setReservationType(null);
    setFormData({
      name: "", email: "", phone: "", date: "", time: "", guests: "", specialRequests: "",
      starter: "", soup: "", main: "", dessert: ""
    });
  };

  return (
    <>
      {/* Reservation Modal */}
      {isReservationOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl mx-auto max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <Button
                onClick={() => {
                  setIsReservationOpen(false);
                  setReservationType(null);
                }}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg"
              >
                <X size={24} />
              </Button>
            </div>

            <Card className="bg-white">
              <CardHeader className="text-center">
                <CardTitle className="yadri-font text-3xl font-bold text-primary-custom">
                  Make a Reservation
                </CardTitle>
                <p className="text-gray-600">Choose your dining experience at Himalayan Curry & Tandoor House</p>
              </CardHeader>
              <CardContent>
                {/* Reservation Type Selection */}
                {!reservationType && (
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <Card 
                      className="cursor-pointer border-2 hover:border-primary-custom transition-all duration-300 hover:shadow-lg"
                      onClick={() => setReservationType("standard")}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="bg-blue-100 p-3 rounded-full">
                            <Users className="text-primary-custom" size={32} />
                          </div>
                        </div>
                        <h3 className="yadri-font text-xl font-bold text-primary-custom mb-3">Standard Reservation</h3>
                        <p className="text-gray-600 mb-4">
                          Reserve a table and order from our full menu when you arrive. Perfect for exploring our diverse Indian and Nepali cuisine.
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center justify-center gap-2">
                            <Clock size={16} />
                            <span>Order upon arrival</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Calendar size={16} />
                            <span>Same day reservations available</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card 
                      className="cursor-pointer border-2 hover:border-primary-custom transition-all duration-300 hover:shadow-lg"
                      onClick={() => setReservationType("essence")}
                    >
                      <CardContent className="p-6 text-center">
                        <div className="flex justify-center mb-4">
                          <div className="bg-orange-100 p-3 rounded-full">
                            <ChefHat className="text-primary-custom" size={32} />
                          </div>
                        </div>
                        <h3 className="yadri-font text-xl font-bold text-primary-custom mb-3">Essence of Himalayan</h3>
                        <p className="text-gray-600 mb-4">
                          Our signature 4-course Nepali dining experience. Select your dishes in advance for this authentic journey from the Himalayas.
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                          <div className="flex items-center justify-center gap-2">
                            <ChefHat size={16} />
                            <span>Pre-order required - 39,99€ per person</span>
                          </div>
                          <div className="flex items-center justify-center gap-2">
                            <Calendar size={16} />
                            <span>Advance reservation needed</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Reservation Form */}
                {reservationType && (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="yadri-font text-2xl font-bold text-primary-custom">
                        {reservationType === "standard" ? "Standard Reservation" : "Essence of Himalayan Experience"}
                      </h3>
                      {reservationType === "essence" && (
                        <p className="text-orange-600 font-medium mt-2">39,99€ per person - Please select your 4-course menu below</p>
                      )}
                    </div>

                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests *</Label>
                        <Select onValueChange={(value) => handleInputChange("guests", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select guests" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1,2,3,4,5,6,7,8].map(num => (
                              <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Guest' : 'Guests'}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => handleInputChange("date", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Select onValueChange={(value) => handleInputChange("time", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
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

                    {/* Essence of Himalayan Menu Selection */}
                    {reservationType === "essence" && (
                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h4 className="yadri-font text-xl font-bold text-primary-custom mb-4">Select Your 4-Course Journey</h4>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="starter">1. Starter: Nepali Flavor *</Label>
                            <Select onValueChange={(value) => handleInputChange("starter", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your starter" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.starters.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="soup">2. Soup: Sherpa's Bowl *</Label>
                            <Select onValueChange={(value) => handleInputChange("soup", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your soup" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.soups.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="main">3. Main Course: Thakali *</Label>
                            <Select onValueChange={(value) => handleInputChange("main", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your main course" />
                              </SelectTrigger>
                              <SelectContent>
                                {essenceMenuOptions.mains.map((item, index) => (
                                  <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div>
                            <Label htmlFor="dessert">4. Dessert: Sweet Ending *</Label>
                            <Select onValueChange={(value) => handleInputChange("dessert", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Choose your dessert" />
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
                    )}

                    {/* Special Requests */}
                    <div>
                      <Label htmlFor="specialRequests">Special Requests or Dietary Requirements</Label>
                      <Textarea
                        id="specialRequests"
                        value={formData.specialRequests}
                        onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                        placeholder="Please let us know about any allergies, dietary preferences, or special occasions..."
                        rows={3}
                      />
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex gap-4 justify-center">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setReservationType(null)}
                        className="px-6 py-2"
                      >
                        Back to Options
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-primary-custom to-blue-600 hover:from-blue-600 hover:to-primary-custom text-white px-8 py-2"
                      >
                        Submit Reservation
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Component to be triggered externally */}
      <div className="hidden">
        <Button onClick={() => setIsReservationOpen(true)}>
          Make Reservation
        </Button>
      </div>
    </>
  );
}

// Export function to open reservation modal
export const openReservationModal = () => {
  // This will be used by the hero section button
  const event = new CustomEvent('openReservation');
  window.dispatchEvent(event);
};