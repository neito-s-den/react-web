import React, { useState } from "react";
import Home from "./components/Home/Home";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Sidebar from "./components/Sidebar/Sidebar";
import NoNameCardGame from "./components/NoNameCardGame/NoNameCardGame";

function App() {
  const [currentView, setCurrentView] = useState("nonamecardgame");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "tictactoe":
        return <TicTacToe />;
      case "nonamecardgame":
        return <NoNameCardGame />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div className="view-container">
        <Sidebar
          setCurrentView={setCurrentView}
          isOpen={isSidebarOpen}
          switchMenuState={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
        />
        {renderView()}
      </div>
    </>
  );
}

export default App;
