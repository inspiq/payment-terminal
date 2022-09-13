import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');

* {
  padding: 0;
  margin: 0; 
  box-sizing: border-box;
  font-family: 'Nunito', sans-serif!important;
}
`
export default GlobalStyle;