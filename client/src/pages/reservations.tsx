import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { ReservationForm } from '@/components/reservation-form';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function ReservationsPage() {
  const [, navigate] = useLocation();
  const [isSuccess] = useState(false);

  const handleReservationSuccess = () => {
    navigate('/reservation-success');
  };

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Reservation Submitted!</CardTitle>
            <CardDescription>
              Thank you for your reservation. We've sent a confirmation to your email.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-12 min-h-[calc(100vh-var(--header-height,100px)-var(--footer-height,100px))]">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Make a Reservation</h1>
          <p className="text-muted-foreground">
            Book your table at Himalayan Cuisine Hub. We look forward to serving you!
          </p>
        </div>
        
        <ReservationForm onSuccess={handleReservationSuccess} />
      </div>
    </div>
    <Footer />
    </>
  );
}