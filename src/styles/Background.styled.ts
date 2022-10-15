import styled from "styled-components";

interface Props {
  backgroundImage: string;
}
export const BackgroundWrapper = styled.div<Props>`
  z-index: -100;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 30vh;
`;
