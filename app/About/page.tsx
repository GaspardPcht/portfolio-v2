"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Header from "../components/Header";
import { useRef } from "react";

export default function About() {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: imageRef1, inView: imageInView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

    const sectionsRef = {
      langues: useRef<HTMLDivElement>(null),
      about: useRef<HTMLDivElement>(null),
      project: useRef<HTMLDivElement>(null),
      contact: useRef<HTMLDivElement>(null),
    };

    const scrollToSection = (section: keyof typeof sectionsRef) => {
      const ref = sectionsRef[section].current;
      if (ref) {
        window.scrollTo({
          top: ref.offsetTop,
          behavior: "smooth",
        });
      }
    };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Main Text */}
      <div className="absolute left-[4vw] md:left-[4vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
        <span className="flex text-[64px] md:text-[96px] opacity-50 font-bold font-khula text-[#FF8C00] stroke-black stroke-1 rotate-90">
          ABOUT
        </span>
      </div>

      <Header
        scrollToAbout={() => scrollToSection("about")}
        scrollToProject={() => scrollToSection("project")}
        scrollToContact={() => scrollToSection("contact")}
      />

      {/* Flex Container for Image and Text */}
      <div className="flex flex-col lg:flex-row items-center justify-center mt-[6vh]">
        {/* Image Section */}
        <motion.div
          ref={imageRef1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: imageInView1 ? 1 : 0, y: imageInView1 ? 0 : 50 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="lg:mr-8" // Marge à droite pour espacer le texte de l'image
        >
          <Image
            src="/assets/me.png"
            alt="ME"
            width={300} // Gardez la largeur pour mobile
            height={300} // Gardez la hauteur pour mobile
            priority={true}
            className="rounded-md w-[200px] h-[250px] md:w-[300px] md:h-[400px] "
          />
        </motion.div>

        {/* Description Text */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="border-[1px] border-[#FF8C00] text-center flex items-center justify-center lg:w-[60vh] md:w-[40vh] w-[30vh] p-3 rounded-md lg:mt-[-300px] md:mt-8 mt-6 lg:ml-[100px] "
        >
          <p className="md:text-lg text-sm">
            I'm web and mobile developer based in France.
            Passionate about technology, I specialize in building responsive
            websites and mobile applications that focus on user experience and
            functionality. With a strong foundation in modern web technologies
            and mobile frameworks, I enjoy turning ideas into digital solutions
            and continuously improving my skills in this fast-evolving industry.
          </p>
        </motion.div>
      </div>
    </div>
  );
}