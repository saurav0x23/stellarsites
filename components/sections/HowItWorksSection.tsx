import React from "react";
import { Briefcase, Monitor, Rocket } from "lucide-react";

const steps = [
  {
    title: "Tell Us About Your Business",
    description:
      "Share your goals, target audience, and brand personality. We’ll use this to craft a custom online strategy tailored to you.",
    icon: <Briefcase className="w-8 h-8 text-blue-500" />,
  },
  {
    title: "We Design & Build",
    description:
      "Our team creates a modern, mobile-first website optimized for speed, performance, and conversions.",
    icon: <Monitor className="w-8 h-8 text-green-500" />,
  },
  {
    title: "Launch & Grow",
    description:
      "Once live, we handle hosting, maintenance, and updates—so you can focus on growing your business.",
    icon: <Rocket className="w-8 h-8 text-purple-500" />,
  },
];

const HowItWorksTimeline = () => {
  return (
    <section className="relative w-[calc(100%-2rem)] mx-auto py-16 min-h-screen">
      {/* Vertical line */}

      <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

      <div className="absolute left-1/2 top-0 h-[calc(100%-4rem)] w-1 bg-accent -translate-x-1/2 mt-32" />
      <div className="flex flex-col space-y-12">
        {steps.map((step, index) => {
          const isLeft = 1;
          return (
            <div
              key={index}
              className={`relative flex items-center ${
                index !== 1 ? "justify-start" : "justify-end"
              } w-full`}
            >
              {/* Card */}
              <div
                className={`w-full md:w-5/12 p-6 bg-card rounded-2xl shadow-md border border-border ${
                  isLeft ? "text-right pr-8 md:mr-8" : "text-left pl-8 md:ml-8"
                }`}
              >
                <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                  {step.icon}
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-muted-foreground text-start">{step.description}</p>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 w-6 h-6 bg-secondary-foreground border-4 border-blue-500 rounded-full -translate-x-1/2 z-10" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
