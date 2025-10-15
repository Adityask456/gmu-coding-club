import { Facebook, Linkedin, Instagram, MessageCircle, Mail, Github } from "lucide-react";
import clubLogo from "@/assets/club-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/gmucodingclub", label: "Facebook" },
    { icon: Linkedin, href: "https://linkedin.com/company/gmucodingclub", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/gmuniversity_official_set_dvg?igsh=ZGdrNjdnY2c2ZTNr", label: "Instagram" },
    { icon: Github, href: "https://github.com/gmucodingclub", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Events", href: "#events" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={clubLogo} alt="GMU Coding Club" className="h-12 w-12 rounded-lg" />
              <div>
                <h3 className="font-bold text-lg">GMU Coding Club</h3>
                <p className="text-sm text-secondary">GM University</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Empowering the next generation of developers through innovation, collaboration, and continuous learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:codingclub@gmu.ac.in" className="hover:text-secondary">
                  codingclub@gmu.ac.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="text-xs">
                 GM University, PB ROAD <br />
                      GM University, DAVANAGERE - 577001
              </li>
            </ul>
          </div>

          {/* Social & Community */}
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-primary-foreground/10 hover:bg-secondary flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <a
              href="https://discord.gg/gmucodingclub"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm bg-secondary text-primary px-4 py-2 rounded-lg hover:scale-105 transition-transform font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              Join Discord
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} GMU Coding Club. All rights reserved.
            </p>
            <p>

            </p>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all z-50"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </footer>
  );
};

export default Footer;
