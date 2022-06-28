import React, { useState, useEffect } from "react";
import { useAxios } from "../../hooks/useAxios";
import { BsFillTrashFill } from "react-icons/bs";
import { Container, Message } from "./styles";
import api from "../../services/api";
import { Media } from "../media";

export function MovimentoList() {
  const [data, setData] = useState();
  const axios = useAxios("movto");

  useEffect(() => {
    const { data, mutate } = axios;
    mutate(data, true);
    setData(data);
  }, [axios]);

  function handleDelete(id) {
    api.delete(`/movto/${id}`);

    const updatedVeiculos = {
      veiculos: data.movto?.filter((item) => item._id !== id),
    };

    const { mutate } = axios;

    mutate(updatedVeiculos, true);
  }

  return (
    <Container>
      {data?.movto?.length >= 1 ? (
        <table>
          <thead>
            <tr>
              <th>Placa</th>
              <th>Quilometros</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data?.movto
              ?.map((item, index, arrayItems) => {
                return (
                  <tr key={item._id}>
                    <td>{item.placa}</td>
                    <td>{item.km} KM</td>
                    <td>{item.qtde} Litros</td>
                    <td>
                      {new Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                      }).format(item.valor)}
                    </td>
                    <td>
                      {new Intl.DateTimeFormat("pt-BR").format(
                        new Date(item.datas)
                      )}
                    </td>
                    <td>
                      <Media
                        item={item}
                        index={index}
                        arrayItems={arrayItems}
                      />

                      <button onClick={() => handleDelete(item._id)}>
                        <BsFillTrashFill color="red" size="30px" />
                      </button>
                    </td>
                  </tr>
                );
              })
              .reverse()}
          </tbody>
        </table>
      ) : (
        <Message>
          <img src="assets/spinner.svg" alt="searching" />
          <h3>Insira um movimento na tela de Veículos</h3>
        </Message>
      )}
    </Container>
  );
}
