import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = (props) => {

    return(
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/products">Produits</Link></li>
                </ul>
            </nav>
            <br/>
            <h1>{props.title}</h1>
            <br/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Clic Chaussures'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header