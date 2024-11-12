import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const SortableItem = ({ id, color, onEdit, onDuplicate, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} className="kzui-color-item" {...attributes} {...listeners}>
      <div className="kzui-color-pic">
        <img src="/paint.png" alt="" />
        <span>{color.name}</span>
      </div>
      <input type="color" value={color.value} disabled={!color.editable} />
      <span>{color.value}</span>
      <button onClick={(e) => { e.stopPropagation(); onEdit(); }}>Edit</button>
      <button onClick={(e) => { e.stopPropagation(); onDuplicate(); }}>Duplicate</button>
      <button onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
    </div>
  );
};

export default SortableItem;
