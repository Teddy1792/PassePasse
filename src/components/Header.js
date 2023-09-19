import { NavLink } from 'react-router-dom'
import logo from '../img/logo/logo_passe_passe_inverted.png';
import '../styles/Header.scss';

export function Header () {
    return (
        <header>
            <NavLink to={"/"} className='nav-link'>
                <div className='hover-element'>
                    <p className='accueil'>Accueil</p>
                </div>
            </NavLink>
            <div className='box'>
                <img src={logo} alt='logo PassePasse'/>
                <div className='rhombus'></div>
            </div>
            <NavLink to={"/Apropos"} className='nav-link'>
                <div className='hover-element'>
                    <p className='aProposHeader'>A propos</p>
                </div>
            </NavLink>
        </header>
    )
}