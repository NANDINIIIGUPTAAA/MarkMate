
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Faqs from '@/components/Faqs';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto">
        <Hero />
        <Features />
        <Testimonials />
        <Faqs />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
