import PropTypes from 'prop-types'
import Button from './Button'


const FormButton = (props) => {

    return(
        <div className="formButton">
            <h2>{props.title}</h2>
            <Button text={props.showAdd ? 'Fermer' : 'Ajouter'} color={props.showAdd ? 'red' : 'cornflowerblue'} onClick={props.onAddBtn}/>
        </div>
    )
}

FormButton.defaultProps = {
    title: 'Liste des produits'
}

FormButton.propTypes = {
    title: PropTypes.string.isRequired
}

export default FormButton