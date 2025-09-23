import { useTheme } from "next-themes";
import React from "react";
import { MoonStar, LucideSunMedium } from "lucide-react";
import { Toggle } from "./ui/Toggle";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      {" "}
      <Toggle
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
      >
        {theme === "light" ? (
          <MoonStar size={18} className="text-accent" />
        ) : (
          <LucideSunMedium size={24} className="text-accent" />
        )}
      </Toggle>
    </div>
  );
};

export default ThemeToggle;
