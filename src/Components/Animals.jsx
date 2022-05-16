import React from 'react';
import styled from 'styled-components';
import Animal from './Animal.json';
import AnimalControl from './AnimalControl';

const Container = styled.div`
    position:relative;
    width:100%;
    height:100%;
    background-color:#d5def5;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
    align-items:center;
`;

function Animals() {
  return (
    <Container>
      {
        Animal.map(item => {
          return <AnimalControl key={item.id} item={item}/>
        })
      }
    </Container>
  )
}

export default Animals