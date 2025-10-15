import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import clubLogo from "@/assets/club-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/projects" },
    { name: "Interactive", href: "/#interactive" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src={clubLogo} alt="GMU Coding Club Logo" className="h-12 w-12 rounded-lg" />
            <div>
              <h1 className="text-lg font-bold text-primary-foreground">GMU Coding Club</h1>
              <p className="text-xs text-secondary">GM University</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-primary-foreground hover:text-secondary transition-colors duration-300 font-medium"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button variant="secondary" size="sm" asChild>
              <a href="/#contact">Join Club</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-5 duration-300">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-primary-foreground hover:text-secondary transition-colors text-left py-2"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-foreground hover:text-secondary transition-colors text-left py-2"
                >
                  {link.name}
                </Link>
              )
            ))}
            <Button variant="secondary" size="sm" asChild>
              <a href="/#contact" onClick={() => setIsMenuOpen(false)}>Join Club</a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
