import './style.css';
import Banner from '../../assets/banner.png';

export const Topo = () => {
    return (
        <div>
            <header className="banner">
                <img src={Banner} alt="banner" />
                <div>
                    <h1>Restaurant</h1>
                    <p>
                        De pratos clássicos a criações surpreendentes, nosso cardápio é um
                        requinte de sabores refinados.
                    </p>    
                </div>        
            </header>
        </div>
    );
}