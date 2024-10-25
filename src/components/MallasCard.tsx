import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mallas } from '../types';

interface MallasCardProps {
  mallas: Mallas;
}

const mallasCard: React.FC<MallasCardProps> = ({ mallas }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(mallas.route)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer 
                 transform transition-transform duration-300 hover:scale-105"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={mallas.imageUrl}
          alt={mallas.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{mallas.name}</h3>
        <p className="text-gray-600">{mallas.description}</p>
      </div>
    </div>
  );
};

export default mallasCard;