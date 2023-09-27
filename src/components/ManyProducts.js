import SingleProduct from'./SingleProduct'

const ManyProducts = ({products, onUpdateMany, onDeleteMany}) => {
    return(
        <>
            <div className="flex-container">
                {products.map((product) => (
                    <SingleProduct product={product} key={product.id} onUpdate={onUpdateMany}  onDelete={onDeleteMany}/>
                ))}
            </div>
        </>
    )
}
export default ManyProducts