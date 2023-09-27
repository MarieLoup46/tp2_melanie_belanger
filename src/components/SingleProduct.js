import Button from './Button'

const SingleProduct = ({product, onUpdate, onDelete}) => {

    return(
        <div className="product">
            <article>
                <h3>{product.nom}</h3>
                <ul>
                    <li>{product.description}</li>
                    <li>{product.prix} $</li>
                    <li>{product.categorie}</li>
                </ul>
                <Button text={'Mettre à jour'} onClick={ () => onUpdate(product.id)}/>
                <Button text={'Supprimer'} color={'crimson'} onClick={ () => onDelete(product.id)}/>
            </article>
        </div>
    )
}
export default SingleProduct