import { motion } from "motion/react";
import { MapPin, Calendar, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Choose a location",
    description: "Select from 15+ locations across Tunisia with airport and hotel pick-up available.",
    color: "#EAB308",
  },
  {
    icon: Calendar,
    title: "Pick-up date",
    description: "Choose your dates and we'll show you real-time availability and instant quotes.",
    color: "#EAB308",
  },
  {
    icon: CheckCircle,
    title: "Book your car",
    description: "Reserve your dream car in seconds with our secure and hassle-free booking system.",
    color: "#EAB308",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-wider text-[#EAB308] mb-3">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
            Book Your Car in 3 Simple Steps
          </h2>
          <p className="text-lg text-[#1E293B]/70 max-w-2xl mx-auto">
            Fast, simple, and secure — get on the road in minutes
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto relative">
          {/* Dotted connecting lines - Desktop only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1">
            <svg className="w-full h-full" style={{ overflow: "visible" }}>
              <motion.path
                d="M 200 0 Q 400 -50, 600 0"
                stroke="#EAB308"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.path
                d="M 600 0 Q 800 50, 1000 0"
                stroke="#EAB308"
                strokeWidth="2"
                strokeDasharray="8,8"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                {/* Icon Container */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.2 + 0.3 
                  }}
                  className="mb-6 flex justify-center"
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(234, 179, 8, 0.1)",
                          "0 0 0 20px rgba(234, 179, 8, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1,
                      }}
                      className="bg-gradient-to-br from-[#EAB308] to-[#EAB308]/80 p-6 rounded-2xl shadow-xl"
                    >
                      <step.icon className="w-10 h-10 text-[#0F172A]" />
                    </motion.div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 bg-[#0F172A] text-[#EAB308] w-8 h-8 rounded-full flex items-center justify-center text-sm shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl text-[#0F172A] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#1E293B]/70">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}