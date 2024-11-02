// CardForWork.tsx
import React from "react";

interface CardProps {
  backgroundImage: string;
  title: string;
  width?: string;
  height?: string;
  onClick: () => void;
}

const CardForWork: React.FC<CardProps> = ({
  backgroundImage,
  width = "w-60",
  height = "h-80",
  onClick, // Utilisation de la prop onClick
}) => {
  return (
    <div
      className={`relative overflow-hidden rounded-md cursor-pointer text-2xl font-bold bg-cover bg-center ${width} ${height}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
    >
      <div className="z-10 absolute w-full h-full peer"></div>

      {/* Premier div sans flou pour le haut */}
      <div className="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-16 w-32 h-44 rounded-full transition-all duration-500"></div>

      {/* Deuxième div avec flou, centrée */}
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-16 w-36 h-44 backdrop-blur-lg transition-all duration-500">
        <div className="text-[#FF8C00]">View</div>
      </div>

      {/* Ajout d'une div de flou qui s'étend depuis le bas */}
      <div className="absolute -bottom-32 -left-16 w-32 h-44 rounded-full backdrop-blur-sm transition-all duration-500"></div>
    </div>
  );
};

export default CardForWork;
