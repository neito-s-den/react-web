import React, { useState } from 'react';
import Home from './components/Home/Home';
import TicTacToe from './components/TicTacToe/TicTacToe';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [currentView, setCurrentView] = useState('tictactoe');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'tictactoe':
        return <TicTacToe />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="view-container">
        <Sidebar setCurrentView={setCurrentView} isOpen={isSidebarOpen}/>
        {renderView()}
      </div>
    </>
  );
}

export default App;