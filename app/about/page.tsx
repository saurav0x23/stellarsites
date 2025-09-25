"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code,
  Shield,
  Users,
  Target,
  Award,
  Zap,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Lead Developer & Founder",
      bio: "With over 8 years of experience in web development, Alex specializes in creating fast, scalable websites using modern technologies like Next.js and React.",
      expertise: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      bio: "Sarah transforms complex ideas into intuitive, beautiful designs that prioritize user experience and conversion optimization.",
      expertise: ["UI Design", "UX Research", "Figma", "Webflow"],
    },
    {
      name: "Marcus Rodriguez",
      role: "Project Manager",
      bio: "Marcus ensures every project runs smoothly, keeping clients informed and projects delivered on time and within budget.",
      expertise: [
        "Project Management",
        "Client Communication",
        "Agile Methodology",
      ],
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Client-First Approach",
      description:
        "We prioritize understanding your business goals to deliver solutions that drive real results.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Focused",
      description:
        "Every website we build is optimized for speed, SEO, and user experience.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Reliability",
      description:
        "We build secure, maintainable websites with ongoing support to ensure long-term success.",
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Technical Excellence",
      description:
        "Using the latest technologies and best practices to create future-proof solutions.",
    },
  ];

  const stats = [
    { number: "50+", label: "Websites Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "3+", label: "Years Experience" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-secondary font-thin">StellarSites</span>
            </h1>
            <div className="mb-6 flex justify-center">
              <img src="/logo.svg" alt="" className="h-32 w-32 my-4 animate-spin-slow"/>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We're a dedicated team of web developers helping businesses
              worldwide establish their digital presence with beautiful,
              high-performing websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                At StellarSites, we believe every business deserves a website
                that not only looks great but also performs exceptionally. We're
                committed to making professional web development accessible to
                businesses of all sizes.
              </p>
              <p className="text-lg text-slate-600">
                Whether you're a local shop in Australia or a growing startup in
                Canada, we tailor our solutions to meet your specific needs and
                help you succeed online.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <Globe className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">
                  Global Reach, Local Understanding
                </h3>
                <p className="text-blue-100">
                  We've helped businesses in over 15 countries establish their
                  online presence, with a special focus on English-speaking
                  markets like Australia, Canada, and New Zealand where we
                  understand the local business landscape.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted-foreground/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do, from initial consultation
              to ongoing support and maintenance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We're a small but dedicated team of experts passionate about
              creating exceptional digital experiences for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="bg-blue-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-blue-600">
                    <Users className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 text-center mb-4">
                    {member.role}
                  </p>
                  <p className="text-slate-600 mb-4">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Stellar Website?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project and create a website that helps your
              business shine online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Your Free Preview
              </button>
              <button className="border-2 bg-muted border-border text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="h-5 w-5 mr-2" />
              <span>stellarsites0x23.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="h-5 w-5 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Serving clients worldwide</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
