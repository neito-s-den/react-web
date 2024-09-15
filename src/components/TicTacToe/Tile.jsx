import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tile.css'; // Assuming you have a CSS file for styling

const Tile = ({ initialContent }) => {
  const [content, setContent] = useState(initialContent);

  const handleClick = () => {
    // Logic to update the content
    setContent('New Content'); // Example update
  };

  return (
    <div className="tile" onClick={handleClick}>
      {content}
    </div>
  );
};

Tile.propTypes = {
  initialContent: PropTypes.string
};

Tile.defaultProps = {
  initialContent: ''
};

export default Tile;