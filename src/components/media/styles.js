import styled from "styled-components";

export const Button = styled.button`
  background: green;
  border: none;
  box-shadow: 1px 1px 3px #dc83f7;
  border-radius: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  font-weight: thin;
  color: white;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  width: 100%;
  height: 100%;
  background: rgba(30, 30, 30, 0.35);
  display: flex;

  justify-content: center;
  align-items: center;

  .modalContent {
    width: 100%;
    max-width: 400px;

    position: relative;
    background: #f0f2f5;
    box-shadow: 1px 1px 3px #181818;
    border-radius: 0.8rem;
    padding: 1rem;

    h1 {
      font-size: 1.5rem;
      font-weight: thin;

      color: #181818;
      margin-bottom: 1rem;
    }

    .closeButton {
      position: absolute;
      top: 5px;
      right: 5px;
      background: transparent;
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        filter: brightness(0.9);
        transform: translateY(-3px);
      }
    }
  }
`;
