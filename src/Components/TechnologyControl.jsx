import { FavoriteBorderOutlined,PhotoOutlined } from "@material-ui/icons";
import styled from 'styled-components';

const ImgContainer = styled.div`
    position:relative;
    width:200px;
    height:250px;
    background-color:red;
    margin:20px;
    overflow:hidden;
    border-radius:5px;

    img{
      position:relative;
      width:100%;
      height:100%;
      background-position:center;
      object-fit:cover;
    }

    &:hover{
      cursor:pointer;
    }
`;

const Icons = styled.div`
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      background:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.3),rgba(0,0,0,0.7));
      opacity:0;
      z-index:2;
      transition:all 0.50s ease-in-out;
      display:flex;
      justify-content:center;
      align-items:center;

      &:hover{
        opacity:1;
      }

`;


const IconContainer = styled.div`
      background-color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:50%;
      width:40px;
      height:40px;
      margin:10px;
      transition:0.50s;

      &:hover{
        transform:scale(1.1);
      }
`;


function TechnologyControl({item}) {
  return (
      <ImgContainer>
        <Icons>
          <IconContainer>
            <FavoriteBorderOutlined/>
          </IconContainer>
          <IconContainer>
             <PhotoOutlined/>
          </IconContainer>
        </Icons>
        <img src={item.Image}/>
      </ImgContainer>
  )
}

export default TechnologyControl