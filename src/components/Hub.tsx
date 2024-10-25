import React from 'react';
import MallasCard from './MallasCard';
import { mallas } from '../data/mallas';

const CurriculumHub: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Mallas Curriculares
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mallas.map((mallas) => (
            <MallasCard key={mallas.id} mallas={mallas} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurriculumHub;