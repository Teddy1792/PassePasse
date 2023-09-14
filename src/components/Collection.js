import '../styles/Collection.scss';
import { NavLink } from 'react-router-dom'
import { ReactComponent as CollectionsBackground } from '../img/collection.svg';


export function Collection () {
    return (
        <nav>
            <CollectionsBackground className='backgroundImage' alt="une boîte noire flottant dans les airs au dessus d'escalier" />
        </nav>
    )
}