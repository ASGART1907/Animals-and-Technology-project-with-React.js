import styled from 'styled-components';
import Technology from './Technology.json';
import TechnologyControl from './TechnologyControl';

const Container = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#eec2c2;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;
`;

function Technologyes() {
  return (
    <Container>
      {
        Technology.map(item => {
          return <TechnologyControl key={item.id} item={item}/>
        })
      }
    </Container>
  )
}

export default Technologyes;