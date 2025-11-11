import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#0F172A] mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-[#1E293B]/70">
              Have questions or need a custom quote? Contact our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-2xl text-[#0F172A] mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <Card className="p-4 border-2 border-[#0F172A]/10 hover:border-[#EAB308] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAB308] p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-[#0F172A]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#1E293B]/60">Phone</p>
                        <p className="text-[#0F172A]">+216 12 345 678</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-2 border-[#0F172A]/10 hover:border-[#EAB308] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAB308] p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-[#0F172A]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#1E293B]/60">Email</p>
                        <p className="text-[#0F172A]">info@elitedrive.tn</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 border-2 border-[#0F172A]/10 hover:border-[#EAB308] transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <div className="bg-[#EAB308] p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-[#0F172A]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#1E293B]/60">Location</p>
                        <p className="text-[#0F172A]">Avenue Habib Bourguiba, Tunis</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Business Hours */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#F8FAFC] p-6 rounded-lg"
              >
                <h4 className="text-[#0F172A] mb-4">Business Hours</h4>
                <div className="space-y-2 text-[#1E293B]/70">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="p-8 border-2 border-[#0F172A]/10 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      className="bg-[#F8FAFC]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      required
                      className="bg-[#F8FAFC]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      rows={6}
                      required
                      className="bg-[#F8FAFC] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#EAB308] hover:bg-[#EAB308]/90 text-[#0F172A] py-6 transition-all duration-300 hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
