import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Target, Shield, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nexera Technology | Mission, Values & Why Choose Us",
  description: "Learn about Nexera Technology's mission to make sophisticated technology simple for businesses. Based in Mississauga serving the GTA. Simplicity, transparency, punctuality.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-16 bg-gradient-to-br from-primary/5 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Mission: From Complexity to Clarity
            </h1>
            <p className="text-xl text-gray-600">
              We exist to make sophisticated technology simple and accessible for businesses of every size.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-gray-50">
              <p className="text-xl leading-relaxed mb-6">
                We envision a future where every business, regardless of size, can harness the power of sophisticated technology and data with ease. Where the tools that were once exclusive to Fortune 500 companies are accessible, understandable, and affordable for everyone.
              </p>
              <p className="text-xl leading-relaxed mb-6">
                Our mission is to be the bridge between complex technology and practical business results. We don&apos;t just build systems—we create clarity. We take the overwhelming world of data, web platforms, and automation, and transform it into strategic assets that drive real growth.
              </p>
              <p className="text-xl leading-relaxed">
                Based in the heart of the GTA, we serve businesses locally and globally. From Mississauga to Mumbai, Toronto to Texas, we&apos;re your strategic technology partner—simplifying the complex so you can focus on what you do best: growing your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Simplicity</h3>
              <p className="text-gray-600">
                Technology should make life easier, not harder. We take complex systems and make them intuitive. Our solutions are powerful yet simple to use—because sophisticated doesn&apos;t have to mean complicated.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Transparency</h3>
              <p className="text-gray-600">
                No jargon. No hidden costs. No surprises. We communicate clearly, provide honest timelines, and keep you informed every step of the way. You&apos;ll always know exactly what we&apos;re doing and why.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 mx-auto">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Punctuality</h3>
              <p className="text-gray-600">
                Your time is valuable. We respect deadlines because we know delays cost you money. When we commit to a timeline, we deliver. On time, every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">
              Why Choose Nexera?
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  We&apos;re Strategic Partners, Not Just Vendors
                </h3>
                <p className="text-gray-600">
                  We don&apos;t just take orders and deliver projects. We take the time to understand your business, your challenges, and your goals. Our success is measured by your growth.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  We Speak Your Language, Not Tech Jargon
                </h3>
                <p className="text-gray-600">
                  No confusing acronyms or technical babble. We explain everything in plain English so you always understand what we&apos;re building and why it matters to your bottom line.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Local Roots, Global Reach
                </h3>
                <p className="text-gray-600">
                  Based in Mississauga with deep GTA connections, but we serve clients worldwide. You get the personal touch of a local company with the expertise to handle international growth.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Honest About What You Actually Need
                </h3>
                <p className="text-gray-600">
                  We won&apos;t oversell you on features you don&apos;t need. If there&apos;s a simpler, more cost-effective solution, we&apos;ll tell you. Our reputation is built on trust, not upsells.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Let&apos;s have an honest conversation about your challenges and how we can help.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
