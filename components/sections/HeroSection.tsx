// HeroSection Component
import React from "react";
import Aurora from "../ui/Aurora";
import ShinyText from "../ShinyText";
import GlareHover from "../GlareHover";
import CardSwap, { Card } from "../CardSwap";

const HeroSection = () => {
  const projectData = [
    {
      image: "/portfolio/madrasa.png",
      name: "Madrasa Platform",
      description:
        "A global e-learning platform offering personalized dashboards for both students and teachers. Designed to make quality education accessible to everyone, regardless of location or background.",
    },
    {
      image: "/portfolio/skillsync.png",
      name: "SkillSync",
      description:
        "Upload your resume and let AI instantly enhance it. SkillSync matches you with tailored job opportunities from top companies—your career upgrade starts here.",
    },
    {
      image: "/portfolio/heavy.png",

    },
    {
      image: "/portfolio/nftix.png",
      name: "NFTix",
      description:
        "A decentralized platform to mint secure NFT-based event tickets. Focuses on transparency, safety, and simplicity. Built with performance-first principles and modern UI.",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/43412719/file/original-718fd35e460756288f2e6fadd299d65b.jpg?resize=2400x1800&vertical=center",
    },
  ];
  return (
    <section className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">
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

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left: Text Content */}
          <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left space-y-4">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                Websites that work as hard as{" "}
                <span className="inline-block text-secondary bg-secondary-foreground/10 border border-accent/20 rounded-lg px-3 py-1 shadow-sm">
                  You
                </span>{" "}
                do.
              </h1>
            </div>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto lg:mx-0">
              <p className="text-lg sm:text-xl lg:text-xl text-muted-foreground leading-relaxed">
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
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-secondary text-secondary-foreground rounded-xl shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]">
                <GlareHover
                  glareColor="#ffffff"
                  glareOpacity={0.3}
                  glareAngle={-30}
                  glareSize={300}
                  transitionDuration={800}
                  playOnce={false}
                  className="w-full h-full flex items-center justify-center rounded-xl text-lg sm:text-xl font-semibold"
                >
                  Get Free Preview
                </GlareHover>
              </button>

              <div className="flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 rounded-xl px-6 py-4 hover:scale-[1.02] active:scale-[0.98]">
                <ShinyText
                  text="See Examples"
                  className="text-lg sm:text-xl font-medium text-muted-foreground hover:text-accent transition-colors duration-300 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Right: CardSwap */}
          <div className="lg:col-span-5 xl:col-span-6 flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <div style={{ height: "400px", position: "relative" }}>
                <CardSwap
                  cardDistance={60}
                  verticalDistance={70}
                  delay={5000}
                  pauseOnHover={false}
                >
                  {projectData.map((project, index) => (
                    <Card
                      key={index}
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                      }}
                      className="aspect-video w-full h-full"
                    ></Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
