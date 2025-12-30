import React, { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Hero, SetupProcess, MeetConvoAI, Features, PlatformIntegrations, Specs, Testimonials, FAQ, PricingSection, ContactSection, FooterCta } from "./components";

function useGlobalRevealObserver() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('.reveal-left, .reveal-up'));
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inview');
          // Keep permanently: stop observing this element after first reveal
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Home() {
  useGlobalRevealObserver();
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <Hero />
      <main>
        <SetupProcess />
        <MeetConvoAI />
        <Features />
        <PlatformIntegrations />
        <Specs />
        <Testimonials />
        <FAQ />
        <PricingSection />
        <ContactSection />
        <FooterCta />
      </main>
    </div>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6 md:px-8">
          <h1 className="h1 mb-8">Privacy Policy</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="h3 mt-8 mb-4">Information We Collect</h2>
            <p>Convo AI collects information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
            
            <h2 className="h3 mt-8 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our voice agent services, process transactions, and communicate with you.</p>
            
            <h2 className="h3 mt-8 mb-4">Information Sharing</h2>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
            
            <h2 className="h3 mt-8 mb-4">Data Security</h2>
            <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            
            <h2 className="h3 mt-8 mb-4">Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@convoai.com</p>
          </div>
        </div>
      </div>
      <FooterCta />
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6 md:px-8">
          <h1 className="h1 mb-8">Terms of Service</h1>
          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="h3 mt-8 mb-4">Acceptance of Terms</h2>
            <p>By accessing and using Convo AI services, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="h3 mt-8 mb-4">Service Description</h2>
            <p>Convo AI provides AI-powered voice agent services for customer support on various platforms including Shopify, WordPress, and custom websites.</p>
            
            <h2 className="h3 mt-8 mb-4">User Responsibilities</h2>
            <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
            
            <h2 className="h3 mt-8 mb-4">Service Availability</h2>
            <p>We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be announced in advance.</p>
            
            <h2 className="h3 mt-8 mb-4">Limitation of Liability</h2>
            <p>Convo AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service.</p>
            
            <h2 className="h3 mt-8 mb-4">Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at legal@convoai.com</p>
          </div>
        </div>
      </div>
      <FooterCta />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;