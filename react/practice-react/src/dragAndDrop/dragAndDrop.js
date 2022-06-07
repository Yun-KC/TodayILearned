import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  background-color: #effbfb;
`;
const Element = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ color }) => color};
  line-height: 200px;
  text-align: center;
`;
const mousedownHandler = (event) => {
  console.log(event);
  console.log(event.target.offsetWidth);
  console.log('마우스다운 핸들러');
};

// {name: string, color: string};
const items = [
  { name: '1번 박스', color: '#F5A9A9' },
  { name: '2번 박스', color: '#D0F5A9' },
  { name: '3번 박스', color: '#CED8F6' },
  { name: '4번 박스', color: '#F6CED8' },
];

const DragAndDrop = () => {
  return (
    <Container>
      {items.map((el, idx) => {
        return (
          <Element color={el.color} key={idx} onMouseDown={mousedownHandler}>
            {el.name}
          </Element>
        );
      })}
    </Container>
  );
};

export default DragAndDrop;
