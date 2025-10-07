"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react"; // Import tick mark icon from Lucide

export default function AboutUsPage() {
  return (
    <section id="about-us" className="bg-white dark:bg-black text-black dark:text-white py-12 sm:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-red-500">About TriSet Agency</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Innovating IT Solutions for a Digital Future
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            At TriSet, we are committed to delivering cutting-edge software solutions tailored to meet the unique needs of our clients.
            Our team of experienced developers and digital strategists work collaboratively to create innovative applications, websites,
            and digital marketing strategies that drive business growth. With a focus on quality, efficiency, and user experience, we
            leverage the latest technologies and industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <Image
              src="https://plus.unsplash.com/premium_photo-1675198764382-94d5c093df30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="TriSet Team"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>

          <div className="space-y-6 ">
            <div className="border-2 p-6 rounded-xl shadow-lg dark:bg-background bg-white">
              <h4 className="text-2xl font-semibold mb-4">Our Services</h4>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                  Web Development: Creating dynamic, responsive websites that captivate users and drive engagement.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                  Mobile App Development: Building cross-platform mobile applications that scale with your business needs.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                  Data Entry: Streamlining data management and entry tasks for better efficiency.
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-red-500 mr-3" />
                  Digital Marketing: Helping businesses grow by leveraging effective digital marketing strategies.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="border-2 p-6 rounded-xl shadow-lg dark:bg-background bg-white">
            <h4 className="text-2xl font-semibold mb-4">Our Vision</h4>
            <p className="text-lg text-muted-foreground mb-8">
              At TriSet, our vision is to be the leading provider of innovative and sustainable IT solutions worldwide. We aspire to
              empower businesses through technology, helping them achieve lasting success and growth in an ever-changing digital landscape.
            </p>
          </div>

          <div className="border-2 p-6 rounded-xl shadow-lg dark:bg-background bg-white mt-8">
            <h4 className="text-2xl font-semibold mb-4">Our Mission</h4>
            <p className="text-lg text-muted-foreground">
              Our mission is to deliver high-quality, customer-focused IT solutions that enhance operational efficiency, foster business
              growth, and create lasting value for our clients. We are driven by the belief that technology has the power to transform
              businesses, and we are committed to helping our clients achieve their full potential by offering customized, cutting-edge
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
