import Square from './Square';
import { canMoveKnight, moveKnight } from './game';
import { ItemTypes } from './Constants';
import { useDrop } from 'react-dnd';
import Overlay from './Overlay';

function BoardSquare({ x, y, children }) {
  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept: ItemTypes.KNIGHT,
      drop: () => {
        // 아이템을 올바른 곳에 드랍 시 호출

        return moveKnight(x, y);
      },
      canDrop: () => {
        // 아이템을 드래그하고, 움직일 때마다 호출
        return canMoveKnight(x, y);
      },
      newMethod: () => {
        console.log('hi');
      },
      collect: (monitor) => {
        // 컴포넌트가 랜더링될 때 발생
        return {
          isOver: !!monitor.isOver(),
          canDrop: !!monitor.canDrop('무야'),
        };
      },
    }),
    [x, y]
  );
  return (
    <div ref={drop} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color='red' />}
      {!isOver && canDrop && <Overlay color='yellow' />}
      {isOver && canDrop && <Overlay color='green' />}
    </div>
  );
}
export default BoardSquare;
