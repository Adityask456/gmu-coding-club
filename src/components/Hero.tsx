import { Button } from "@/components/ui/button";
import { Code2, Sparkles, Users } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        backgroundImage: `url(${heroBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-medium mb-6 fade-in">
              <Sparkles className="h-4 w-4" />
              Welcome to GMU Coding Club
            </span>
          </motion.div>

          {/* Typing heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight typing mx-auto"
          >
            Empowering Coders at <span className="gradient-text">GMU</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed"
          >
            Igniting Innovation, Inspiring Transformation through Code
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-primary-foreground/80 max-w-3xl mx-auto"
          >
            Join our vibrant community of passionate developers, innovators, and tech enthusiasts.
            Together, we build, learn, and shape the future of technology at GM University.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base px-8 hover:scale-110 transition-transform hover:shadow-glow"
              onClick={() => scrollToSection("#contact")}
            >
              <Users className="mr-2 h-5 w-5" />
              Join the Club
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 hover:scale-110 transition-transform hover:shadow-glow"
              onClick={() => scrollToSection("#events")}
            >
              <Code2 className="mr-2 h-5 w-5" />
              View Events
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto fade-sequence"
          >
            {[
              { number: "500+", label: "Active Members" },
              { number: "50+", label: "Events Hosted" },
              { number: "100+", label: "Projects Built" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                className="space-y-2 p-4 rounded-lg card-hover bg-card/10 backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-bold text-secondary">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-6 h-10 rounded-full border-2 border-secondary flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-secondary animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
