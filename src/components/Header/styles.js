import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 50px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 1rem;

  & > h1 {
    /* color: #1e1e1e; */
    color: #dc83f7;
  }

  button {
    background: none;
    border: none;
    padding: 1rem;

    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    height: 4rem;
    font-size: 1.3rem;
    color: white;
    cursor: pointer;

    transition: all 0.2s ease;
  }

  button:hover {
    color: #dc83f7;
    font-size: 1.35rem;
  }
`;
