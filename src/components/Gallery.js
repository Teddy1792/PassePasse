import '../styles/Gallery.scss';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Background } from '../img/background.svg';
import { ReactComponent as Diamond23 } from '../img/diamond-2-3.svg';
import { ReactComponent as DiamondBig } from '../img/diamond-big.svg';


export function Gallery () {
    return (
        <nav>
            <Background className='backgroundImage' alt='a triangle-looking mountain' />
            <div className='bookContainer'>
                <div className='rhombus'>
                    <NavLink className='presentationText NavLink'>
                        <p>Les Éditions Passe·passe jouent avec les techniques d’impressions 
                                pour produire de petits livres illustrés. Pensé d’abord comme un 
                                support d’expression personnelle, chaque livre invite lectrices et 
                                lecteurs à percevoir, le temps de quelques pages, les bouillonnements 
                                d’une conscience figés dans l’encre et le papier.</p>
                    </NavLink>
                    <div className='books'>
                        <NavLink to='/collection' className='collection NavLink'>
                            <p>Collection</p>
                            <DiamondBig className='diamond book1' />
                        </NavLink>
                        <NavLink className='contact NavLink'>
                            <p>Contact</p>
                            <Diamond23 className='diamond book2' />
                        </NavLink>
                    </div>
                </div>
                <div className='bookButton'></div>
            </div>
        </nav>
    )
}