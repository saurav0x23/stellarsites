import React from "react";
import SpotlightCard from "../SpotlightCard";
import {
  Monitor,
  Zap,
  Server,
  Smartphone,
  ShoppingCart,
  Search,
} from "lucide-react";

const ServicesSection = () => {
  return (
    <div className="w-full py-16 min-h-screen">
      <div className="flex justify-center items-center text-center">
        <p className="text-4xl my-16">Everything You Need to Grow Online</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 mb-16">
        {/* Modern Website Design */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(0, 229, 255, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Monitor size={40} className="text-cyan-500" />
            <div>
              <p className="font-semibold text-lg">Modern Website Design</p>
              <p className="text-sm text-gray-600">
                Custom, mobile-first designs that convert visitors into
                customers.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Blazing-Fast Performance */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(255, 193, 7, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Zap size={40} className="text-yellow-500" />
            <div>
              <p className="font-semibold text-lg">Blazing-Fast Performance</p>
              <p className="text-sm text-gray-600">
                Websites that load instantly, keeping users and Google happy.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Hassle-Free Hosting & Maintenance */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(34, 197, 94, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Server size={40} className="text-green-500" />
            <div>
              <p className="font-semibold text-lg">
                Hassle-Free Hosting & Maintenance
              </p>
              <p className="text-sm text-gray-600">
                We handle everything: security, backups, and updates for a small
                monthly fee.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* Mobile App Development */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(168, 85, 247, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Smartphone size={40} className="text-purple-500" />
            <div>
              <p className="font-semibold text-lg">Mobile App Development</p>
              <p className="text-sm text-gray-600">
                Cross-platform apps for iOS & Android that keep your customers
                connected.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* E-Commerce Solutions */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(239, 68, 68, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <ShoppingCart size={40} className="text-red-500" />
            <div>
              <p className="font-semibold text-lg">E-Commerce Solutions</p>
              <p className="text-sm text-gray-600">
                Scalable online stores with secure payments and smooth user
                experience.
              </p>
            </div>
          </div>
        </SpotlightCard>

        {/* SEO & Digital Marketing */}
        <SpotlightCard
          className="custom-spotlight-card"
          spotlightColor="rgba(59, 130, 246, 0.2)"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <Search size={40} className="text-blue-500" />
            <div>
              <p className="font-semibold text-lg">SEO & Digital Marketing</p>
              <p className="text-sm text-gray-600">
                Boost your visibility and attract the right audience through SEO
                and targeted campaigns.
              </p>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </div>
  );
};

export default ServicesSection;
