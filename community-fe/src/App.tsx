import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppRouter />
    </Router>
  );
};

export default App
