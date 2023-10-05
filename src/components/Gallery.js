import '../styles/Gallery.scss';
import { NavLink } from 'react-router-dom'
import { ReactComponent as Diamond23 } from '../img/diamond-2-3.svg';
import { ReactComponent as DiamondBig } from '../img/diamond-big.svg';
import { ReactComponent as Diamond2310 } from '../img/diamond-2-3-10.svg';


export function Gallery () {
    return (
        <nav>
            <div className='backgroundImgGallery'></div>
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
                        <NavLink to='/Livres' className='collection NavLink'>
                            <p>Livres</p>
                            <DiamondBig className='diamond book1' />
                        </NavLink>
                        <NavLink to='/contact' className='contact NavLink'>
                            <p>Contact</p>
                            <Diamond2310 className='diamond book2' />
                        </NavLink>
                        <NavLink to='/auteurices' className='auteurices NavLink'>
                            <p>Auteur.ices</p>
                            <Diamond23 className='diamond book3' />
                        </NavLink>
                    </div>
                </div>
                <div className='bookButton'></div>
            </div>
        </nav>
    )
}

//Livres = formerly Collection, hence the divergence between the component name Collection and the route name!