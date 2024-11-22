// src/LearningPlatform.js
import React, { useState } from 'react';
import MenuSidebar from './components/MenuSidebar';
import CourseCard from './components/CourseCard';
import ChallengeCard from './components/ChallengeCard';
import DailyStreak from './components/DailyStreak';
import ProgressTrail from './components/ProgressTrail'; // Adicionado
import { 
  Search, 
  Bell, 
  PlusCircle,
  Target,
  Zap,
  Shield,
  Rocket,
  Award,
  Map as MapIcon // Renomeado de 'Map' para 'MapIcon'
} from 'lucide-react'; // Atualizado

const LearningPlatform = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeMenu, setActiveMenu] = useState('home');

  const [userStats] = useState({
    studyDays: 45,
    points: 3450,
    level: 12
  });

  const [courses] = useState([
    { 
      id: 1, 
      title: 'Desenvolvimento Web', 
      progress: 65, 
      color: 'bg-green-500',
      points: 1200,
      lessons: [
        { title: 'HTML', locked: false, completed: true },
        { title: 'CSS', locked: false, completed: true },
        { title: 'JavaScript', locked: false, completed: false },
        { title: 'React', locked: false, completed: false },
        { title: 'NodeJS', locked: true, completed: false }
      ]
    },
    { 
      id: 2, 
      title: 'Ciência de Dados', 
      progress: 40, 
      color: 'bg-purple-500',
      points: 900,
      lessons: [
        { title: 'Python Básico', locked: false, completed: true },
        { title: 'Pandas', locked: false, completed: true },
        { title: 'Machine Learning', locked: false, completed: false },
        { title: 'Deep Learning', locked: true, completed: false }
      ]
    },
    { 
      id: 3, 
      title: 'Segurança da Informação', 
      progress: 20, 
      color: 'bg-red-500',
      points: 600,
      lessons: [
        { title: 'Fundamentos', locked: false, completed: true },
        { title: 'Redes', locked: false, completed: false },
        { title: 'Criptografia', locked: true, completed: false }
      ]
    }
  ]);

  const [challenges] = useState([
    {
      id: 1,
      title: 'Mestre dos Fundamentos',
      description: 'Complete todos os módulos básicos',
      progress: 60,
      reward: 500,
      type: 'learning',
      icon: <Target className="w-6 h-6 text-blue-500" />,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Desafio de Velocidade',
      description: 'Conclua 5 lições em 1 hora',
      progress: 0,
      reward: 250,
      type: 'time-challenge',
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      status: 'locked'
    },
    {
      id: 3,
      title: 'Conquista Social',
      description: 'Conecte-se com 10 colegas',
      progress: 30,
      reward: 350,
      type: 'social',
      icon: <Shield className="w-6 h-6 text-green-500" />,
      status: 'in-progress'
    }
  ]);

  const [dailyStreak] = useState({
    currentStreak: 7,
    maxStreak: 12,
    rewards: [
      { day: 3, prize: 100 },
      { day: 5, prize: 250 },
      { day: 7, prize: 500 }
    ]
  });

  const startLesson = (lesson) => {
    alert(`Iniciando lição: ${lesson.title}`);
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="p-6 bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Progresso</h2>
                <div className="flex justify-between">
                  <div>
                    <span className="block text-gray-600">Dias de Estudo</span>
                    <span className="text-2xl font-bold">{userStats.studyDays}</span>
                  </div>
                  <div>
                    <span className="block text-gray-600">Pontos</span>
                    <span className="text-2xl font-bold">{userStats.points}</span>
                  </div>
                  <div>
                    <span className="block text-gray-600">Nível</span>
                    <span className="text-2xl font-bold">{userStats.level}</span>
                  </div>
                </div>
              </div>
            </div>

            <h1 className="text-3xl font-bold mt-6 mb-4">Seus Cursos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} onStartLesson={startLesson} />
              ))}
            </div>

            <h1 className="text-3xl font-bold mt-6 mb-4">Desafios</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {challenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>

            <DailyStreak dailyStreak={dailyStreak} />
          </div>
        );
      case 'courses':
        return (
          <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Todos os Cursos</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} onStartLesson={startLesson} />
              ))}
            </div>
          </div>
        );
      case 'challenges':
        return (
          <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Desafios de Aprendizagem</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {challenges.map(challenge => (
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))}
            </div>
            <DailyStreak dailyStreak={dailyStreak} />
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Configurações</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Configurações de Conta</h2>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded-md" 
                    value="joao@example.com" 
                    readOnly 
                  />
                </div>
                <div>
                  <label className="block mb-2">Alterar Senha</label>
                  <input 
                    type="password" 
                    className="w-full p-2 border rounded-md" 
                    placeholder="Nova senha" 
                  />
                </div>
                <div>
                  <label className="block mb-2">Notificações</label>
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      className="mr-2" 
                      defaultChecked 
                    />
                    <span>Receber atualizações por email</span>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Salvar Alterações
                </button>
              </div>
            </div>
          </div>
        );
      case 'progress':
        return (
          <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Progresso Geral</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Dias de Estudo</h2>
                <p className="text-4xl font-bold text-blue-600">{userStats.studyDays}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Pontos</h2>
                <p className="text-4xl font-bold text-green-600">{userStats.points}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold">Nível</h2>
                <p className="text-4xl font-bold text-purple-600">{userStats.level}</p>
              </div>
            </div>
          </div>
        );
      case 'trilha': // Adicionado
        return (
          <div className="p-6 bg-gray-100">
            <ProgressTrail />
          </div>
        );
      default:
        return (
          <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Seção Não Encontrada</h1>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen">
      <MenuSidebar 
        activeMenu={activeMenu} 
        setActiveMenu={setActiveMenu} 
        setActiveSection={setActiveSection} 
      />
      <main className="flex-grow bg-gray-100 overflow-y-auto">
        {/* Header com Botões de Ação */}
        <div className="flex justify-end p-6">
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <Bell className="w-5 h-5 text-gray-600" />
            </button>
            {/* Botão para acessar a Trilha Gamificada */}
            <button 
              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
              onClick={() => {
                setActiveMenu('trilha'); // Adicionado
                setActiveSection('trilha'); // Adicionado
              }}
            >
              <MapIcon className="w-5 h-5 mr-2" /> {/* Atualizado para MapIcon */}
              Trilha
            </button>
            <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              <PlusCircle className="w-5 h-5 mr-2" />
              Novo Curso
            </button>
          </div>
        </div>
        {/* Renderização da Seção Ativa */}
        {renderSection()}
      </main>
    </div>
  );
};

export default LearningPlatform;
