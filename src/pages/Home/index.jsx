import React, { useState } from "react";
import Categorias from "../../components/Categorias";
import { filtrarProdutos, buscarProduto, produtosEntradas } from "../../service";
import CampoDeBusca from "../../components/CampoDeBusca";
import Cards from "../../components/Cards";
import { Topo } from "../../components/Topo";
import './style.css';

const Home = () => {

    const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
    const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

    const [botaoClicado, setBotaoClicado] = useState("Entradas");

    const handleBusca = (textoDigitado) => {
        setTextoBuscaDigitado(textoDigitado);
        textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
        setBotaoClicado("");
    }
    const handleFiltro = (categoria) => {
        setTextoBuscaDigitado("");
        setDadosFiltrados(filtrarProdutos(categoria));
        setBotaoClicado(categoria);
    }


    return (

        <div>
            
            <Topo />

            <main className="container-principal">
                <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

                <CampoDeBusca 
                    textoBuscaDigitado={textoBuscaDigitado} 
                    handleBusca={handleBusca} />
                
                <section className="secao-cards">
                    <div>
                        <h2>Cárdapio</h2>
                    </div>

                    <div className="container-cards">
                        {
                            dadosFiltrados.map((produto) => (
                                <Cards key={produto.id} produto={produto}/>
                            ))
                        }
                        
                    </div>
                </section>

            </main>
        </div>
    );
}

export default Home;

