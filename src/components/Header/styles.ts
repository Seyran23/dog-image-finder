import styled from "styled-components";


export const Container = styled.nav`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  max-width: 100%;
  overflow: hidden;  
  flex-wrap: wrap;   
`;


export const LogoContainer = styled.div`
  padding: 10px;
  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    max-width: 100%; 
  }
`;


export const TitleContainer = styled.div`
  h1 {
    font-size: 1.5rem; 
    text-align: center;

    @media (max-width: 600px) {
      font-size: 1.2rem; 
    }
  }
`;
