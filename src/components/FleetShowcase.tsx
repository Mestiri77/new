import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Users, Briefcase, Gauge, Heart } from "lucide-react";
import { useState } from "react";

const brands = [
  { name: "All Brands", logo: null },
  { name: "Mercedes", logo: null },
  { name: "BMW", logo: null },
  { name: "Audi", logo: null },
  { name: "Toyota", logo: null },
  { name: "Honda", logo: null },
];

const carFleet = [
  {
    id: 1,
    name: "Compact City Car",
    brand: "Honda",
    category: "Economy",
    price: "25",
    monthlyPrice: "18",
    image: "https://images.unsplash.com/photo-1701314860844-cd2152fa9071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYWN0JTIwY2l0eSUyMGNhcnxlbnwxfHx8fDE3NjI3NDM3MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    passengers: 4,
    luggage: 2,
    transmission: "Manual",
    fuel: "Diesel",
    year: 2023,
  },
  {
    id: 2,
    name: "Luxury Sedan",
    brand: "Mercedes",
    category: "Premium",
    price: "89",
    monthlyPrice: "65",
    image: "https://images.unsplash.com/photo-1758216383800-7023ee8ed42b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzZWRhbiUyMGNhcnxlbnwxfHx8fDE3NjI4MjY0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    passengers: 5,
    luggage: 3,
    transmission: "Auto",
    fuel: "Diesel",
    year: 2024,
  },
  {
    id: 3,
    name: "Premium SUV",
    brand: "BMW",
    category: "Luxury",
    price: "120",
    monthlyPrice: "95",
    image: "https://images.unsplash.com/photo-1747414632749-6c8b14ba30fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdXYlMjBjYXJ8ZW58MXx8fHwxNzYyODI2NDcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    passengers: 7,
    luggage: 5,
    transmission: "Auto",
    fuel: "Diesel",
    year: 2024,
  },
  {
    id: 4,
    name: "Sports Convertible",
    brand: "Audi",
    category: "Sport",
    price: "150",
    monthlyPrice: "120",
    image: "https://images.unsplash.com/photo-1564728131508-c5737aeba3c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjb252ZXJ0aWJsZSUyMGNhcnxlbnwxfHx8fDE3NjI4MjY0NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    passengers: 2,
    luggage: 1,
    transmission: "Auto",
    fuel: "Diesel",
    year: 2024,
  },
];

export function FleetShowcase() {
  const [selectedBrand, setSelectedBrand] = useState("All Brands");
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(favId => favId !== id) : [...prev, id]
    );
  };

  const filteredCars = selectedBrand === "All Brands" 
    ? carFleet 
    : carFleet.filter(car => car.brand === selectedBrand);

  return (
    <section id="fleet" className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-wider text-[#EAB308] mb-3">BEST SERVICES</p>
          <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
            Explore Our Top Deals From
            <br />
            <span className="text-[#EAB308]">Top-Rated Dealers</span>
          </h2>
        </motion.div>

        {/* Brand Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {brands.map((brand, index) => (
            <motion.button
              key={brand.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedBrand(brand.name)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                selectedBrand === brand.name
                  ? "bg-[#EAB308] text-[#0F172A] shadow-lg"
                  : "bg-white text-[#1E293B] hover:bg-[#0F172A] hover:text-white shadow-md"
              }`}
            >
              {brand.name}
            </motion.button>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: brands.length * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-white text-[#1E293B] hover:bg-[#0F172A] hover:text-white transition-all duration-300 shadow-md"
          >
            Explore 20+
          </motion.button>
        </motion.div>

        {/* Car Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCars.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500 border-0 bg-white">
                {/* Car Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-white p-4">
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-[#0F172A] text-white px-3 py-1 rounded-lg text-sm">
                    {car.year}
                  </div>
                  
                  {/* Favorite Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(car.id)}
                    className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all"
                  >
                    <Heart 
                      className={`w-5 h-5 ${
                        favorites.includes(car.id) 
                          ? "fill-red-500 text-red-500" 
                          : "text-[#1E293B]/40"
                      } transition-colors`}
                    />
                  </motion.button>

                  <ImageWithFallback
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <h3 className="text-xl text-[#0F172A] mb-1">{car.name}</h3>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl text-[#EAB308]">${car.price}</span>
                      <span className="text-[#1E293B]/60">| ${car.monthlyPrice}/month</span>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-[#0F172A]/10">
                    <div className="flex flex-col items-center text-center">
                      <Users className="w-4 h-4 text-[#1E293B]/60 mb-1" />
                      <span className="text-xs text-[#1E293B]/60">{car.passengers}p</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Gauge className="w-4 h-4 text-[#1E293B]/60 mb-1" />
                      <span className="text-xs text-[#1E293B]/60">{car.transmission}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <Briefcase className="w-4 h-4 text-[#1E293B]/60 mb-1" />
                      <span className="text-xs text-[#1E293B]/60">{car.fuel}</span>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-[#0F172A] hover:bg-[#EAB308] hover:text-[#0F172A] transition-all duration-300"
                  >
                    Rent Now
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}