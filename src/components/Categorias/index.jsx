import React from "react";
import icone1 from "../../assets/entrada.png";
import icone2 from "../../assets/massa.png";
import icone3 from "../../assets/carne.png";
import icone4 from "../../assets/bebidas.png";
import icone5 from "../../assets/salada.png";
import icone6 from "../../assets/sobremesa.png";
import './style.css';



const Categorias = ({handleFiltro, botaoClicado}) => {
    return (
        <section className="secao-categorias">
            <div className="container-botoes">
                <button 
                    className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Entradas")}>
                    <img src={icone1} alt="entradas" />Entradas
                </button>

                <button
                    className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Massas")}>
                    <img src={icone2} alt="massas" />Massas
                </button>

                <button 
                    className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Carnes")}>
                    <img src={icone3} alt="carnes" />Carnes
                </button>

                <button
                    className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Bebidas")}>
                    <img src={icone4} alt="bebidas"/>Bebidas
                </button>

                <button
                    className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Saladas")}>
                    <img src={icone5} alt="saladas"/>Saladas
                </button>
                
                <button
                    className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
                    onClick={() => handleFiltro("Sobremesas")}>
                    <img src={icone6} alt="sobremesas"/>Sobremesas
                </button>
                
            </div>
        </section>
    );
}

export default Categorias;




/*
import "./style.css";


const Categorias = ({ handleFiltro, botaoClicado }) => {
  return (
    <section className="secao-categorias">
      <div className="container-botoes">

        <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Carnes")}>
          <img src={icone3} alt="ícone" />Carnes
        </button>
        <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Bebidas")}>
          <img src={icone4} alt="ícone" />Bebidas
        </button>
        <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Saladas")}>
          <img src={icone5} alt="ícone" />Saladas
        </button>
        <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Sobremesas")}>
          <img src={icone6} alt="ícone" />Sobremesas
        </button>

      </div>
    </section>
  );
};
export default Categorias;

*/