"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Building2, Clock, Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import axios from "axios";

// Zod form validation schema
const formSchema = z.object({
  firstName: z.string().min(2).max(255),
  lastName: z.string().min(2).max(255),
  email: z.string().email(),
  subject: z.string().min(2).max(255),
  message: z.string(),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Course Inquiry",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await axios.post("/api/sendEmail", values);
      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="container">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left content: Company info */}
        <div>
          <div className="mb-4">
            <h2 className="text-lg mb-2 font-bold tracking-wider text-[#eb4917]">Contact</h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#eb4917]">Connect With Us</h2>
          </div>
          <p className="mb-8 lg:w-5/6 text-[#eb4917]/80">
            At GeoNixa E-Learning, we are committed to helping learners upskill with high-quality, industry-relevant education. Reach out to us for any queries regarding our programs or enrollment.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Building2 className="text-[#eb4917]" />
                <div className="font-bold text-[#eb4917]">Find us</div>
              </div>
              <div className="text-[#eb4917]/90">247, Trendz Aspire, Kavuri Hills, Madhapur, Hyderabad, Telangana 500033</div>
            </div>

           

        

            <div>
              <div className="flex gap-2">
                <Clock className="text-[#eb4917]" />
                <div className="font-bold text-[#eb4917]">Visit us</div>
              </div>
              <div className="text-[#eb4917]/90">
                <div>Monday - Friday</div>
                <div>9AM - 6PM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right content: Contact Form */}
        <Card className="bg-[#fff3f0] border border-[#eb4917]/20">
          <CardHeader className="text-[#eb4917] text-2xl">Contact Form</CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid w-full gap-4">
                <div className="flex flex-col md:flex-row gap-8">
                  <FormField control={form.control} name="firstName" render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-[#eb4917]">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your first name" {...field} className="border-[#eb4917]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="lastName" render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-[#eb4917]">Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your last name" {...field} className="border-[#eb4917]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#eb4917]">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} className="border-[#eb4917]" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <FormField control={form.control} name="subject" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#eb4917]">Subject</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-[#eb4917]">
                          <SelectValue placeholder="Select a subject" />
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
                )} />

                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[#eb4917]">Message</FormLabel>
                    <FormControl>
                      <Textarea rows={5} placeholder="Your message..." className="resize-none border-[#eb4917]" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                <Button className="mt-4 bg-[#eb4917] hover:bg-[#d73f10] text-white">Send message</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
