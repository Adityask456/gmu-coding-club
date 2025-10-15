import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { motion } from "framer-motion";

import hackathonImg from "@/assets/hackathon-event.jpg";
import workshopImg from "@/assets/workshop-event.jpg";
import competitionImg from "@/assets/competition-event.jpg";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
}

const Events = () => {
  const [events] = useState<Event[]>([
    {
      id: "1",
      title: "HackGMU 2025",
      date: "2025-11-15",
      time: "09:00 AM",
      description:
        "48-hour hackathon bringing together the brightest minds to build innovative solutions. Prizes worth ₹50,000!",
      image: hackathonImg,
    },
    {
      id: "2",
      title: "Web Development Bootcamp",
      date: "2025-11-20",
      time: "02:00 PM",
      description:
        "Intensive 3-day workshop covering React, Node.js, and modern web development practices.",
      image: workshopImg,
    },
    {
      id: "3",
      title: "Code Combat Challenge",
      date: "2025-11-25",
      time: "10:00 AM",
      description:
        "Test your coding skills in this competitive programming contest. Win exciting prizes and recognition!",
      image: competitionImg,
    },
    {
      id: "4",
      title: "AI & Machine Learning Workshop",
      date: "2025-12-01",
      time: "11:00 AM",
      description:
        "Deep dive into AI fundamentals, neural networks, and hands-on projects using Python and TensorFlow.",
      image: workshopImg,
    },
    {
      id: "5",
      title: "Mobile App Development Summit",
      date: "2025-12-08",
      time: "09:30 AM",
      description:
        "Learn to build cross-platform mobile apps with React Native and Flutter. Expert speakers and live demos!",
      image: hackathonImg,
    },
    {
      id: "6",
      title: "Cybersecurity CTF Competition",
      date: "2025-12-15",
      time: "01:00 PM",
      description:
        "Capture The Flag event testing your security skills. Network security, cryptography, and ethical hacking challenges!",
      image: competitionImg,
    },
  ]);

  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [regForm, setRegForm] = useState({
    name: "",
    email: "",
    year: "",
    department: "",
    studentId: "",
  });

  // Countdown timer for next event
  useEffect(() => {
    const timer = setInterval(() => {
      const nearest = events.reduce((prev, curr) =>
        new Date(prev.date) < new Date(curr.date) ? prev : curr
      );

      const eventDate = new Date(nearest.date + " " + nearest.time);
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [events]);

  const handleRegister = (event: Event) => {
    setSelectedEvent(event);
    setRegistrationOpen(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`You're registered for ${selectedEvent?.title}!`, {
      description: "We'll send you a confirmation email shortly.",
    });
    setRegistrationOpen(false);
    setRegForm({ name: "", email: "", year: "", department: "", studentId: "" });
  };

  // Animation variants for left/right sliding
  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };
  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="gradient-text">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us for exciting hackathons, workshops, and coding competitions
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-primary text-primary-foreground hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Next Event Starts In</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 text-center">
                {Object.entries(countdown).map(([key, value]) => (
                  <div key={key}>
                    <div className="text-4xl font-bold text-secondary">{value}</div>
                    <div className="text-sm opacity-80 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Events Grid with animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={index % 2 === 0 ? slideLeft : slideRight}
            >
              <Card className="overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-2">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4" />
                      {new Date(event.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full hover:scale-105 transition-transform duration-300"
                    variant="default"
                    onClick={() => handleRegister(event)}
                  >
                    Register Now
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Registration Dialog */}
        <Dialog open={registrationOpen} onOpenChange={setRegistrationOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Register for {selectedEvent?.title}</DialogTitle>
              <DialogDescription>
                Fill in your details to secure your spot
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitRegistration} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={regForm.name}
                  onChange={(e) => setRegForm({ ...regForm, name: e.target.value })}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={regForm.email}
                  onChange={(e) => setRegForm({ ...regForm, email: e.target.value })}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    required
                    placeholder="e.g., 2nd Year"
                    value={regForm.year}
                    onChange={(e) => setRegForm({ ...regForm, year: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="studentId">Student ID</Label>
                  <Input
                    id="studentId"
                    required
                    value={regForm.studentId}
                    onChange={(e) => setRegForm({ ...regForm, studentId: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  required
                  value={regForm.department}
                  onChange={(e) => setRegForm({ ...regForm, department: e.target.value })}
                />
              </div>
              <Button type="submit" className="w-full">
                Complete Registration
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Events;
