"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-card text-card-foreground pt-16 pb-8 mt-16 rounded-t-3xl border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 71.85 71.85"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:animate-spin hover:duration-1000 transition-transform delay-1000 ease-in-out mr-2 cursor-pointer"
            >
              <defs>
                <linearGradient
                  id="navyGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stop-color="#001f4d" />
                  <stop offset="50%" stop-color="#002b5c" />
                  <stop offset="100%" stop-color="#003366" />
                </linearGradient>
                <filter
                  id="shadow"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="1"
                    flood-color="#000000"
                    flood-opacity="0.4"
                  />
                </filter>
              </defs>
              <g
                transform="translate(2 2)"
                filter="url(#shadow)"
                stroke="black"
                stroke-width="0.3"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M33.925,69.851h0a2,2,0,0,1-1.943-1.525L27.332,49.3,12.424,58.352A2,2,0,0,1,9.677,55.6L18.8,40.579-.475,35.868A2,2,0,0,1-2,33.926,2,2,0,0,1-.475,31.983l19.181-4.689L9.677,12.424a2,2,0,0,1,2.748-2.748l14.87,9.029L31.982-.475A2,2,0,0,1,33.925-2,2,2,0,0,1,35.868-.475L40.58,18.8,55.6,9.677a2,2,0,0,1,2.748,2.748L49.3,27.332l19.027,4.651a2,2,0,0,1,0,3.885l-19.12,4.674L58.351,55.6A2,2,0,0,1,55.6,58.351L40.542,49.206,35.868,68.325A2,2,0,0,1,33.925,69.851Zm-5.3-25.678A2,2,0,0,1,30.57,45.7l3.355,13.729L37.3,45.605a2,2,0,0,1,2.981-1.235l10.4,6.315-6.314-10.4A2,2,0,0,1,45.6,37.3l13.823-3.379L45.7,30.57a2,2,0,0,1-1.234-2.981l6.221-10.246L40.323,23.634A2,2,0,0,1,37.342,22.4L33.925,8.423,30.532,22.306a2,2,0,0,1-2.981,1.235l-10.208-6.2,6.2,10.208a2,2,0,0,1-1.234,2.981L8.424,33.926,22.4,37.342a2,2,0,0,1,1.235,2.98L17.343,50.685l10.246-6.222A2,2,0,0,1,28.627,44.173Z"
                  fill="#ffffff"
                />
              </g>
            </svg>

            <h2 className="text-2xl font-bold text-white">StellarSites.</h2>
          </div>
          <p className="mt-4 text-slate-400 max-w-sm">
            We craft beautiful, high-converting websites that help your business
            grow. Trusted by brands worldwide.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/works" className="hover:text-white transition">
                  Our Works
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-3">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="font-semibold text-white mb-3">Stay Connected</h3>
          <p className="text-slate-400 mb-4">
            Get updates and insights straight to your inbox.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-lg bg-slate-700 text-slate-200 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-r-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <Link
              href="https://github.com"
              className="hover:text-white transition"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              className="hover:text-white transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://twitter.com"
              className="hover:text-white transition"
            >
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-12 border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} YourAgency. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
