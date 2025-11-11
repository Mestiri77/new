import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Headphones, DollarSign, Shield, MapPinned } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Our team is always available to assist you, day or night.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees. What you see is what you pay.",
  },
  {
    icon: Shield,
    title: "GPS & Insurance Included",
    description: "Drive with peace of mind. All rentals include GPS and full insurance.",
  },
  {
    icon: MapPinned,
    title: "Airport & Hotel Pick-up",
    description: "Convenient pick-up and drop-off at airports and hotels across Tunisia.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-[#0F172A] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-[#F8FAFC] mb-4">
            Why Choose EliteDrive?
          </h2>
          <p className="text-lg text-[#F8FAFC]/70 max-w-2xl mx-auto">
            We go the extra mile to make your car rental experience seamless and enjoyable.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-[#1E293B] border-[#EAB308]/20 hover:border-[#EAB308] transition-all duration-300 group hover:shadow-xl hover:shadow-[#EAB308]/10 hover:scale-105">
                <div className="mb-4 flex justify-center">
                  <div className="bg-[#EAB308] p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-[#0F172A]" />
                  </div>
                </div>
                <h3 className="text-xl text-[#F8FAFC] text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#F8FAFC]/70 text-center">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
