import { useState } from 'react'

const AddProduct = ({onAdd}) => {

    const [nom, setNom] = useState('')
    const [description, setDescription] = useState('')
    const [prix, setPrix] = useState('')
    const [categorie, setCategorie] = useState('')

    // Click sur le bouton 'save'
    const onSubmit = (e) => {
        e.preventDefault()

        // Ne pas passer un objet vide
        if(!nom) {
            alert('SVP entrez un nom')
            return
        }
        if(!description) {
            alert('SVP entrez une description')
            return
        }
        if(!prix) {
            alert('SVP entrez un prix')
            return
        }
        if(!categorie) {
            alert('SVP entrez une catégorie')
            return
        }

        onAdd({nom, description, prix, categorie})

        // Efface le contenu des champs une fois les données ajoutées
        setNom('')
        setDescription('')
        setPrix('')
        setCategorie('')
    }

    return (
        <form className="form-add" onSubmit={onSubmit}>
            <div className="form-add-product">
                <label>
                    Nom
                    <input type="text" placeholder="Ajouter nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
                </label>
            </div>
            <div className="form-add-product">
                <label>
                    Description
                    <input type="text" placeholder="Ajouter description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </label>
            </div>
            <div className="form-add-product">
                <label>
                    Prix
                    <input type="text" placeholder="Ajouter prix" value={prix} onChange={(e) => setPrix(e.target.value)}/>
                </label>
            </div>
            <div className="form-add-product">
                <label>
                    Catégorie
                    <input type="text" placeholder="Ajouter catégorie" value={categorie} onChange={(e) => setCategorie(e.target.value)}/>
                </label>
            </div>
            <input type="submit" className="btn btn-block" value="Sauvegarder"/>
        </form>
    )
}

export default AddProduct