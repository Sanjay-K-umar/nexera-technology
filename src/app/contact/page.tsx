"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Facebook, Instagram, Loader2 } from "lucide-react";

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "904c717c-d8f9-46e9-9d64-2cb4325f819f",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to: "info@nexeratechnco.com",
          subject: "New Contact Form Submission from Nexera Website"
        })
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let&apos;s Talk About Your Business
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book your free 15-minute consultation. No pressure, no sales pitch—just an honest conversation about how we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    placeholder="Tell us about your business and what challenges you're facing..."
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">
                        Based in Mississauga, Ontario<br />
                        Serving the GTA & the World
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <a 
                        href="tel:+12896258007" 
                        className="text-blue-600 hover:underline"
                      >
                        +1 289 625 8007
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                      <Mail className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a 
                        href="mailto:info@nexeratechnco.com" 
                        className="text-blue-600 hover:underline"
                      >
                        info@nexeratechnco.com
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">
                  Follow Us
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/people/Nexera-Technology-and-Consultancy/61582576697546/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </a>
                  <a
                    href="https://www.instagram.com/nexera_tech_n_co/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-100 p-4 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Instagram className="w-6 h-6 text-blue-600" />
                  </a>
                </div>
              </Card>

              <Card className="p-8 bg-blue-50 border-blue-200">
                <h3 className="text-xl font-bold mb-3">
                  What to Expect
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>✓ Response within 24 hours</li>
                  <li>✓ Free 15-minute consultation</li>
                  <li>✓ No pressure, no sales pitch</li>
                  <li>✓ Honest assessment of your needs</li>
                  <li>✓ Clear next steps and pricing</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
