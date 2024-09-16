import './Sidebar.css';

function Sidebar({ setCurrentView }) {
    return (
        <aside className="sidebar">
            <div className="menuElement" onClick={() => setCurrentView('home')}>Home</div>
            <div className="menuElement" onClick={() => setCurrentView('tictactoe')}>TicTacToe</div>
            <div className="menuElement" onClick={() => setCurrentView('tictactoe')}>TicTacToeTicTacToeTicTacToe</div>
        </aside>
    );
}

export default Sidebar;