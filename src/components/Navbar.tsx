import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Car, Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Fleet", id: "fleet" },
    { label: "How It Works", id: "how-it-works" },
    { label: "Booking", id: "booking" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <div className="bg-[#EAB308] p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                <Car className="w-6 h-6 text-[#0F172A]" />
              </div>
              <div className="text-left">
                <h1 className={`text-xl transition-colors ${
                  isScrolled ? "text-[#0F172A]" : "text-white"
                }`}>
                  EliteDrive
                </h1>
                <p className="text-xs text-[#EAB308]">Tunisia</p>
              </div>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`transition-colors hover:text-[#EAB308] ${
                    isScrolled ? "text-[#0F172A]" : "text-white"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center gap-2">
                <Phone className={`w-4 h-4 ${isScrolled ? "text-[#EAB308]" : "text-[#EAB308]"}`} />
                <span className={`${isScrolled ? "text-[#0F172A]" : "text-white"}`}>
                  +216 12 345 678
                </span>
              </div>
              <Button
                onClick={() => scrollToSection("booking")}
                className="bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 ${isScrolled ? "text-[#0F172A]" : "text-white"}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 bg-white shadow-lg z-40 lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-[#0F172A] hover:text-[#EAB308] py-2 transition-colors"
                >
                  {link.label}
                </motion.button>
              ))}
              <div className="pt-4 border-t border-[#0F172A]/10">
                <div className="flex items-center gap-2 mb-4">
                  <Phone className="w-4 h-4 text-[#EAB308]" />
                  <span className="text-[#0F172A]">+216 12 345 678</span>
                </div>
                <Button
                  onClick={() => scrollToSection("booking")}
                  className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A]"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
