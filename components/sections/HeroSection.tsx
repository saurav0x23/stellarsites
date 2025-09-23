// HeroSection Component
import React from "react";
import Aurora from "../ui/Aurora";
import ShinyText from "../ShinyText";
import GlareHover from "../GlareHover";
import CardSwap, { Card } from "../CardSwap";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-32 min-h-screen w-full overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 -z-20 bg-background blur-3xl"></div>

      {/* Aurora background */}
      <div className="absolute inset-0 -z-10 overflow-hidden w-full h-full">
        <Aurora
          colorStops={["#1E3A8A", "#312E81", "#06B6D4"]}
          blend={1}
          amplitude={1.0}
          speed={0.8}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-6xl max-w-xl font-semibold tracking-tight text-foreground leading-tight">
            Websites that work as hard as{" "}
            <span className="text-secondary bg-secondary-foreground/10  border border-accent/20 rounded-md px-2 shadow-sm">
              You
            </span>{" "}
            do.
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-lg text-muted-foreground max-w-lg leading-relaxed">
            We craft{" "}
            <span className="font-semibold text-accent">
              beautiful, high-converting
            </span>{" "}
            websites built to{" "}
            <span className="underline decoration-accent decoration-2 underline-offset-4">
              grow your business
            </span>
            . Stop getting lost online — start getting noticed.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-secondary text-secondary-foreground rounded-xl text-lg font-semibold shadow-md transition-all duration-300 hover:shadow-lg">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                className="w-full h-full flex items-center justify-center rounded-xl text-lg font-semibold"
              >
                Get Free Preview
              </GlareHover>
            </button>
          </div>
        </div>

        {/* Right: CardSwap */}
        <div className="flex justify-center md:justify-end items-baseline">
          <div style={{ height: "400px", position: "relative" }}>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card
                style={{
                  backgroundImage:
                    "url(https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card
                style={{
                  backgroundImage:
                    "url(https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card
                style={{
                  backgroundImage:
                    "url(https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
              <Card
                style={{
                  backgroundImage:
                    "url(https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <h3>Card 1</h3>
                <p>Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
