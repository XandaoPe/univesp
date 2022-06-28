import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./styles";

export default function Header({ actualPage, onChangePage }) {
  const [title, setTitle] = useState();
  const [button, setButton] = useState();

  useEffect(() => {
    if (actualPage === "veiculos") {
      setTitle("Veículos");
      setButton(
        <button onClick={() => onChangePage("movimentacao")}>
          Movimentação
          <AiOutlineArrowRight color="inherit" size="20px" />
        </button>
      );
    } else {
      setTitle("Movimentação");
      setButton(
        <button onClick={() => onChangePage("veiculos")}>
          <AiOutlineArrowLeft color="inherit" size="20px" />
          Veículos
        </button>
      );
    }
  }, [actualPage, onChangePage]);

  return (
    <Container>
      <h1>{title}</h1>
      {button}
    </Container>
  );
}
