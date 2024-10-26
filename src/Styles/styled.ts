import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 3rem auto;
  margin-bottom: 100px;
  background-color: ${(props) => props.theme.background};
`;


export const AppBody = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin:  auto;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
