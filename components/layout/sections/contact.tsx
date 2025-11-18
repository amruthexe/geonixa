"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";

/* --- validation --- */
const formSchema = z.object({
  firstName: z.string().min(2, "Too short").max(255),
  lastName: z.string().min(2, "Too short").max(255),
  email: z.string().email("Enter a valid email"),
  subject: z.string().min(2).max(255),
  message: z.string().min(6, "Please enter a longer message"),
});
type FormData = z.infer<typeof formSchema>;

export const ContactSection = () => {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Course Inquiry",
      message: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    setSubmitting(true);
    try {
      await axios.post("/api/sendEmail", values);
      setSent(true);
      form.reset();
    } catch (err) {
      // show friendly error
      // you can replace with your toast system
      alert("Error sending message. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* LEFT - info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#eb4917]">
              Connect With Us
            </h2>

            <p className="text-gray-600 max-w-md">
              At GeoNixa, we help learners upskill with industry-relevant programs.
              Have a question about a course, partnership, or hiring our grads? Reach
              out — we're here to help.
            </p>

            <div className="grid grid-cols-1 gap-4 max-w-sm">
              {/* Find us */}
              <div className="flex gap-4 items-start bg-white border border-orange-100 rounded-3xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#fff7f3] flex items-center justify-center text-[#eb4917]">
                  <Building2 size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Find us</div>
                  <div className="text-sm text-gray-600">247, Trendz Aspire, Kavuri Hills, Hyderabad, Telangana 500033</div>
                </div>
              </div>

              {/* Call us */}
              <div className="flex gap-4 items-start bg-white border border-orange-100 rounded-3xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#fff7f3] flex items-center justify-center text-[#eb4917]">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Call us</div>
                  <div className="text-sm text-gray-600">+91-9663216581</div>
                </div>
              </div>

              {/* Mail us */}
              <div className="flex gap-4 items-start bg-white border border-orange-100 rounded-3xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#fff7f3] flex items-center justify-center text-[#eb4917]">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Mail us</div>
                  <div className="text-sm text-gray-600">hr@geonixa.com</div>
                </div>
              </div>

              {/* Visiting hours */}
              <div className="flex gap-4 items-start bg-white border border-orange-100 rounded-3xl p-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#fff7f3] flex items-center justify-center text-[#eb4917]">
                  <Clock size={18} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Visit us</div>
                  <div className="text-sm text-gray-600">Mon - Fri · 9AM - 6PM</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - form */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-3xl overflow-hidden border border-orange-100 shadow-lg">
              <div className="bg-gradient-to-r from-[#ffedd8] via-[#ffe1cc] to-[#ffd3b8] p-6">
                <h3 className="text-xl font-bold text-[#bf3b12]">Contact Form</h3>
                <p className="text-sm text-[#7a2b0f] mt-1">Ask about programs, partnerships or careers.</p>
              </div>

              <CardContent>
                {sent && (
                  <div className="mb-4 rounded-lg bg-[#ecfdf5] border border-green-200 text-green-700 px-4 py-3">
                    Message sent successfully — we will get back to you soon.
                  </div>
                )}

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#eb4917]">First name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="First name"
                                className="focus:ring-2 focus:ring-[#ffb08a] border border-gray-200"
                                aria-label="First name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm text-[#eb4917]">Last name</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Last name"
                                className="focus:ring-2 focus:ring-[#ffb08a] border border-gray-200"
                                aria-label="Last name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-[#eb4917]">Email</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="you@example.com"
                              className="focus:ring-2 focus:ring-[#ffb08a] border border-gray-200"
                              aria-label="Email address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-[#eb4917]">Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border border-gray-200 focus:ring-2 focus:ring-[#ffb08a]">
                                <SelectValue placeholder="Select subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Course Inquiry">Course Inquiry</SelectItem>
                              <SelectItem value="Partnership">Partnership</SelectItem>
                              <SelectItem value="Support">Support</SelectItem>
                              <SelectItem value="Career Opportunities">Career Opportunities</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm text-[#eb4917]">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={5}
                              placeholder="Tell us how we can help..."
                              className="resize-none border border-gray-200 focus:ring-2 focus:ring-[#ffb08a]"
                              aria-label="Message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center gap-4">
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="bg-[#eb4917] hover:bg-[#d73f10] text-white font-semibold rounded-full px-6 py-3"
                        aria-disabled={submitting}
                      >
                        {submitting ? "Sending..." : "Send message"}
                      </Button>

                      <div className="text-sm text-gray-500">
                        Or email us at <span className="font-medium text-gray-700">hr@geonixa.com</span>
                      </div>
                    </div>
                  </form>
                </Form>
              </CardContent>

              <CardFooter className="bg-white/50"></CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
