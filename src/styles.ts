import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: local("Roboto-Bold"), local("Roboto-Regular"),
        url('../../fonts/Roboto-Bold.ttf'),
        url('../../fonts/Roboto-Regular.ttf');
    }
    *{
        margin: 0px;
        padding: 0px;
    }
    body {
        background-color: #30ba8f;
    }
`;

export const StyledMainWrapper = styled.main`
  display: flex;
  justify-content: center;
`;
