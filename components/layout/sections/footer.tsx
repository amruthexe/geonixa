"use client";

import React, { useState } from "react";
import Link from "next/link";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";

const routeList = [
  { href: "/team", label: "Team" },
  { href: "/careers", label: "Careers" },
  { href: "/about-us", label: "About us" },
];
const routeLists = [
  { href: "/support", label: "Support" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const serviceList = [
  { title: "Web Development", href: "/web" },
  { title: "App Development", href: "/app-dev" },
  { title: "Cloud Computing", href: "/cloud-comp" },
  { title: "Cyber Security", href: "/cyber-security" },
  { title: "Data Science", href: "/data-science" },
  { title: "Full Stack Web Dev", href: "/full-stack" },
  { title: "Python Programming", href: "/python" },
];

const programList = [
  { title: "All programs", href: "/programs" },
  { title: "Fast Track 45", href: "/programs/fast-track" },
  { title: "Skill Boost 2", href: "/programs/skill-boost" },
  { title: "Pro Edge 3", href: "/programs/pro-edge" },
  { title: "Dual Path 5", href: "/programs/dual-pack" },
  { title: "Career Pro 6", href: "/programs/career-pro" },
  { title: "Campus+ LearnTrack", href: "/programs/campus-plus" },
  { title: "Campus+ ProjectPro", href: "/programs/campus-project-pro" },
  { title: "Campus+ CodeStart", href: "/programs/campus-code-start" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const year = new Date().getFullYear();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return alert("Please enter a valid email.");
    }

    setLoading(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error(err);
      alert("Unable to subscribe right now. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    // local overflow-x-hidden to prevent footer-caused horizontal scroll
    <footer className="w-full bg-white border-t overflow-x-hidden">
      {/* Top area */}
      <Container>
        {/* Wrapper keeps layout consistent; ensure it doesn't add horizontal overflow */}
        <Wrapper className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand / CTA */}
          <div className="flex flex-col gap-4 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-[#eb4917]">GeoNixa</span>
            </div>

            <p className="text-sm text-[#eb4917]/90 max-w-[340px]">
              We’re an edtech startup helping students learn practical skills, build projects and launch
              careers — affordably and effectively.
            </p>

            <div className="mt-2">
              <Link href="/app" className="inline-block">
                <Button className="bg-[#eb4917] hover:bg-[#d73f10] text-white rounded-full px-4 py-2">
                  Start for free
                </Button>
              </Link>
            </div>

            {/* Socials */}
            <div className="mt-4 flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/company/geonixa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeoNixa on LinkedIn"
                className="inline-flex"
              >
                <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-[#eb4917] transition" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeoNixa on Instagram"
                className="inline-flex"
              >
                <FaInstagram className="w-5 h-5 text-gray-600 hover:text-[#eb4917] transition" />
              </Link>
              <Link
                href="https://wa.me/919663216581"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeoNixa on WhatsApp"
                className="inline-flex"
              >
                <FaWhatsapp className="w-5 h-5 text-gray-600 hover:text-[#eb4917] transition" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeoNixa on Facebook"
                className="inline-flex"
              >
                <FaFacebookF className="w-5 h-5 text-gray-600 hover:text-[#eb4917] transition" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GeoNixa on Github"
                className="inline-flex"
              >
                <FaGithub className="w-5 h-5 text-gray-600 hover:text-[#eb4917] transition" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 md:col-span-1 lg:col-span-1 min-w-0">
            <div>
              <h4 className="text-sm font-semibold mb-3">Company</h4>
              <ul className="space-y-3 text-sm text-[#eb4917]/90">
                {routeList.map((r) => (
                  <li key={r.href} className="truncate">
                    <Link href={r.href} className="hover:text-[#eb4917] transition">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Support</h4>
              <ul className="space-y-3 text-sm text-[#eb4917]/90">
                {routeLists.map((r) => (
                  <li key={r.href} className="truncate">
                    <Link href={r.href} className="hover:text-[#eb4917] transition">
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Programs / newsletter */}
          <div className="flex flex-col gap-4 min-w-0">
            <h4 className="text-sm font-semibold">Programs</h4>

            {/* Program list: use a wrapping flex with overflow-auto so long lists don't force width */}
            <div
              className="flex flex-wrap gap-2 text-sm text-[#eb4917]/90 max-h-40 overflow-auto pr-2"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {programList.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="hover:text-[#eb4917] transition text-left whitespace-nowrap"
                >
                  {p.title}
                </Link>
              ))}
            </div>

            {/* Subscribe */}
            <div className="mt-4">
              <label htmlFor="footer-email" className="text-sm font-medium block mb-2">
                Subscribe to updates
              </label>

              {/* Responsive subscribe form: stack on xs, inline from sm */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2 items-stretch sm:items-center w-full"
              >
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full sm:flex-1 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ffd7c0]"
                  aria-label="Email address"
                />

                <Button
                  type="submit"
                  className="w-full sm:w-auto bg-[#eb4917] hover:bg-[#d73f10] text-white px-4 py-2"
                  disabled={loading}
                >
                  {loading ? "Joining..." : subscribed ? "Joined" : "Join"}
                </Button>
              </form>

              <p className="text-xs text-gray-500 mt-2">Get program updates, discounts and career tips.</p>
            </div>
          </div>
        </Wrapper>
      </Container>

      {/* Bottom area */}
      <div className="border-t mt-6">
        <Container>
          <Wrapper className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">&copy; {year} GeoNixa. All rights reserved.</p>

            <div className="text-sm text-gray-600">
              Built with ❤️ —{" "}
              <Link href="/terms" className="hover:text-[#eb4917]">
                Terms
              </Link>{" "}
              ·{" "}
              <Link href="/privacy-policy" className="hover:text-[#eb4917]">
                Privacy
              </Link>
            </div>
          </Wrapper>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
