import "./Formulario.css";
import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="tarefa"> Novo estudo: </label>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              placeholder="O que você vai estudar "
              required
            />
          </div>
          <div>
            <label htmlFor="tempo"> Tempo de foco: </label>
            <input
              type="time"
              step="1"
              name="tempo"
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            />
          </div>
          <Botao />
        </form>
      </>
    );
  }
}

export default Formulario;
