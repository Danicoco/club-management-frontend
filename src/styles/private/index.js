import styled, { createGlobalStyle } from 'styled-components';

export const PrivateBackground = createGlobalStyle`
body{
    font-family: 'Comfortaa', cursive;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    overflow-x: hidden;
  }  
`;

export const Segment = styled.div`
  margin: 2rem;
`;