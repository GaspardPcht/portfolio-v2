import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CardProps {
  backgroundImage: string;
  title: string;
  text: string;
  genres: string[];
  href: string;
}

const Card: React.FC<CardProps> = ({ backgroundImage, title, text, genres, href }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link 
        href={href}
        target="_blank"
        className="block h-[220px] md:h-[260px] w-full relative overflow-hidden group rounded-2xl
          bg-[#1A1A1A] hover:bg-[#222222]
          transition-all duration-500 ease-out
          border border-[#333333] hover:border-[#FF8C00]
          hover:shadow-lg hover:shadow-[#FF8C00]/5"
      >
        {/* Image de fond avec effets */}
        <div className="absolute inset-0 transition-transform duration-700">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover object-center opacity-20 group-hover:opacity-40 
              scale-110 group-hover:scale-100 transition-all duration-700
              filter contrast-100 brightness-50 group-hover:brightness-75 saturate-50 group-hover:saturate-75"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={90}
          />
        </div>

        {/* Overlay avec dégradé */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/95 to-transparent
          group-hover:from-[#1A1A1A]/90 group-hover:via-[#1A1A1A]/80 group-hover:to-transparent" />

        {/* Effet de ligne décorative */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00]/50 to-transparent
          transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 z-10" />
        
        {/* Contenu principal */}
        <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between z-20">
          {/* En-tête */}
          <div className="space-y-1 md:space-y-1.5">
            <h3 className="text-base md:text-lg font-bold text-white tracking-wide group-hover:text-[#FF8C00] transition-colors duration-300">
              {title}
            </h3>
            <div className="flex flex-wrap gap-1 md:gap-1.5">
              {genres.slice(0, 3).map((genre, index) => (
                genre && (
                  <span
                    key={index}
                    className="px-1.5 py-0.5 text-[8px] md:text-[9px] rounded-md 
                      bg-black/30 text-white/90 backdrop-blur-sm
                      border border-white/10 group-hover:border-[#FF8C00]/30
                      transition-all duration-300"
                  >
                    {genre}
                  </span>
                )
              ))}
            </div>
          </div>

          {/* Partie inférieure */}
          <div className="space-y-2 md:space-y-3">
            <p className="text-white/70 text-xs leading-relaxed line-clamp-2 group-hover:line-clamp-3
              transition-all duration-500">
              {text}
            </p>

            {/* Bouton avec effet de glissement */}
            <div className="inline-flex items-center">
              <span className="relative inline-flex items-center gap-1 text-[#FF8C00] text-xs font-medium
                before:absolute before:inset-x-0 before:bottom-0 before:h-[1px]
                before:bg-[#FF8C00] before:origin-left before:scale-x-0
                group-hover:before:scale-x-100 before:transition-transform before:duration-300">
                Voir le projet
                <svg 
                  className="w-3 md:w-3.5 h-3 md:h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Card; 