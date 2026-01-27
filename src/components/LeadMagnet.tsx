"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Gift, FileSpreadsheet, BarChart3, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";

interface LeadMagnetProps {
  variant?: "banner" | "card" | "popup";
  title?: string;
  description?: string;
}

export function LeadMagnet({ 
  variant = "card",
  title = "Free Data Health Check",
  description = "Get a free assessment of your Excel/data setup. We'll identify 3 quick wins to save time."
}: LeadMagnetProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: "904c717c-d8f9-46e9-9d64-2cb4325f819f",
          name: name,
          email: email,
          to: "info@nexeratechnco.com",
          subject: "🎁 Free Data Health Check Request",
          message: `New lead magnet signup:\n\nName: ${name}\nEmail: ${email}\n\nRequested: Free Data Health Check\n\nThis person wants a free assessment of their data/Excel setup.`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={`p-6 ${variant === "banner" ? "bg-green-50 border-green-200" : "bg-green-50"}`}>
        <div className="flex items-center gap-4">
          <CheckCircle2 className="h-12 w-12 text-green-600 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg text-green-800">You&apos;re In!</h3>
            <p className="text-green-700">
              Check your email for your free Data Health Check guide. We&apos;ll also be in touch within 24 hours to schedule your personalized assessment.
            </p>
          </div>
        </div>
      </Card>
    );
  }

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Gift className="h-8 w-8" />
              <div>
                <p className="font-bold">{title}</p>
                <p className="text-sm text-green-100">{description}</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white text-gray-900 w-full md:w-64"
              />
              <Button type="submit" variant="secondary" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Get Free Check"}
              </Button>
            </form>
          </div>
          {error && <p className="text-red-200 text-sm mt-2">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
      <div className="flex items-start gap-4 mb-4">
        <div className="bg-green-600 text-white p-3 rounded-lg flex-shrink-0">
          <Gift className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-xl text-green-800">{title}</h3>
          <p className="text-green-700 mt-1">{description}</p>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-green-700">
          <FileSpreadsheet className="h-4 w-4" />
          <span>Excel efficiency analysis</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700">
          <BarChart3 className="h-4 w-4" />
          <span>Dashboard opportunity assessment</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700">
          <CheckCircle2 className="h-4 w-4" />
          <span>3 actionable quick wins</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-white"
        />
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="bg-white"
        />
        <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : (
            <Gift className="h-4 w-4 mr-2" />
          )}
          Get My Free Data Check
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
        <p className="text-xs text-green-600 text-center">No spam. Unsubscribe anytime.</p>
      </form>
    </Card>
  );
}
