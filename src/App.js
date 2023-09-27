import { useState, useEffect } from 'react'
import Header from './components/Header'
import FormButton from './components/FormButton'
import ManyProducts from './components/ManyProducts'
import AddProduct from './components/AddProduct'

function App() {

	const [products, setProducts] = useState ([])

	useEffect(() => {
        const getProducts = async () => {
            const productsFromServer = await fetchProducts()
            setProducts(productsFromServer)
        }
        // Exécution de la fonction
        getProducts()
    // Attend un tableau à la fin
    }, [])
    
    const fetchProducts = async () => {
        const res = await fetch('http://localhost:5000/products')
        // conversion de la donnée en json
        const data = await res.json()
        return data
    }

	// ADD
	const addProduct = async (product) => {
        const res = await fetch('http://localhost:5000/products', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        // Côté serveur
        const newProduct = await res.json()

        // Côté DOM
        setProducts([...products, newProduct])
	}

	// UPDATE
    const fetchProduct = async (id) => {
        const res = await fetch(`http://localhost:5000/products/${id}`)

        // conversion de la donnée en json
        const data = await res.json()

        return data
    }
	
    const updateProduct = async (id) => {

        // On récupère une donnée précise
        const productToUpdate = await fetchProduct(id)
        const updProduct = {...productToUpdate}


        const res = await fetch(`http://localhost:5000/products/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updProduct)
        })
        const data = await res.json()

        setProducts(products.map((product) => product.id === id ? {...product} : product))
    }

	// DELETE
    const deleteProduct = async (id) => {

        // Côté serveur
        await fetch(`http://localhost:5000/products/${id}`, {
            method: 'DELETE',
        })
        // Côté DOM
        setProducts(products.filter((product) => product.id != id))
    }

	// useState(false) = Affiche pas et useState(true) = Affiche
	const [showAddProduct, setshowAddProduct] = useState(false)

	return (
            <div className='container'>
                <Header/>

                <FormButton onAddBtn={() => setshowAddProduct(!showAddProduct)} showAdd={showAddProduct}/>

                {showAddProduct && <AddProduct onAdd={addProduct}/>}

                <ManyProducts products={products} onUpdateMany={updateProduct} onDeleteMany={deleteProduct}/>
            </div>
	);
}
export default App;
