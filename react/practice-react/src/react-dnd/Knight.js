import { ItemTypes } from './Constants';
import { useDrag } from 'react-dnd';

function Knight() {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: '100px',
        lineHeight: '100px',
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      ♞
    </div>
  );
}

export default Knight;
