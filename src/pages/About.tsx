import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Target, Shield, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our Mission: From Complexity to Clarity
            </h1>
            <p className="text-xl text-muted-foreground">
              We exist to make sophisticated technology simple and accessible for businesses of every size.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 lg:p-12 bg-muted/30">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                We envision a future where every business, regardless of size, can harness the power of sophisticated technology and data with ease. Where the tools that were once exclusive to Fortune 500 companies are accessible, understandable, and affordable for everyone.
              </p>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Our mission is to be the bridge between complex technology and practical business results. We don't just build systems—we create clarity. We take the overwhelming world of data, web platforms, and automation, and transform it into strategic assets that drive real growth.
              </p>
              <p className="text-xl text-foreground leading-relaxed">
                Based in the heart of the GTA, we serve businesses locally and globally. From Mississauga to Mumbai, Toronto to Texas, we're your strategic technology partner—simplifying the complex so you can focus on what you do best: growing your business.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-foreground">
            Our Core Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 mx-auto">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Simplicity</h3>
              <p className="text-muted-foreground">
                Technology should make life easier, not harder. We take complex systems and make them intuitive. Our solutions are powerful yet simple to use—because sophisticated doesn't have to mean complicated.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 mx-auto">
                <Shield className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Transparency</h3>
              <p className="text-muted-foreground">
                No jargon. No hidden costs. No surprises. We communicate clearly, provide honest timelines, and keep you informed every step of the way. You'll always know exactly what we're doing and why.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 mx-auto">
                <Clock className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Punctuality</h3>
              <p className="text-muted-foreground">
                Your time is valuable. We respect deadlines because we know delays cost you money. When we commit to a timeline, we deliver. On time, every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Nexera */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-4xl font-bold mb-8 text-center text-foreground">
              Why Choose Nexera?
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  We're Strategic Partners, Not Just Vendors
                </h3>
                <p className="text-muted-foreground">
                  We don't just take orders and deliver projects. We take the time to understand your business, your challenges, and your goals. Our success is measured by your growth.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  Global Expertise, Local Presence
                </h3>
                <p className="text-muted-foreground">
                  Based in Mississauga, we serve the GTA with the personal touch of a local business. But our capabilities? Global. We've helped businesses expand internationally and compete on the world stage.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                  Technology Agnostic, Results Focused
                </h3>
                <p className="text-muted-foreground">
                  We don't push specific tools because we sell them. We recommend what actually works. Whether it's Power BI, Shopify, custom automation, or something else entirely—we choose based on what will deliver the best results for your business.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Experience the Nexera Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Let's have a conversation about your business challenges and how we can help turn complexity into clarity.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
