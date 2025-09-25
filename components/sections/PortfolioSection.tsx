"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import cn from "clsx";

export const PortfolioSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Our Featured
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
              Works
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover our latest projects showcasing innovative solutions and cutting-edge design
          </p>
        </motion.div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 auto-rows-[300px] sm:auto-rows-[320px] lg:auto-rows-[380px]">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className={cn(
                "relative group overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg cursor-pointer",
                "border border-border/50 bg-card backdrop-blur-sm",
                "hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500",
                "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/5 before:to-accent/5 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
                card.className
              )}
            >
              {/* Enhanced Background Image with Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  animate={{
                    scale: hoveredCard === card.id ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={card.thumbnail}
                    alt={card.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </motion.div>
              </div>

              {/* Enhanced Overlay with Better Gradient - Stronger for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20 group-hover:from-black/98 group-hover:via-black/80 group-hover:to-black/30 transition-all duration-500" />
              
              {/* Additional overlay for better text contrast */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

              {/* Animated Border Effect */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500" />

              {/* Enhanced Content with Better Typography */}
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0.8 }}
                  animate={{ 
                    y: hoveredCard === card.id ? 0 : 20,
                    opacity: hoveredCard === card.id ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Tag with better contrast */}
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/30 mb-3 shadow-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-lg" />
                    <span className="text-xs font-medium text-white drop-shadow-lg">
                      {card.category}
                    </span>
                  </div>

                  {/* Title with text shadow for better visibility */}
                  <h3 className="text-base sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-2xl [text-shadow:_2px_2px_4px_rgb(0_0_0_/_80%)]">
                    {card.title}
                  </h3>

                  {/* Description with enhanced contrast */}
                  <p className="text-white text-sm sm:text-base leading-relaxed mb-4 line-clamp-3 drop-shadow-lg [text-shadow:_1px_1px_2px_rgb(0_0_0_/_60%)]">
                    {card.description}
                  </p>

                  {/* Technologies with better contrast */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {/* {card.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-black/40 backdrop-blur-sm text-white rounded-full border border-white/30 shadow-lg drop-shadow-sm"
                      >
                        {tech}
                      </span>
                    ))} */}
                  </div>

                  {/* Enhanced CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm shadow-lg hover:bg-primary/90 transition-all duration-300 group/btn"
                  >
                    <span>View Project</span>
                    <motion.svg
                      animate={{ x: hoveredCard === card.id ? 5 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </div>

              {/* Hover Effect Particles */}
              {/* <AnimatePresence>
                {hoveredCard === card.id && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
                        animate={{ 
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                          ease: "easeOut"
                        }}
                        className="absolute w-1 h-1 bg-primary rounded-full"
                        style={{
                          left: '50%',
                          top: '50%',
                        }}
                      />
                    ))}
                  </>
                )}
              </AnimatePresence> */}
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <span>View All Projects</span>
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

const cards = [
  {
    id: 1,
    title: "SkillSync",
    description:
      "A web app that allows users to upload their resumes and let AI instantly enhance it. SkillSync matches you with tailored job opportunities from top companies—your career upgrade starts here.",
    className: "sm:col-span-2 lg:col-span-7",
    category: "AI Platform",
    technologies: ["React", "AI/ML", "Node.js", "MongoDB"],
    thumbnail: "/portfolio/skillsync.png",
  },
  {
    id: 2,
    title: "Madrasa Platform",
    description:
      "An online learning platform designed for educational institutions to offer courses, manage students, and facilitate interactive learning experiences.",
    className: "sm:col-span-2 lg:col-span-5",
    category: "EdTech",
    technologies: ["Next.js", "PostgreSQL", "WebRTC"],
    thumbnail: "/portfolio/madrasa.png",
  },
  {
    id: 3,
    title: "Leading Edge Drone Services",
    description:
      "A portfolio website for a drone services company, with a sleek and professional design built for clarity and performance. Responsive and fully optimized for modern web.",
    className: "sm:col-span-2 lg:col-span-5",
    category: "Corporate",
    technologies: ["Vue.js", "GSAP", "Tailwind"],
    thumbnail: "/portfolio/leading.png",
  },
  {
    id: 4,
    title: "NFTix",
    description:
      "A decentralized platform to mint secure NFT-based event tickets. Focuses on transparency, safety, and simplicity. Built with performance-first principles and modern UI.",
    className: "sm:col-span-2 lg:col-span-7",
    category: "Web3",
    technologies: ["React", "Blockchain", "Web3.js", "Solidity"],
    thumbnail: "/portfolio/nftix.png",
  },
];