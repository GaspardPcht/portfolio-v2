"use client";
import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

interface FlipLinkProps {
  children: string;

  onClick?: () => void; // Make onClick an optional function prop
}

const FlipLinkLinear: React.FC<FlipLinkProps> = ({ children, onClick }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      onClick={onClick} // Use onClick prop here
      className="relative block overflow-hidden movement whitespace-nowrap text-3xl opacity-50 hover:opacity-90 font-khula font-extrabold uppercase cursor-pointer"
      style={{
        lineHeight: 0.94,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: 0,
                color: "#EAEAEA",
                opacity:50
              },
              hovered: {
                y: "-100%",
                color: "#FF8C00",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            key={i}
            variants={{
              initial: {
                y: "100%",
                color: "#EAEAEA",
                opacity:50
              },
              hovered: {
                y: 0,
                color: "#FF8C00",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLinkLinear;