import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function ReservationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
          <CheckCircle2 className="h-10 w-10 text-green-600" aria-hidden="true" />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Reservation Confirmed!
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Thank you for choosing Himalayan Cuisine Hub. We've sent a confirmation to your email.
        </p>
        <div className="mt-8 space-y-4">
          <p className="text-sm text-gray-500">
            Reservation ID: <span className="font-medium">#{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
          </p>
          <p className="text-sm text-gray-500">
            We look forward to serving you soon!
          </p>
        </div>
        <div className="mt-6">
          <Link href="/">
            <Button>
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
