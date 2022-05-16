import {GitHub, LinkedIn} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
    position:absolute;
    width:100vw;
    height:100%;
    background-color:#f2f2b0;

    p{
      position:relative;
      left:50%;
      transform:translateX(-50%);
      margin-top:50px;
      width:300px;
      background-color:lightblue;
      text-align:center;
      padding:5px;
    }
`;

const Footer = styled.div`
    position:reltive;
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;


const Icon = styled.div`
    position:relative;
    width:100px;
    height:100px;
    background-color:${props => props.color};
    margin:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:white;
    transition:0.50s;
    cursor:pointer;

    &:hover{
      transform:scale(1.1);
    }
`;

const Used = styled.div`
      position:relative;
      width:300px;
      margin-top:30px;
      margin-bottom:50px;
      left:50%;
      transform:translateX(-50%);
      background-color:lightgreen;
      padding:10px;

      li{
        list-style:none;
      }

`;

const Title = styled.h2`
    margin-bottom:10px;
`;


function FirstPage() {
  return (
    <Container>
      <p>Hello, I'm Alisan. Today I prepared this project to reinforce my React.js.</p>
      <Used>
        <Title>What did I use?</Title>
        <ul>
          <li>React.js</li>
          <li>React-Router-Dom</li>
          <li>Styled-Components</li>
          <li>Material-ui/icons</li>
        </ul>
      </Used>
      <Footer>
        <a href="https://github.com/ASGART1907"><Icon color='black'><GitHub/></Icon></a>        
        <a href="https://www.linkedin.com/in/ali%C5%9Fan-do%C4%9Fan-83aa67226/"><Icon color='dodgerblue'><LinkedIn/></Icon></a>
      </Footer>


    </Container>
  )
}

export default FirstPage