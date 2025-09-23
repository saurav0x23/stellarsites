"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import cn from "clsx";

export const PortfolioSection = () => {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl leading-tight">
            Our Works
          </h2>

        </div>

        {/* Bento Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px] md:auto-rows-[300px]">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              transition={{ type: "spring", stiffness: 300 }}
              className={cn(
                "relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer",
                card.className
              )}
            >
              {/* Background Image */}
              <Image
                src={card.thumbnail}
                alt={card.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition" />

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 z-10">
                <h3 className="text-white font-bold text-xl md:text-2xl">
                  {card.title}
                </h3>
                <p className="text-slate-200 text-sm max-w-xs">
                  {card.description}
                </p>
                <button className="mt-3 px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-medium opacity-90 group-hover:opacity-100 transition">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const cards = [
  {
    id: 1,
    title: "House in the woods",
    description:
      "A serene and tranquil retreat, this house in the woods offers a peaceful escape.",
    className: "md:col-span-7",
    thumbnail:
      "https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc",
  },
  {
    id: 2,
    title: "House above the clouds",
    description:
      "Perched high above the world, offering breathtaking views and tranquility.",
    className: "md:col-span-5",
    thumbnail:
      "https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc",
  },
  {
    id: 3,
    title: "Greens all over",
    description:
      "Surrounded by greenery and nature’s beauty, perfect to relax and unwind.",
    className: "md:col-span-5",
    thumbnail:
      "https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc",
  },
  {
    id: 4,
    title: "Rivers are serene",
    description:
      "A house by the river that brings peace, calm, and serenity to your daily life.",
    className: "md:col-span-7",
    thumbnail:
      "https://imgs.search.brave.com/ht2DN8eILi9CZv6q23MYZtS_fTnk7ckWRJgK3oSo-p4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92ZW5u/Z2FnZS13b3JkcHJl/c3MuczMuYW1hem9u/YXdzLmNvbS91cGxv/YWRzLzIwMjAvMDgv/QWdlbmN5LUxhbmRp/bmctUGFnZS5wbmc",
  },
];
