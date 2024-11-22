// src/ServicePlatform.js
import React, { useState } from 'react';
import MenuSidebar from './components/MenuSidebar';
import CourseCard from './components/CourseCard';
import ChallengeCard from './components/ChallengeCard';
import DailyStreak from './components/DailyStreak';
import { 
  Target, 
  Zap, 
  Shield, 
  Rocket, 
  Award 
} from 'lucide-react';

const LearningPlatform = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeMenu, setActiveMenu] = useState('home');

  const [userStats, setUserStats] = useState({
    studyDays: 45,
    points: 3450,
    level: 12
  });

  const [courses, setCourses] = useState([
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

  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: 'Mestre dos Fundamentos',
      description: 'Complete todos os módulos básicos',
      progress: 60,
      reward: 500,
      type: 'learning',
      icon: <Target className="text-blue-500" />,
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Desafio de Velocidade',
      description: 'Conclua 5 lições em 1 hora',
      progress: 0,
      reward: 250,
      type: 'time-challenge',
      icon: <Zap className="text-yellow-500" />,
      status: 'locked'
    },
    {
      id: 3,
      title: 'Conquista Social',
      description: 'Conecte-se com 10 colegas',
      progress: 30,
      reward: 350,
      type: 'social',
      icon: <Shield className="text-green-500" />,
      status: 'in-progress'
    }
  ]);

  const [dailyStreak, setDailyStreak] = useState({
    currentStreak: 7,
    maxStreak: 12,
    rewards: [
      { day: 3, prize: 100 },
      { day: 5, prize: 250 },
      { day: 7, prize: 500 }
    ]
  });

  const startLesson = (lesson) => {
    console.log('Iniciando lição:', lesson.title);
    alert(`Iniciando lição: ${lesson.title}`);
    // Implementar lógica de início de lição
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'home':
        return (
          <div className="p-6 bg-gray-100">
            <div className="grid grid-cols-3 gap-4">
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
            <div className="grid grid-cols-3 gap-4">
              {courses.map(course => (
                <CourseCard key={course.id} course={course} onStartLesson={startLesson} />
              ))}
            </div>
            <h1 className="text-3xl font-bold mt-6 mb-4">Desafios</h1>
            <div className="grid grid-cols-3 gap-4">
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
            <div className="grid grid-cols-3 gap-4">
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
            <div className="grid grid-cols-3 gap-4">
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
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
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
            <div className="grid grid-cols-3 gap-4">
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
        {renderSection()}
      </main>
    </div>
  );
};

export default LearningPlatform;
