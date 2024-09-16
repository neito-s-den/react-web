import './Sidebar.css';
import menuItems from '../../assets/menu-items.json';

function Sidebar({ setCurrentView, isOpen }) {
    console.log(menuItems);

    if (!isOpen) {
        return (
            <aside className={`menu folded`}>
                {menuItems.map((item, index) => (
                    <div className="menuElement" key={index} onClick={() => setCurrentView(item.view)}>
                        <img className='icon' src={item.icon} />
                    </div>
                ))}
            </aside>
        );
    } else {
        return (
            <aside className={`menu unfolded`}>
                {menuItems.map((item, index) => (
                    <div className="menuElement" key={index} onClick={() => setCurrentView(item.view)}>
                        <img className='icon' src={item.icon} />
                    </div>
                ))}
            </aside>
        );
    }
}

export default Sidebar;