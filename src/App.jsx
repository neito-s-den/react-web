import React, { useState } from 'react';
import Home from './components/Home/Home';

function App() {
  const [currentView, setCurrentView] = useState('home');

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
      <h1>Bonjour</h1>
      {/* <nav>
        <button onClick={() => setCurrentView('home')}>Home</button>
        <button onClick={() => setCurrentView('tictactoe')}>TicTacToe</button>
      </nav>
      <div className="view-container">
        {renderView()}
      </div> */}
    </>
  );
}

export default App;