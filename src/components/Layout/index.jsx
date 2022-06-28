import React, { useState } from "react";

import Header from "../Header";
import VeiculoList from "../VeiculoList";
import { MovimentoList } from "../MovimentoList";
import Footer from "../Footer";

import { Container } from "./styles";

export default function Layout() {
  const [page, setPage] = useState("veiculos");

  return (
    <Container>
      <Header actualPage={page} onChangePage={setPage} />
      {page === "veiculos" ? <VeiculoList /> : <MovimentoList />}
      <Footer />
    </Container>
  );
}
