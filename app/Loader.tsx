import Image from "next/image";
import logo from "../public/logo.svg";

export default function Loader() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-screen overflow-hidden">
      {/* animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary to-black animate-gradient-x" />

      {/* logo with spin + glow */}
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 blur-2xl bg-purple-500/30 rounded-full animate-pulse" />
        <Image
          src={logo}
          alt="StellarSites Logo"
          width={96}
          height={96}
          className="relative z-10 animate-spin-slow drop-shadow-xl"
        />
      </div>

      {/* text with fade-in */}
      <p className="mt-6 text-lg font-semibold text-white animate-fade-in">
        StellarSites
      </p>
    </div>
  );
}
