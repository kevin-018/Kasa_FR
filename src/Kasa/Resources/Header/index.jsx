import { Link } from 'react-router-dom'

function Header(){
    return (
        <nav className='Menu'>
            <Link to="/">Accueil</Link>
            <Link to="/Apropos">A Propos</Link>
        </nav>
    )
}



export default Header