import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="fixed top-1.5 left-1.5 bg-white p-3 rounded-full shadow-lg 
                 hover:shadow-xl transition-all duration-300 ease-in-out
                 hover:bg-gray-50 hover:-translate-x-1
                 flex items-center justify-center
                 z-50"
      aria-label="Volver al inicio"
    >
      <FaArrowLeft className="text-gray-700 text-xl" />
    </button>
  );
};

export default BackButton;