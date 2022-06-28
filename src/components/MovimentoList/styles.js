import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      /* color: #dc83f7; */
      color: white;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    tbody tr {
      background-color: #7b5486;
      border-radius: 0.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;

      /* color: #dc83f7; */
      color: black;

      &:nth-child(1) {
        /* color: #ec53d7; */
        color: black;
        font-size: 20px;
        font-weight: bold;
      }

      &:last-child {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
      }

      button:nth-child(2) {
        background: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 1.5rem;
`;
