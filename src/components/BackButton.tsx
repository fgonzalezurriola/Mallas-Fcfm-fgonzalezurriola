import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="fixed top-1.5 left-1.5 bg-gray-300 p-3 rounded-full shadow-lg 
                 hover:shadow-xl transition-all duration-300 ease-in-out
                 hover:bg-gray-400 hover:-translate-x-1
                 flex items-center justify-center
                 z-50"
      aria-label="Volver al inicio"
    >
      <RiArrowGoBackFill className="text-gray-700 text-xl" />
    </button>
  );
};

export default BackButton;
