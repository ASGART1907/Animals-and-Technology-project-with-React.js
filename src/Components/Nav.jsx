import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Container = styled.div`
    position:relative;
    width:100vw;
    background-color:#66bfbf;
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding:10px;
`;

const Ul = styled.ul`
    display:flex;
`;

const Li = styled.li`
    list-style:none;
`;

function Nav() {
  return (
    <Container>

      <h2>Blog</h2>

      <Ul>

        <Li>
          <NavLink to="/" className="nav">Home</NavLink>
        </Li>
        <Li>
          <NavLink to="/animals" className="nav">Animals</NavLink>
        </Li>

        <Li>
          <NavLink to="/technologyes" className="nav">Technology</NavLink>
        </Li>

        
      </Ul>
    </Container>
  )
}

export default Nav