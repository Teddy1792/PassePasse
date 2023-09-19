import { ReactComponent as AproposBackground } from '../img/backgroundApropos.svg';
import '../styles/Apropos.scss'

export function Apropos() {
    return(
        <nav>
            <AproposBackground className='backgroundContactImage' alt="" />
            <p className='aProposMain'>Association créée en 2023, les Éditions Passe·passe cherchent à mettre en lumière quelque vision du monde susceptible, pour le dire avec une présomptueuse ambition et des moyens minimalistes, de réajuster le réel. Autrement dit, chaque livre offre un point de vue singulier sur l’environnement qui l’entoure et une manière propre de l’habiter.
L’association s’engage à reverser une partie de ses bénéfices à une association à but non lucratif consacrée aux enjeux sociaux et/ou environnementaux. </p>
        </nav>
    )
}