// src/components/Modal.js
import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <motion.div
        className="bg-white rounded-lg p-6 max-w-lg w-full"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
      >
        {children}
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          onClick={onClose}
        >
          Fechar
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
