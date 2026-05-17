import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header onBooking={() => setBookingOpen(true)} />
      <Hero onBooking={() => setBookingOpen(true)} />
      <Services onBooking={() => setBookingOpen(true)} />
      <WhyUs />
      <Contacts onBooking={() => setBookingOpen(true)} />
      <Footer />
      <BookingModal open={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
};

export default Index;
