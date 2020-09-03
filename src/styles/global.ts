import { createGlobalStyle } from 'styled-components' ;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font: 24px Quattrocento, sans-serif;
  }

  #root {
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 20px;
    --primary-color: #59AFE6;
    --secondary-color: #34325E;
  }

  button {
    cursor: pointer;
  }
`;