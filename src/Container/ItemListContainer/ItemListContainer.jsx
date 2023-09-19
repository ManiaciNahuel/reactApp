import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

import ItemList from "../../components/ItemList/ItemList"

// estilos
const ItemListContainer = ( { saludo='saludo' } ) => {      
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()
    //   no mezclar idiomas en el cód.     
    // eliminar cód repetido 
    // ningun console.log
    // variables o importaciones declaradas y nunca usadas chau
    // código comentado 
    // código innecesario
    // identeción
    // un componente debe hacer una sola cosa.


    /* Getting the data from the firestore database and setting it to the state. */
    useEffect(() => {
        const db = getFirestore()    
        const queryCollection = collection(db, 'items')
        const queryCollectionFilter = id ? query(queryCollection, where('categoria', '==', id)) : queryCollection

        getDocs(queryCollectionFilter)
        .then(resp => setProductos( resp.docs.map(item => ( { id: item.id, ...item.data() } ) ) ) )
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))                        
        
    }, [id])    
     
    return (
        <div>                       
            { loading ? 
                    <h2>Cargando...</h2> 
                :                 
                    <ItemList productos={productos} /> 
                
            }          
           
        </div>

    )
}

export default ItemListContainer