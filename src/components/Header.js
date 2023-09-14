import { NavLink } from 'react-router-dom'
import logo from '../img/logo/logo_passe_passe_inverted.png';
import '../styles/Header.scss';

export function Header () {
    return (
        <header>
            <NavLink to={"/"} className='nav-link left'>
                <div className='hover-element'>
                    <p className='accueil'>Accueil</p>
                </div>
            </NavLink>
            <div className='box'>
                <img src={logo} alt='logo PassePasse'/>
                <div className='rhombus'></div>
            </div>
            <NavLink className='nav-link'>
                <div className='right hover-element'>
                    <p className='aPropos'>A propos</p>
                </div>
            </NavLink>
        </header>
    )
}