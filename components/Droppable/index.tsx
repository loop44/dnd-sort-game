import { UniqueIdentifier, useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
}

const Droppable: React.FC<DroppableProps> = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id
  });
  const style = {
    backgroundColor: isOver ? 'rgba(0, 0, 0, 0.34)' : undefined
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default Droppable;
