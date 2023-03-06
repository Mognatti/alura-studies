import "./Formulario.css";
import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
  render() {
    return (
      <>
        <form>
          <div>
            <label htmlFor="tarefa"></label>
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              placeholder="O que você vai estudar "
              required
            ></input>
          </div>
          <div>
            <label htmlFor="tempo" />
            <input
              type="time"
              step="1"
              name="tempo"
              id="tempo"
              min="00:00:00"
              max="01:30:00"
              required
            ></input>
            <Botao />
          </div>
        </form>
      </>
    );
  }
}

export default Formulario;
