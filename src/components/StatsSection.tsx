import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";
import { Car, Users, MapPin, Award } from "lucide-react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest.toString() + suffix;
      }
    });
    return () => unsubscribe();
  }, [rounded, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  {
    icon: Car,
    value: 500,
    suffix: "+",
    label: "Premium Vehicles",
  },
  {
    icon: Users,
    value: 12000,
    suffix: "+",
    label: "Happy Customers",
  },
  {
    icon: MapPin,
    value: 15,
    suffix: "+",
    label: "Locations in Tunisia",
  },
  {
    icon: Award,
    value: 5,
    suffix: "",
    label: "Years of Excellence",
  },
];

export function StatsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-[#EAB308] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-[#EAB308] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Trusted by Thousands Across Tunisia
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Our numbers speak for themselves — quality, reliability, and customer satisfaction
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="mb-4 flex justify-center"
              >
                <div className="bg-[#EAB308] p-4 rounded-2xl group-hover:shadow-2xl group-hover:shadow-[#EAB308]/50 transition-all duration-300">
                  <stat.icon className="w-8 h-8 text-[#0F172A]" />
                </div>
              </motion.div>
              <div className="text-5xl md:text-6xl text-[#EAB308] mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-white/80">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
