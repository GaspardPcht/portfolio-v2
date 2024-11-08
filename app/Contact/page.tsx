'use client'
import { useRef } from 'react';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const sectionsRef = {
    ABOUT: useRef<HTMLDivElement>(null),
    WORK: useRef<HTMLDivElement>(null),
    CONTACT: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (section: keyof typeof sectionsRef) => {
    const ref = sectionsRef[section].current;
    if (ref) {
      window.scrollTo({
        top: ref.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Main Text */}
      <div className="absolute left-[4vw] md:left-[4vw] lg:left-[2vw] top-[50%] transform -translate-y-1/2 -translate-x-1/2 pl-2">
        <span className="flex text-[64px] md:text-[96px] opacity-50 font-bold font-khula text-[#FF8C00] stroke-black stroke-1 rotate-90">
          CONTACT
        </span>
      </div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="border-[1px] border-[#FF8C00] text-center flex items-center justify-center lg:w-[60vh]  md:w-[40vh] w-[30vh] p-3 rounded-md md:mt-8 mb-10 "
      >
        <p className="md:text-lg text-sm text-[#EAEAEA]">
          I would be delighted to discuss your projects or answer any questions
          you may have. Feel free to get in touch!
        </p>
      </motion.div>
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: textInView ? 1 : 0, scale: textInView ? 1 : 0.8 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className="flex items-center">
          <ContactForm />
        </div>
      </motion.div>
      <footer className=' text-[#EAEAEA] absolute bottom-4 text-khula font-extrabold text-sm'>
      <p>© 2024 GASPARDPCHT. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
