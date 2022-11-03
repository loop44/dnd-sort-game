import { StaticImageData } from 'next/image';

import { UniqueIdentifier, useDraggable } from '@dnd-kit/core';

interface DraggableProps {
  id: UniqueIdentifier;
  children: React.ReactNode;
  img: StaticImageData;
}

const Draggable: React.FC<DraggableProps> = ({ id, img, children }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      img
    }
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`
      }
    : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export default Draggable;
