import React, { useContext } from "react";
import { MovimentationContext } from "../../context/MovimentationContext";
import CurrencyInput from "react-currency-input-field";
import {
  Overlay,
  Container,
  Header,
  CloseIcon,
  FormContainer,
  FormMain,
  InputGroup,
  Footer,
  CheckIcon,
} from "./style";

export default function MovimentationFormModal() {
  const {
    closeFormModal,
    submitForm,
    marca,
    modelo,
    placa,
    ano,
    date,
    km,
    qtde,
    setDate,
    setKm,
    setQtde,
    setValor,
  } = useContext(MovimentationContext);

  //   const { editingVeiculo } = useContext(EditingVeiculoContext);

  function dateHandler(e) {
    setDate(e.target.value);
  }

  function kmHandler(e) {
    if (Number(e.target.value) <= 5000) {
      setKm(e.target.value);
    }
  }

  function qtdeHandler(e) {
    if (Number(e.target.value) <= 120) {
      setQtde(e.target.value);
    }
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>Movimento</strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer>
          <FormMain>
            <div>
              <p>
                <strong>Marca:</strong> {marca}
              </p>
              <p>
                <strong>Modelo:</strong> {modelo}
              </p>
              <p>
                <strong>Placa:</strong> {placa}
              </p>
              <p>
                <strong>Ano:</strong>{ano}
                {/* {new Intl.DateTimeFormat("pt-BR").format(new Date(ano))} */}
              </p>
            </div>
            <InputGroup>
              <label htmlFor="data">Data</label>
              <input
                id="data"
                type="date"
                value={date}
                onChange={dateHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="km">Quilômetros (KM)</label>
              <input
                id="km"
                type="number"
                value={km}
                placeholder="Inserir km do Veículo"
                onChange={kmHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="Quantidade">Quantidade</label>
              <input
                id="Quantidade"
                type="number"
                maxLength={80}
                value={qtde}
                placeholder="Inserir a quantidade"
                onChange={qtdeHandler}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="valor">Valor</label>

              <CurrencyInput
                id="valor"
                name="valor"
                placeholder="Inserir o Valor do Abastecimento"
                decimalsLimit={2}
                maxLength="6"
                allowNegativeValue={false}
                prefix="R$"
                onValueChange={(value) => setValor(value)}
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button onClick={submitForm}>
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
