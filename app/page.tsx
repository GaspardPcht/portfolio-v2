"use client";
import React, { useRef, useState, useEffect } from "react";
import RevealLinks from "./components/RevealLinks";
import Image from "next/image";
import { motion } from "framer-motion";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import About from "./About/page";
import Work from "./Work/page";
import Contact from "./Contact/page";
import Header from "./components/Header";

type Section = "ABOUT" | "WORK" | "CONTACT" | null;

export default function Home() {
  const sectionsRef = {
    ABOUT: useRef<HTMLDivElement>(null),
    WORK: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const [visibleSection, setVisibleSection] = useState<Section>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Définir isClient à true côté client seulement
  }, []);

  const scrollToSection = (section: keyof typeof sectionsRef) => {
    const ref = sectionsRef[section].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 4;

      let currentSection: Section = null; // Modifié pour être de type Section
      Object.entries(sectionsRef).forEach(([key, ref]) => {
        if (
          ref.current &&
          ref.current.offsetTop <= scrollPosition &&
          ref.current.offsetTop + ref.current.offsetHeight > scrollPosition
        ) {
          currentSection = key as Section; // currentSection est maintenant de type Section
        }
      });

      setVisibleSection(currentSection); // Assignation directe à setVisibleSection
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Appel initial pour définir la section visible

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient, sectionsRef]);

  return (
    <div>
      <div className="relative min-h-screen">
        {/* Main Text */}
        <div className="absolute left-[3vw] md:left-[3vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
          <span className="flex text-[64px] md:text-[96px] opacity-20 font-bold font-khula text-[#EAEAEA] stroke-black stroke-1 rotate-90">
            GASPARDPCHT
          </span>
        </div>

        {/* Conditionally Rendered Header */}
        {isClient &&
          ["ABOUT", "WORK", "CONTACT"].includes(visibleSection!) && ( // Ajout d'un "!" pour dire à TypeScript que visibleSection n'est pas null ici
            <Header
              scrollToAbout={() => scrollToSection("ABOUT")}
              scrollToWork={() => scrollToSection("WORK")}
              scrollToContact={() => scrollToSection("CONTACT")}
            />
          )}

        {/* Icons and Links Section */}
        <header className="absolute top-0 right-0 md:right-[-10px] m-8 flex flex-col items-center">
          <div className="flex gap-5 mb-5">
            <motion.a
              href="https://www.linkedin.com/in/gaspard-pauchet-348044215/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de Gaspard Pauchet"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/Linkedin.svg"
                alt="Logo LinkedIn"
                width={50}
                height={50}
              />
            </motion.a>
            <motion.a
              href="https://github.com/GaspardPcht"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Gaspard Pauchet"
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/assets/GitHub.svg"
                alt="Logo GitHub"
                width={50}
                height={50}
              />
            </motion.a>
          </div>
        </header>

        {/* RevealLinks Component */}
        {isClient && (
          <main className="absolute right-0 lg:top-[15%] md:top-[35%] top-[35%]">
            <div className="md:mr-10">
              <RevealLinks
                scrollToAbout={() => scrollToSection("ABOUT")}
                scrollToWork={() => scrollToSection("WORK")}
                scrollToContact={() => scrollToSection("CONTACT")}
              />
            </div>
          </main>
        )}

        {/* Scroll to About Button */}
        <button
          onClick={() => scrollToSection("ABOUT")}
          className="flex flex-col justify-center items-center absolute bottom-[3vh] right-[45%] md:right-[50%] transform -translate-x-1/2 cursor-pointer animate-bounce bg-transparent border-none hover:bg-transparent text-[#FF8C00]"
          aria-label="Scroll to About section"
        >
          <div className="text-6xl">
            <IoArrowDownCircleOutline />
          </div>
        </button>
      </div>

      {/* About Section */}
      <div ref={sectionsRef.ABOUT}>
        <About />
      </div>
      <div ref={sectionsRef.WORK} className="md:mt-0">
        <Work />
      </div>
      {/* Contact Section */}
      <div ref={sectionsRef.CONTACT}>
        <Contact />
      </div>
    </div>
  );
}
