import styled from "styled-components";

export const Form = styled.form`
  position: relative;

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid var(--Dark-Grayish-Blue);

    position: absolute;
    top: 0.675rem;
    left: 1rem;
  }

  input {
    padding: 0.8rem 1rem 0.8rem 3rem;
    border-radius: 5px;
    border: none;
    width: 100%;

    &:active,
    &:focus {
      outline: none;
    }
  }
`;
