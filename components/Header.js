import styled from "styled-components";


//styling
const HeaderWrapper = styled.div`
background: orange;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: #fff;
`;

const Title = styled.h1 `
height: 64px;
pointer-events: none;
`;

function Header() {
  return (
    <HeaderWrapper>
       <Title>
        Community Feed
       </Title>
        
    </HeaderWrapper>
  )
}

export default Header
