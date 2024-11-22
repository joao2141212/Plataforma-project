// src/components/ChallengeCard.js
import React from 'react';
import { Star } from 'lucide-react';

const ChallengeCard = ({ challenge }) => {
  return (
    <div
      className={`bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 ${
        challenge.status === 'locked' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
    >
      <div className="flex items-center space-x-2">
        {challenge.icon}
        <h2 className="text-xl font-bold">{challenge.title}</h2>
      </div>
      <p className="text-gray-600 mt-2">{challenge.description}</p>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-width duration-500"
            style={{ width: `${challenge.progress}%` }}
          ></div>
        </div>
        <span className="text-sm text-gray-600">{challenge.progress}% Completo</span>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-yellow-500 flex items-center">
          <Star className="w-4 h-4 mr-1" /> {challenge.reward} pontos
        </span>
        {challenge.status !== 'locked' && (
          <button className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition-colors duration-200">
            {challenge.status === 'in-progress' ? 'Continuar' : 'Iniciar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
