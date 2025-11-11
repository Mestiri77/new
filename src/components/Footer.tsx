import { Car, Instagram, Facebook, MessageCircle } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] text-[#F8FAFC] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#EAB308] p-2 rounded-lg">
                <Car className="w-6 h-6 text-[#0F172A]" />
              </div>
              <div>
                <h3 className="text-xl">EliteDrive</h3>
                <p className="text-sm text-[#EAB308]">Tunisia</p>
              </div>
            </div>
            <p className="text-[#F8FAFC]/70 mb-4 max-w-md">
              Drive Freedom. Feel Luxury. Your trusted partner for premium car rentals across Tunisia.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] p-3 rounded-full hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] p-3 rounded-full hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/21612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1E293B] p-3 rounded-full hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#EAB308] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fleet" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#booking" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#EAB308] mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F8FAFC]/70 hover:text-[#EAB308] transition-colors duration-300">
                  Rental Agreement
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F8FAFC]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F8FAFC]/60 text-sm">
            © 2025 EliteDrive Tunisia. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-[#EAB308] hover:text-[#F8FAFC] transition-colors duration-300 text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
