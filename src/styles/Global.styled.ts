import * as styled from "styled-components";

export const GlobalStyles = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Josefin Sans", sans-serif;
  }

  :root {
    --Bright-Blue: hsl(220, 98%, 61%);
    --Check-Background: linear-gradient hsl(192, 100%, 67%) to
      hsl(280, 87%, 65%);

    /* Light Theme */

    --Very-Light-Gray: hsl(0, 0%, 98%);
    --Very-Light-Grayish-Blue: hsl(236, 33%, 92%);
    --Light-Grayish-Blue: hsl(233, 11%, 84%);
    --Dark-Grayish-Blue: hsl(236, 9%, 61%);
    --Very-Dark-Grayish-Blue: hsl(235, 19%, 35%);

    /* Dark Theme */

    /* --Very-Dark-Blue: hsl(235, 21%, 11%);
    --Very-Dark-Desaturated-Blue: hsl(235, 24%, 19%);
    --Light-Grayish-Blue: hsl(234, 39%, 85%);
    --Light-Grayish-Blue-hover: hsl(236, 33%, 92%);
    --Dark-Grayish-Blue: hsl(234, 11%, 52%);
    --Very-Dark-Grayish-Blue: hsl(233, 14%, 35%);
    --Very-Dark-Grayish-Blue: hsl(237, 14%, 26%); */
  }
`;
