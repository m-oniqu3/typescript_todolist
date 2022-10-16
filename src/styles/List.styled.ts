import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  margin: 2rem 0;
  background-color: var(--Very-Light-Gray);
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

  li {
    border-bottom: 1px solid var(--Very-Light-Grayish-Blue);

    :last-child {
      border-bottom: none;
    }

    .task {
      display: grid;
      grid-template-columns: 11fr 1fr;
      gap: 1rem;
      /* place-content: center; */
      padding: 1rem;

      &__content {
        display: grid;
        grid-template-columns: 1rem 1fr;

        /* place-items: start;
        place-content: start; */
        gap: 1rem;

        p {
          font-size: 0.9rem;
          color: var(--Very-Dark-Grayish-Blue);
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
    }
  }
`;
