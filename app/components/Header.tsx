"use client";
import { motion } from "framer-motion";
import RevealLinksLinear from "./RevealLinksLiniear";

interface HeaderProps {
  readonly scrollToAbout: () => void;
  readonly scrollToWork: () => void;
  readonly scrollToContact: () => void;
}

export default function Header({
  scrollToAbout,
  scrollToWork,
  scrollToContact,
}: HeaderProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gradient-to-b from-[#121212] to-transparent backdrop-blur-[2px] h-20 flex items-center justify-between w-full">
      {/* Logo Section */}
      <div
        className="flex items-center justify-start font-khula font-extrabold opacity-50 text-3xl text-[#EAEAEA] hover:opacity-80 cursor-pointer text-left ml-10"
        onClick={scrollToTop}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span>GASPARDPCHT</span>
        </motion.div>
      </div>

      {/* New RevealLinksLinear Component */}
      <div className="mr-10 md:flex hidden">
        <RevealLinksLinear
          scrollToAbout={scrollToAbout}
          scrollToWork={scrollToWork}
          scrollToContact={scrollToContact}
        />
      </div>
    </header>
  );
}