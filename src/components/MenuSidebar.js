// src/components/MenuSidebar.js
import React from 'react';
import { 
  Home, 
  BookOpen, 
  Trophy, 
  Target, 
  Settings, 
  LogOut,
  Map as MapIcon // Renomeado de 'Map' para 'MapIcon'
} from 'lucide-react'; // Atualizado

const MenuSidebar = ({ activeMenu, setActiveMenu, setActiveSection }) => {
  const menuItems = [
    { name: 'Home', icon: Home, section: 'home' },
    { name: 'Cursos', icon: BookOpen, section: 'courses' },
    { name: 'Desafios', icon: Trophy, section: 'challenges' },
    { name: 'Progresso', icon: Target, section: 'progress' },
    { name: 'Trilha', icon: MapIcon, section: 'trilha' }, // Atualizado
    { name: 'Configurações', icon: Settings, section: 'settings' },
  ];

  const handleLogout = () => {
    alert('Logout functionality to be implemented');
  };

  return (
    <aside className="w-20 md:w-64 bg-white shadow-lg flex-shrink-0 flex flex-col items-center py-6 h-screen">
      {/* Logo ou Ícone da Aplicação */}
      <div className="mb-8">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Logo" 
          className="w-10 h-10" 
        />
      </div>

      {/* Itens do Menu */}
      <nav className="flex-1 flex flex-col items-center space-y-6">
        {menuItems.map(item => (
          <button 
            key={item.name} 
            onClick={() => { setActiveMenu(item.section); setActiveSection(item.section); }} 
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 w-full ${
              activeMenu === item.section ? 'bg-gray-200 text-blue-500' : 'hover:bg-gray-100 text-gray-700'
            }`}
          >
            <item.icon className={`w-6 h-6 ${activeMenu === item.section ? 'text-blue-500' : 'text-gray-500'}`} />
            <span className="hidden md:block font-medium">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Botão de Logout */}
      <button 
        onClick={handleLogout} 
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 w-full"
      >
        <LogOut className="w-6 h-6 text-gray-500" />
        <span className="hidden md:block text-gray-700 font-medium">Logout</span>
      </button>
    </aside>
  );
};

export default MenuSidebar;
