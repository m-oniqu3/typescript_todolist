import styled from "styled-components";

interface Props {
  completed: boolean;
}

export const ListItem = styled.li<Props>`
  border-bottom: 1px solid var(--Very-Light-Grayish-Blue);
  opacity: ${(props) => (props.completed ? 0.5 : 1)};
  text-decoration: ${(props) => (props.completed ? "line-through" : "")};

  :last-child {
    border-bottom: none;
  }

  .task {
    display: grid;
    grid-template-columns: 11fr 1fr;
    gap: 1rem;
    padding: 1rem;

    &__content {
      display: grid;
      grid-template-columns: 1rem 1fr;
      gap: 1rem;

      p {
        font-size: 0.9rem;
        color: ${(props) =>
          props.completed
            ? "var(--Dark-Grayish-Blue)"
            : "var(--Very-Dark-Grayish-Blue)"};
      }
    }
  }

  .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    border: 1px solid var(--Dark-Grayish-Blue);
    cursor: pointer;
    background: ${(props) =>
      props.completed ? "var(--Dark-Grayish-Blue)" : ""};
  }

  .delete {
    width: 0.8rem;
    height: 0.8rem;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;
