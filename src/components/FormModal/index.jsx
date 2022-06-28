import React, { useContext } from "react";
import { EditingVeiculoContext } from "../../context/EditingVeiculoContext";
import { FormModalContext } from "../../context/FormModalContext";

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
} from "./styles";

export default function FormModal() {
  const {
    closeFormModal,
    submitForm,
    marca,
    modelo,
    placa,
    ano,
    setMarca,
    setModelo,
    setPlaca,
    setAno,
  } = useContext(FormModalContext);

  const { editingVeiculo } = useContext(EditingVeiculoContext);

  function marcaHandler(e) {
    setMarca(e.target.value);
  }

  function modeloHandler(e) {
    setModelo(e.target.value);
  }

  function placaHandler(e) {
    const length = e.target.value.length;
    const value = length >= 1 && e.target.value[length - 1].toUpperCase();

    //BackSpace
    if (e.target.value === placa.substring(0, placa.length - 1)) {
      setPlaca((prevState) => {
        let text = prevState;
        let textEdited =
          text[text.length - 2] === "-"
            ? text.substring(0, text.length - 2)
            : text.substring(0, text.length - 1);
        return textEdited;
      });
      return;
    }

    if (length <= 3 && value.match(/^[A-Z]/)) {
      setPlaca((prevState) => prevState + value);
      return;
    }

    if (length === 4 && value.match(/^[0-9]/)) {
      setPlaca((prevState) => prevState + "-" + value);
      return;
    }

    // Jump to 6 because the index 5 is equal "-"
    if (length === 5 && value.match(/^[A-Z0-9]/)) {
      setPlaca((prevState) => prevState + value);
      return;
    }


    if (length === 6 && value.match(/^[A-Z0-9]/)) {
      setPlaca((prevState) => prevState + value);
      return;
    }

    if (length === 7 && value.match(/^[A-Z0-9]/)) {
      setPlaca((prevState) => prevState + value);
      return;
    }

    // if (length === 7 && e.target.value[length - 2].match(/[^A-Z]/)) {
    //   if (value.match(/[^0-9]/)) {
    //     return setPlaca((prevState) => prevState + value);
    //   }
    //   return;
    // }

    // if (length === 7 && e.target.value[length - 2].match(/[^0-9]/)) {
    //   if (value.match(/[^A-Z]/)) {
    //     return setPlaca((prevState) => prevState + value);
    //   }
    //   return;
    // }

    if (length === 8 && value.match(/^[0-9]/)) {
      setPlaca((prevState) => prevState + value);
      return;
    }
  }

  function anoHandler(e) {
    setAno(e.target.value);
  }

  return (
    <Overlay>
      <Container>
        <Header>
          <strong>
            {editingVeiculo ? "Editar Veiculo" : "Addicionar Veiculo"}
          </strong>
          <button onClick={closeFormModal}>
            <CloseIcon />
          </button>
        </Header>
        <FormContainer onSubmit={submitForm}>
          <FormMain>
            <InputGroup>
              <label htmlFor="marca">Marca</label>
              <input
                id="marca"
                type="text"
                maxLength={15}
                value={marca}
                placeholder="Inserir Fabricante do Veículo"
                onChange={marcaHandler}
                required="Insira o frabicante do veículo"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="modelo">Modelo</label>
              <input
                id="modelo"
                type="text"
                maxLength={15}
                value={modelo}
                placeholder="Inserir Modelo do Veículo"
                onChange={modeloHandler}
                required="Insira Modelo do Veículo"
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="placa">Placa</label>
              <input
                id="placa"
                type="text"
                value={placa}
                placeholder="Inserir a Placa do Veículo"
                onChange={placaHandler}
                required="Insira a Placa do Veículo. Padrão -> XXX-9(X/9)(x/9)9"
                maxLength={8}
              />
            </InputGroup>
            <InputGroup>
              <label htmlFor="ano">Ano</label>
              <input
                id="ano"
                type="number"
                value={ano}
                placeholder="Inserir o Ano do Veículo"
                onChange={anoHandler}
              // required="Insira o Ano do Veículo"
              />
            </InputGroup>
          </FormMain>
          <Footer>
            <button type="submit">
              <CheckIcon />
            </button>
          </Footer>
        </FormContainer>
      </Container>
    </Overlay>
  );
}
