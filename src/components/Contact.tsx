import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    year: "",
    reason: "",
  });

  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration Successful!", {
      description: "Welcome to GMU Coding Club! We'll be in touch soon.",
    });
    setFormData({
      name: "",
      email: "",
      department: "",
      year: "",
      reason: "",
    });
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed!", {
      description: "You'll now receive our latest updates and announcements.",
    });
    setNewsletter("");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community or reach out with any questions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="hover-lift">
            <CardHeader>
              <CardTitle className="text-2xl">Join the GMU Coding Club</CardTitle>
              <CardDescription>
                Fill out the form below to become a member
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@gmu.ac.in"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department *</Label>
                    <Input
                      id="department"
                      required
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      placeholder="Computer Science"
                    />
                  </div>

                  <div>
                    <Label htmlFor="year">Year *</Label>
                    <Input
                      id="year"
                      required
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="2nd Year"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="reason">Why do you want to join? *</Label>
                  <Textarea
                    id="reason"
                    required
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    placeholder="Share your motivation and interests..."
                    className="min-h-[100px]"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  Submit Registration
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Newsletter */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us anytime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:codingclub@gmu.ac.in" className="text-muted-foreground hover:text-secondary">
                      codingclub@gmu.ac.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <a href="tel:+919876543210" className="text-muted-foreground hover:text-secondary">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <p className="text-muted-foreground">
                      GM University, PB ROAD <br />
                      GM University, DAVANAGERE - 577001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="hover-lift bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Subscribe to our newsletter for latest events and announcements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletter} className="space-y-4">
                  <div>
                    <Label htmlFor="newsletter" className="text-primary-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="newsletter"
                      type="email"
                      required
                      value={newsletter}
                      onChange={(e) => setNewsletter(e.target.value)}
                      placeholder="your@email.com"
                      className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-full"
                    size="lg"
                  >
                    Subscribe Now
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="font-semibold">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
