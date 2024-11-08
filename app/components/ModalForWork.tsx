// components/modal.tsx
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FaArrowLeft } from "react-icons/fa";``
import ButtonHover from "./ButtonHover";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title?: string;
  text?: string;
  link?: string;
  frontend?: string;
  backend?: string;
  functionalities?: string;
  projetURL: string;
}

const Modal = ({
  isOpen,
  setIsOpen,
  title = "Default Title",
  text = "Default text",
  link,
  frontend,
  backend,
  functionalities,
  projetURL,
}: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur-sm p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#2C2C2C] text-[#EAEAEA] p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <div className="flex gap-2 items-center mb-4">
              <FaArrowLeft
                onClick={() => setIsOpen(false)}
                className="text-[#EAEAEA] text-xl hover:text-[#FF8C00] cursor-pointer transition-colors"
              />
            </div>

            <h3 className="text-3xl font-bold text-center mb-6">{title}</h3>

            {frontend && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Frontend:</h4>
                <p>{frontend}</p>
              </div>
            )}

            {backend && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Backend:</h4>
                <p>{backend}</p>
              </div>
            )}

            {functionalities && (
              <div className="mb-4">
                <h4 className="text-xl font-semibold mb-2">Fonctionnalités:</h4>
                <p>{functionalities}</p>
              </div>
            )}

            {text && (
              <div className="mb-6">
                <p>{text}</p>
              </div>
            )}

            {link && (
              <div className="flex justify-center mt-6">
                <ButtonHover href={projetURL} text="View" />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
