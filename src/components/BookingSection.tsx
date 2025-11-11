import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calendar, MapPin, Car } from "lucide-react";
import { useState } from "react";

export function BookingSection() {
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    // Mock price calculation
    const randomPrice = Math.floor(Math.random() * (200 - 50) + 50);
    setEstimatedPrice(randomPrice);
  };

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
              Quick & Easy Booking
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              Real-time price preview and instant booking confirmation.
            </p>
          </div>

          {/* Booking Form */}
          <Card className="p-8 border-2 border-[#0F172A]/10 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pick-up Location */}
              <div className="space-y-2">
                <Label htmlFor="pickup-location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EAB308]" />
                  Pick-up Location
                </Label>
                <Select>
                  <SelectTrigger id="pickup-location" className="bg-[#F8FAFC]">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tunis-airport">Tunis-Carthage Airport</SelectItem>
                    <SelectItem value="tunis-downtown">Tunis Downtown</SelectItem>
                    <SelectItem value="sousse">Sousse</SelectItem>
                    <SelectItem value="sfax">Sfax</SelectItem>
                    <SelectItem value="djerba">Djerba</SelectItem>
                    <SelectItem value="hammamet">Hammamet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Drop-off Location */}
              <div className="space-y-2">
                <Label htmlFor="dropoff-location" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#EAB308]" />
                  Drop-off Location
                </Label>
                <Select>
                  <SelectTrigger id="dropoff-location" className="bg-[#F8FAFC]">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tunis-airport">Tunis-Carthage Airport</SelectItem>
                    <SelectItem value="tunis-downtown">Tunis Downtown</SelectItem>
                    <SelectItem value="sousse">Sousse</SelectItem>
                    <SelectItem value="sfax">Sfax</SelectItem>
                    <SelectItem value="djerba">Djerba</SelectItem>
                    <SelectItem value="hammamet">Hammamet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Pick-up Date */}
              <div className="space-y-2">
                <Label htmlFor="pickup-date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#EAB308]" />
                  Pick-up Date
                </Label>
                <Input
                  id="pickup-date"
                  type="date"
                  className="bg-[#F8FAFC]"
                  defaultValue="2025-11-15"
                />
              </div>

              {/* Drop-off Date */}
              <div className="space-y-2">
                <Label htmlFor="dropoff-date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#EAB308]" />
                  Drop-off Date
                </Label>
                <Input
                  id="dropoff-date"
                  type="date"
                  className="bg-[#F8FAFC]"
                  defaultValue="2025-11-20"
                />
              </div>

              {/* Car Category */}
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="car-category" className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#EAB308]" />
                  Car Category
                </Label>
                <Select>
                  <SelectTrigger id="car-category" className="bg-[#F8FAFC]">
                    <SelectValue placeholder="Select car category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="economy">Economy</SelectItem>
                    <SelectItem value="premium">Premium</SelectItem>
                    <SelectItem value="luxury">Luxury</SelectItem>
                    <SelectItem value="sport">Sport</SelectItem>
                    <SelectItem value="suv">SUV</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Price Preview */}
            {estimatedPrice && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 p-4 bg-[#EAB308]/10 border-2 border-[#EAB308] rounded-lg"
              >
                <p className="text-center">
                  Estimated Total: <span className="text-2xl text-[#EAB308]">{estimatedPrice} TND</span>
                </p>
              </motion.div>
            )}

            {/* Submit Button */}
            <Button
              onClick={calculatePrice}
              className="w-full mt-6 bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] py-6 transition-all duration-300 hover:scale-105"
            >
              Find Your Car
            </Button>

            <p className="text-center text-sm text-[#1E293B]/60 mt-4">
              ✓ Instant confirmation • No hidden fees • Flexible cancellation
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
