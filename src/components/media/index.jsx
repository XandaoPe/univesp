import React, { useState } from "react";
import { Button, ModalContainer } from "./styles";
import { GrClose } from "react-icons/gr";

export function Media({ item, index, arrayItems }) {
  const [modalMediaIsUp, setModalMediaIsUp] = useState(false);

  const handleOpenModalMedia = () => {
    setModalMediaIsUp(true);
  };

  const handleCloseModalMedia = () => {
    setModalMediaIsUp(false);
  };

  const formula = () => {
    let items = arrayItems
      .slice(0, index + 1)
      .filter((arrayItem) => arrayItem.placa === item.placa);
    items = items.slice(items.length - 2);

    if (items.length === 2) {
      const media = Math.floor(
        items.reduce((mov1, mov2) => mov2.km - mov1.km) / items[1].qtde
      );

      return `${new Intl.NumberFormat("pt-BR", {
        maximumSignificantDigits: 3,
      }).format(media)} Km/Lt (dois últimos abastecimento)`;
    }

    const media = Math.floor(items[0].km / items[0].qtde);

    return `${new Intl.NumberFormat("pt-BR", {
      maximumSignificantDigits: 3,
    }).format(media)} Km/Lt (último abastecimento)`;
  };

  return (
    <>
      {modalMediaIsUp && (
        <ModalContainer>
          <div className="modalContent">
            <h1>Placa - {item.placa}</h1>
            <p>
              <strong>Média: </strong> {formula()}
            </p>
            <button className="closeButton" onClick={handleCloseModalMedia}>
              <GrClose color="black" size="25px" />
            </button>
          </div>
        </ModalContainer>
      )}
      <Button onClick={handleOpenModalMedia}>Média</Button>
    </>
  );
}
