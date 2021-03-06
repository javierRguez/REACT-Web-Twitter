import { createGlobalStyle, withTheme } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *:not(i){
    font-family: 'Roboto' !important;
  }

  html, body{
    -webkit-font-smoothing: antialiased;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #e5e5e5;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
    }
  }

  ::-webkit-scrollbar-track
  {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  
  ::-webkit-scrollbar
  {
    width: 6px;
    background-color: #F5F5F5;
  }
  
  ::-webkit-scrollbar-thumb
  {
    background-color: #000000;
  }

`

export default withTheme(GlobalStyles)
