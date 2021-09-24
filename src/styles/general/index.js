import { createGlobalStyle } from 'styled-components';

export const Background = createGlobalStyle`
body{
    display: flex;
    min-width: 100%;
    min-height: 100%;
    justify-content: center;
    font-family: 'Comfortaa', cursive;
    background-color: #8BC6EC;
    background-image: linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%);
    align-items: center;
    overflow-x: hidden;
    background-size: cover;
  }   
`;
