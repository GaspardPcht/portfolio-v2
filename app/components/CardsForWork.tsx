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

      {/* Deuxième div avec flou, centrée */}
      <div className="absolute flex text-xl text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-44 -right-16 w-36 h-44 backdrop-blur-lg transition-all duration-500">
        <div className="text-[#FF8C00]">View</div>
      </div>
    </div>
  );
};

export default CardForWork;
