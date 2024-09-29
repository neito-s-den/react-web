import React, { useState, useEffect, useRef } from 'react';
import './Tile.css';
import xIcon from '../../assets/x.png';
import oIcon from '../../assets/o.png';

function Tile(props) {
  const [icon, setIcon] = useState(""); // true = X, false = O
  const [isClicked, setIsClicked] = useState(false);
  const firstRender = useRef(false);

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
      setIcon(props.currentPlayer ? "X" : "O");
    }
  };

  useEffect(() => {
    if (firstRender.current) {
        setIcon("");
        setIsClicked(false);
    } else {
      firstRender.current = true;
    }
  }, [props.reset]);

  useEffect(() => {
    props.onTileClick(props.id);
  }, [icon]);
  return (
    <>
      <div className="tile" onClick={handleClick}>
        <div className='tileId'>
          {icon === "" ? null : icon === "X" ? <img src={xIcon} alt="" className='tileIcon' /> : <img src={oIcon} alt="" className='tileIcon' />}
        </div>
      </div>
    </>
  );
}

export default Tile;