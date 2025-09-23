"use client";
import React, { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { X, ExternalLink, Github } from "lucide-react";

type Card = {
  id: number;
  title: string;
  description?: string;
  href?: string;
  githubUrl?: string;
  content: JSX.Element | React.ReactNode | string;
  className?: string;
  thumbnail: string;
  technologies?: string[];
  year?: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleClose = () => {
    setSelected(null);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selected]);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    if (selected) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <ProjectCard
              key={card.id}
              card={card}
              index={index}
              onClick={() => handleClick(card)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && <ProjectModal card={selected} onClose={handleClose} />}
      </AnimatePresence>
    </>
  );
};

const ProjectCard = ({
  card,
  index,
  onClick,
}: {
  card: Card;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <motion.img
          src={card.thumbnail}
          alt={card.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              {card.technologies?.slice(0, 3).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30"
                >
                  {tech}
                </span>
              ))}
              {card.technologies && card.technologies.length > 3 && (
                <span className="text-white/80 text-xs">
                  +{card.technologies.length - 3} more
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {card.href && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(card.href, "_blank");
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </button>
              )}
              {card.githubUrl && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(card.githubUrl, "_blank");
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm rounded-lg hover:bg-white/30 transition-colors border border-white/30"
                >
                  <Github size={14} />
                  Code
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {card.title}
          </h3>
          {card.year && (
            <span className="text-sm text-gray-500 font-medium">
              {card.year}
            </span>
          )}
        </div>

        {card.description && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {card.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <button className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
            View Details →
          </button>
          <div className="w-8 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectModal = ({
  card,
  onClose,
}: {
  card: Card;
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image */}
        <div className="relative h-64 md:h-80">
          <img
            src={card.thumbnail}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {card.title}
              </h2>
              {card.year && (
                <span className="text-gray-500 font-medium">{card.year}</span>
              )}
            </div>
          </div>

          {card.description && (
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              {card.description}
            </p>
          )}

          {/* Technologies */}
          {card.technologies && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {card.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Content/Features */}
          {card.content && (
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Project Details
              </h3>
              <div className="text-gray-700 leading-relaxed">
                {typeof card.content === "string" ? (
                  <p>{card.content}</p>
                ) : (
                  card.content
                )}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-6 border-t">
            {card.href && (
              <Link
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors font-medium"
              >
                <ExternalLink size={18} />
                View Live Project
              </Link>
            )}
            {card.githubUrl && (
              <Link
                href={card.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-xl transition-colors font-medium"
              >
                <Github size={18} />
                View Source Code
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
