import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 2rem 0;
  background-color: var(--Very-Light-Gray);
  border-radius: 5px;

  li {
    border-bottom: 1px solid var(--Very-Light-Grayish-Blue);

    .task {
      display: flex;
      justify-content: space-between;
      align-content: center;
      padding: 1rem 1.5rem;
    }
  }
`;
