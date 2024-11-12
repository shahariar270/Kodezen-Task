import { useState } from 'react';
import { SketchPicker } from 'react-color'; // Import SketchPicker
import { useDrag, useDrop } from 'react-dnd'; // Import Drag and Drop hooks
import DotMenu from './DotMenu';

const initialColors = [
  { name: 'Primary', value: '#150BED', editable: false, deletable: false },
  { name: 'Secondary', value: '#ED197F', editable: false, deletable: false },
  { name: 'Title Text', value: '#000000', editable: false, deletable: false },
  { name: 'Supporting Text', value: '#595959', editable: false, deletable: false },
  { name: 'Background', value: '#FFFFFF', editable: false, deletable: false },
];

const ColorManager = () => {
  const [colors, setColors] = useState(initialColors);
  const [isEditing, setIsEditing] = useState(false);
  const [editColorIndex, setEditColorIndex] = useState(null);
  const [newColorName, setNewColorName] = useState('');
  const [newColorValue, setNewColorValue] = useState('#000000');
  const [showColorPicker, setShowColorPicker] = useState(false); // State to control visibility of the color picker

  const openEditInterface = (index = null) => {
    setEditColorIndex(index);
    if (index !== null) {
      setNewColorName(colors[index].name);
      setNewColorValue(colors[index].value);
    } else {
      setNewColorName('');
      setNewColorValue('#000000');
    }
    setIsEditing(true);
  };

  const closeEditInterface = () => {
    setIsEditing(false);
    setEditColorIndex(null);
    setShowColorPicker(false); // Hide the color picker when closing the edit modal
  };

  const saveColor = () => {
    if (newColorName && newColorValue) {
      if (editColorIndex !== null) {
        const updatedColors = colors.map((color, i) =>
          i === editColorIndex ? { ...color, name: newColorName, value: newColorValue } : color
        );
        setColors(updatedColors);
      } else {
        setColors([...colors, { name: newColorName, value: newColorValue, editable: true, deletable: true }]);
      }
      closeEditInterface();
    }
  };

  const duplicateColor = (index) => {
    const colorToDuplicate = colors[index];
    setColors([...colors, { ...colorToDuplicate, name: `${colorToDuplicate.name} Copy`, editable: true, deletable: true }]);
  };

  const deleteColor = (index) => {
    setColors(colors.filter((_, i) => i !== index));
  };

  const handleColorChange = (color) => {
    setNewColorValue(color.hex); // Update the color value when the user selects a new color
  };

  // Drag and Drop logic
  const moveColor = (dragIndex, hoverIndex) => {
    const updatedColors = [...colors];
    const [movedItem] = updatedColors.splice(dragIndex, 1);
    updatedColors.splice(hoverIndex, 0, movedItem);
    setColors(updatedColors);
  };

  const DraggableColor = ({ color, index }) => {
    const [, drag] = useDrag(() => ({
      type: 'COLOR',
      item: { index },
    }));

    const [, drop] = useDrop(() => ({
      accept: 'COLOR',
      hover: (item) => {
        if (item.index !== index) {
          moveColor(item.index, index);
          item.index = index; // Update the dragged item's index
        }
      },
    }));

    return (
      <div ref={(node) => drag(drop(node))} className="kzui-color-item">
        <table>
          <tr>
            <td>
              <div className="kzui-color-pic">
                <img src="/paint.png" alt="" />
                <span>{color.name}</span>
              </div>
            </td>
            <td>
              <input type="color" value={color.value} disabled={!color.editable} />
              <span>{color.value}</span>
            </td>
            <td>
              <DotMenu
                onEdit={() => openEditInterface(index)}
                onDuplicate={() => duplicateColor(index)}
                onDelete={() => deleteColor(index)}
              />
            </td>
          </tr>
        </table>
      </div>
    );
  };

  return (
    <div className="kzui-color-manager">
      <h2>Design System</h2>

      {/* Column Headers */}
      <ul className="kzui-color-header">
        <li>Name</li>
        <li>Value</li>
        <li>Actions</li>
      </ul>

      <div className="kzui-color-list">
        {colors.map((color, index) => (
          <DraggableColor key={index} index={index} color={color} />
        ))}
        <button className="kzui-add-button" onClick={() => openEditInterface()}>
          <img src="/add.png" alt="" /> <span>Add Color</span>
        </button>
      </div>

      {isEditing && (
        <div className="kzui-edit-modal">
          <h3>{editColorIndex !== null ? 'Edit Color' : 'Add Color'}</h3>

          <h4>Name</h4>
          <input
            type="text"
            placeholder="Color Name"
            value={newColorName}
            className="kzui-name-input"
            onChange={(e) => setNewColorName(e.target.value)}
          />
      
          <h4>Value</h4>
          <div className="kzui-color-value">
            <span> Color</span>

            <div className="kzui-color">
              <button 
                className="kzui-color-picker-button"
                onClick={() => setShowColorPicker(!showColorPicker)} // Toggle color picker visibility
              >
                {showColorPicker ? '' : 'Show Color Picker'}
              </button>

              {showColorPicker && (
                <SketchPicker
                  color={newColorValue}
                  onChangeComplete={handleColorChange} // Update color when the user selects a color
                />
              )}

              <span>{newColorValue}</span>
            </div>
          </div>
          
          <div className="kzui-color-btn">
            <button onClick={closeEditInterface} className="kzui-cancel-button">Cancel</button>
            <button onClick={saveColor} className="kzui-save-button">Save</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorManager;
