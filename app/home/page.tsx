// app/page.tsx
"use client";

import LogoLoop from "@/components/LogoLoop";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import PricingSection from "@/components/sections/PricingSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import ScrollVelocity from "@/components/ScrollVelocity";
import Footer from "@/components/footer-section";
import BackgroundDots from "@/components/ui/Dots";
import GradualBlur from "@/components/GradualBlur";
import BackgroundLogos from "@/components/ui/BackgroundLogos";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const lenisRef = useRef<Lenis | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // RAF loop for Lenis
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Connect Lenis with GSAP ScrollTrigger
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) {
          lenis.scrollTo(value as number, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: document.documentElement.style.transform ? "transform" : "fixed",
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // Refresh ScrollTrigger
    ScrollTrigger.addEventListener("refresh", () => lenis.raf(Date.now()));
    ScrollTrigger.refresh();

    // Custom section snapping logic
    const isSnapping = false;
    const sections = Array.from(
      document.querySelectorAll(".scroll-section")
    ) as HTMLElement[];
    sectionsRef.current = sections;

    // Debounced scroll end detection
    let scrollTimeout: NodeJS.Timeout;
    const handleScrollEnd = () => {
      if (isSnapping) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const currentScroll = lenis.scroll;
        const windowHeight = window.innerHeight;
        let closestSection = sections[0];
        let minDistance = Infinity;

        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const sectionTop = currentScroll + rect.top;
          const sectionCenter = sectionTop + rect.height / 2;
          const viewportCenter = currentScroll + windowHeight / 2;
          const distance = Math.abs(sectionCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section;
          }
        });
      }, 150);
    };

    lenis.on("scroll", handleScrollEnd);

    // Cleanup
    return () => {
      clearTimeout(scrollTimeout);
      lenis.off("scroll", handleScrollEnd);
      ScrollTrigger.killAll();
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const velocity = 50; // Adjust the velocity as needed
  return (
    <div className="page-wrapper">
      {/* <BackgroundLogos /> */}

      <section className="scroll-section min-h-screen">
        <HeroSection />
      </section>

      {/* <section className="scroll-section min-h-screen flex flex-col justify-center items-center ">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-12 leading-tight">
            Trusted by Businesses
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Worldwide
            </span>
          </h2>
          <LogoLoop
            logos={[
              {
                node: (
                  <img
                    src="/logos/airbnb.svg"
                    alt="Airbnb"
                    className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                ),
                title: "Airbnb",
                href: "/",
              },
            ]}
            speed={60}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#f8fafc"
            ariaLabel="Technology partners"
          />
        </div>
      </section> */}

      <section className="scroll-section min-h-screen">
        <ServicesSection />
      </section>
      <section className="py-32 relative min-h-screen">
        <BackgroundDots />
        <ScrollVelocity
          texts={[
            "You deserve a better website.",
            "StellarSites is here.",
            "Grow your business online.",
          ]}
          velocity={velocity}
          className="custom-scroll-text"
        />
      </section>

      <section className=" min-h-screen">
        <PortfolioSection />
      </section>

      <section className="scroll-section min-h-screen">
        <PricingSection />
      </section>

      <section className="scroll-section min-h-screen py-24">
        <HowItWorksSection />
      </section>
      <section className="scroll-section w-full mb-12">
        <Footer />
      </section>
      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </div>
  );
}
