// src/components/DailyStreak.js
import React from 'react';
import { Award } from 'lucide-react';

const DailyStreak = ({ dailyStreak }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6 transform transition-transform duration-300 hover:scale-105">
      <h2 className="text-xl font-bold mb-4">Sequência de Estudo</h2>
      <div className="flex items-center">
        <Award className="w-6 h-6 text-yellow-500 mr-2" />
        <span className="text-gray-700">Atual: {dailyStreak.currentStreak} dias</span>
      </div>
      <div className="flex space-x-2 mt-4">
        {dailyStreak.rewards.map(reward => (
          <div 
            key={reward.day} 
            className="bg-gray-200 px-3 py-1 rounded-full text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-110"
          >
            Dia {reward.day}: {reward.prize} pontos
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyStreak;
