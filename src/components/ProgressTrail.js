// src/components/ProgressTrail.js
import React, { useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { motion } from 'framer-motion';
import { Lock, CheckCircle, Star } from 'lucide-react';
import Modal from './Modal';

const modulesData = [
  {
    id: '1',
    title: 'Introdução',
    status: 'completed',
    description: 'Aprenda os conceitos básicos.',
  },
  {
    id: '2',
    title: 'Fundamentos',
    status: 'completed',
    description: 'Construa sua base de conhecimento.',
  },
  {
    id: '3',
    title: 'Intermediário',
    status: 'unlocked',
    description: 'Aprofunde-se nos tópicos.',
  },
  {
    id: '4',
    title: 'Especialização',
    status: 'locked',
    description: 'Escolha sua área de especialização.',
  },
  {
    id: '5',
    title: 'Avançado - Desenvolvimento Web',
    status: 'locked',
    description: 'Domine o desenvolvimento web.',
  },
  {
    id: '6',
    title: 'Avançado - Ciência de Dados',
    status: 'locked',
    description: 'Aprofunde-se em ciência de dados.',
  },
];

const ProgressTrail = () => {
  const [modules] = useState(modulesData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModule, setSelectedModule] = useState(null);

  const handleModuleClick = (module) => {
    if (module.status !== 'locked') {
      setSelectedModule(module);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedModule(null);
  };

  // Criando nós e arestas para o React Flow
  const nodes = modules.map((module, index) => {
    const isSpecialization = module.id === '4';
    const x = index * 200;
    const y = isSpecialization ? 100 : module.id > '4' ? 200 : 0;

    return {
      id: module.id,
      type: 'moduleNode',
      data: { module },
      position: { x, y },
    };
  });

  const edges = [
    { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
    { id: 'e2-3', source: '2', target: '3', type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', type: 'smoothstep' },
    // Bifurcação a partir do módulo 4
    { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
    { id: 'e4-6', source: '4', target: '6', type: 'smoothstep' },
  ];

  // Definindo tipos de nós personalizados
  const nodeTypes = {
    moduleNode: ({ data }) => {
      const { module } = data;
      const { title, status } = module;

      return (
        <motion.div
          className={`flex flex-col items-center justify-center w-32 h-32 rounded-full shadow-lg ${
            status === 'completed'
              ? 'bg-green-500'
              : status === 'unlocked'
              ? 'bg-blue-500'
              : 'bg-gray-400'
          }`}
          whileHover={status !== 'locked' ? { scale: 1.1 } : {}}
          style={{ cursor: status !== 'locked' ? 'pointer' : 'not-allowed' }}
          onClick={() => handleModuleClick(module)}
        >
          {status === 'completed' ? (
            <CheckCircle className="w-8 h-8 text-white" />
          ) : status === 'unlocked' ? (
            <Star className="w-8 h-8 text-white animate-pulse" />
          ) : (
            <Lock className="w-8 h-8 text-white" />
          )}
          <span className="mt-2 text-white font-medium text-center">{title}</span>
        </motion.div>
      );
    },
  };

  return (
    <div className="flex flex-col items-center p-6 h-full">
      <h1 className="text-3xl font-bold mb-6">Trilha de Aprendizagem</h1>
      <div className="w-full h-96">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          zoomOnPinch={false}
          panOnDrag={false}
          fitView
          proOptions={{ hideAttribution: true }} // Adicionado para remover atribuição
        >
          <Background color="#aaa" gap={16} />
          {/* Removido o componente <Controls /> para evitar botões indesejados */}
        </ReactFlow>
      </div>
      {/* Botão Guia */}
      <button
        className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors duration-200"
        onClick={() => setIsModalOpen(true)}
      >
        Guia do Módulo
      </button>

      {/* Modal */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-2xl font-bold mb-4">
            {selectedModule ? selectedModule.title : 'Guia do Módulo'}
          </h2>
          <p>
            {selectedModule
              ? selectedModule.description
              : 'Aqui você pode ver informações sobre os módulos disponíveis.'}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default ProgressTrail;
