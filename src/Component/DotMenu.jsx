import  { useState } from 'react';


const DotMenu = ({ onEdit, onDelete, onDuplicate }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="kzui-dot-menu-container" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="kzui-dot-menu">●●●</div>
      {isHovered && (
        <div className="kzui-menu-options">
          <div className="kzui-menu-option" onClick={onEdit}>Edit</div>
          <div className="kzui-menu-option" onClick={onDuplicate}>Duplicate</div>
          <div className="kzui-menu-option" onClick={onDelete}>Delete</div>
        </div>
      )}
    </div>
  );
};

export default DotMenu;


