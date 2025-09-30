"use client";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        {loading ? (
          <Loader />
        ) : (
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {window.location.pathname !== "/product-demo" && <Navbar />}
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
