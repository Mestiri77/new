import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Car, Star, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/80 via-[#0F172A]/60 to-[#0F172A]/80 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758411897783-75a5b6495ee6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBjb2FzdGFsJTIwcm9hZHxlbnwxfHx8fDE3NjI4MjY0NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury car on coastal road"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 right-12 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl hidden lg:block z-20"
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#EAB308] p-3 rounded-xl">
            <Star className="w-6 h-6 text-[#0F172A] fill-[#0F172A]" />
          </div>
          <div>
            <p className="text-white text-sm">Rated 5.0</p>
            <p className="text-white/60 text-xs">12,000+ Reviews</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-32 left-12 bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-2xl hidden lg:block z-20"
      >
        <div className="flex items-center gap-3">
          <div className="bg-[#EAB308] p-3 rounded-xl">
            <Award className="w-6 h-6 text-[#0F172A]" />
          </div>
          <div>
            <p className="text-white text-sm">Premium Fleet</p>
            <p className="text-white/60 text-xs">500+ Vehicles</p>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 flex justify-center items-center gap-3"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="bg-[#EAB308] p-3 rounded-lg shadow-xl"
          >
            <Car className="w-8 h-8 text-[#0F172A]" />
          </motion.div>
          <div className="text-left">
            <h1 className="text-3xl text-[#F8FAFC] tracking-tight">EliteDrive</h1>
            <p className="text-sm text-[#EAB308]">Tunisia</p>
          </div>
        </motion.div>

        {/* Headline with gradient text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 max-w-5xl mx-auto leading-tight"
        >
          Rent Your{" "}
          <span className="bg-gradient-to-r from-[#EAB308] via-[#FCD34D] to-[#EAB308] bg-clip-text text-transparent">
            Dream Car
          </span>
          <br />
          in Minutes
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl md:text-2xl text-[#F8FAFC]/90 mb-12 max-w-3xl mx-auto"
        >
          From economy rides to luxury wheels — simple, fast, and affordable car rentals in Tunisia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("booking")}
              className="bg-[#EAB308] hover:bg-[#FCD34D] text-[#0F172A] px-8 py-6 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#EAB308]/50"
            >
              Book Now
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("fleet")}
              className="border-2 border-[#F8FAFC] bg-white/10 backdrop-blur-sm text-[#F8FAFC] hover:bg-white hover:text-[#0F172A] px-8 py-6 transition-all duration-300"
            >
              View Fleet
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-white/80 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#EAB308] rounded-full" />
            <span>15+ Locations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#EAB308] rounded-full" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#EAB308] rounded-full" />
            <span>No Hidden Fees</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#F8FAFC] rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-[#EAB308] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}