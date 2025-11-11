import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Amine Ben Salah",
    location: "Tunis, Tunisia",
    text: "Best rental experience ever! The car was clean, modern, and the booking process was super easy. EliteDrive made my business trip stress-free.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sana Trabelsi",
    location: "Sousse, Tunisia",
    text: "Loved the luxury options — EliteDrive made our weekend unforgettable! The customer service was exceptional and the car was in perfect condition.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mohamed Khelifi",
    location: "Sfax, Tunisia",
    text: "Transparent pricing and no surprises at checkout. I appreciated the GPS and insurance included. Will definitely rent from them again!",
    rating: 5,
  },
  {
    id: 4,
    name: "Leila Gharbi",
    location: "Hammamet, Tunisia",
    text: "Pick-up at the airport was seamless. The team was professional and friendly. Great selection of vehicles at competitive prices.",
    rating: 5,
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust EliteDrive for their car rental needs.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="p-8 md:p-12 bg-white border-2 border-[#0F172A]/10 shadow-xl">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[#EAB308] text-[#EAB308]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl text-[#1E293B] text-center mb-8 italic">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div className="text-center">
                  <p className="text-[#0F172A] mb-1">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-sm text-[#1E293B]/60">
                    {testimonials[activeIndex].location}
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#EAB308] w-8"
                      : "bg-[#0F172A]/20 hover:bg-[#0F172A]/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="px-6 py-2 bg-[#0F172A] text-[#F8FAFC] rounded-lg hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-[#0F172A] text-[#F8FAFC] rounded-lg hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
