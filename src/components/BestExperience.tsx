import { motion } from "motion/react";
import { DollarSign, Shield, Headphones } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const features = [
  {
    icon: DollarSign,
    title: "Deals for every budget",
    description: "Incredible prices on cars, SUVs, and luxury vehicles across Tunisia.",
  },
  {
    icon: Shield,
    title: "Best price guaranteed",
    description: "Find a lower price? We'll refund you 100% of the difference.",
  },
  {
    icon: Headphones,
    title: "Support 24/7",
    description: "Our dedicated team is here to help anytime, anywhere.",
  },
];

export function BestExperience() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Car Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Decorative background elements */}
              <div className="absolute -top-8 -left-8 w-72 h-72 bg-[#EAB308]/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-[#0F172A]/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1660320593205-2994d5dcdc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzYyNzQ2Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Premium car"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-[#EAB308] text-[#0F172A] px-6 py-4 rounded-xl shadow-xl"
              >
                <p className="text-sm">Starting from</p>
                <p className="text-3xl">25 TND<span className="text-lg">/day</span></p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-wider text-[#EAB308] mb-3">BEST SERVICES</p>
            <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-6">
              Feel the best experience
              <br />
              <span className="text-[#EAB308]">with our rental deals</span>
            </h2>
            <div className="w-16 h-1 bg-[#EAB308] mb-10" />

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex-shrink-0"
                  >
                    <div className="bg-[#EAB308]/10 p-4 rounded-xl group-hover:bg-[#EAB308] transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-[#EAB308] group-hover:text-[#0F172A] transition-colors duration-300" />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-xl text-[#0F172A] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#1E293B]/70">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
