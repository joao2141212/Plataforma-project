// src/App.js
import React from 'react';
import LearningPlatform from './LearningPlatform';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <LearningPlatform />
    </ErrorBoundary>
  );
}

export default App;
