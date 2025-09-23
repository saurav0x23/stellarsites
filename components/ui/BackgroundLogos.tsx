// components/ui/BackgroundLogos.tsx
"use client";

import { useMemo } from "react";

const BackgroundLogos = () => {
  const logos = useMemo(() => {
    // Generate random positions, sizes, and rotations
    return Array.from({ length: 25 }).map((_, i) => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${20 + Math.random() * 60}px`,
      rotate: `${Math.random() * 360}deg`,
      opacity: 0.05 + Math.random() * 0.08,
      blur: `${2 + Math.random() * 6}px`,
    }));
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {logos.map((logo, i) => (
        <svg
          key={i}
          width={logo.size}
          height={logo.size}
          viewBox="0 0 71.85 71.85"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: "absolute",
            top: logo.top,
            left: logo.left,
            transform: `rotate(${logo.rotate})`,
            filter: `blur(${logo.blur})`,
            opacity: logo.opacity,
          }}
        >
          <defs>
            <linearGradient id={`bgLogoGradient-${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#001f4d" />
              <stop offset="50%" stopColor="#002b5c" />
              <stop offset="100%" stopColor="#003366" />
            </linearGradient>
          </defs>
          <path
            d="M33.925,69.851h0a2,2,0,0,1-1.943-1.525L27.332,49.3,12.424,58.352A2,2,0,0,1,9.677,55.6L18.8,40.579-.475,35.868A2,2,0,0,1-2,33.926,2,2,0,0,1-.475,31.983l19.181-4.689L9.677,12.424a2,2,0,0,1,2.748-2.748l14.87,9.029L31.982-.475A2,2,0,0,1,33.925-2,2,2,0,0,1,35.868-.475L40.58,18.8,55.6,9.677a2,2,0,0,1,2.748,2.748L49.3,27.332l19.027,4.651a2,2,0,0,1,0,3.885l-19.12,4.674L58.351,55.6A2,2,0,0,1,55.6,58.351L40.542,49.206,35.868,68.325A2,2,0,0,1,33.925,69.851Zm-5.3-25.678A2,2,0,0,1,30.57,45.7l3.355,13.729L37.3,45.605a2,2,0,0,1,2.981-1.235l10.4,6.315-6.314-10.4A2,2,0,0,1,45.6,37.3l13.823-3.379L45.7,30.57a2,2,0,0,1-1.234-2.981l6.221-10.246L40.323,23.634A2,2,0,0,1,37.342,22.4L33.925,8.423,30.532,22.306a2,2,0,0,1-2.981,1.235l-10.208-6.2,6.2,10.208a2,2,0,0,1-1.234,2.981L8.424,33.926,22.4,37.342a2,2,0,0,1,1.235,2.98L17.343,50.685l10.246-6.222A2,2,0,0,1,28.627,44.173Z"
            fill={`url(#bgLogoGradient-${i})`}
          />
        </svg>
      ))}
    </div>
  );
};

export default BackgroundLogos;
