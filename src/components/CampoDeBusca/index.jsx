import Lupa from '../../assets/lupa.png';
import './style.css';

const CampoDeBusca = ({textoBuscaDigitado, handleBusca}) => {
    return (
        <div className='barra-de-pesquisa'>
            <img src={Lupa} alt="lupa" />
            <input 
                type="text" 
                value={textoBuscaDigitado}
                onChange={(event) => handleBusca(event.target.value)}
                placeholder='Pesquise aqui um dos seus pratos do nosso cardápio'
            />
        </div>
    );
}

export default CampoDeBusca;

