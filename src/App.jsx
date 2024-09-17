import React, { useState } from "react";
import Home from "./components/Home/Home";
import TicTacToe from "./components/TicTacToe/TicTacToe";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [currentView, setCurrentView] = useState("tictactoe");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const renderView = () => {
    switch (currentView) {
      case "home":
        return <Home />;
      case "tictactoe":
        return <TicTacToe />;
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
