import { memo } from "react"
import Item from "../Item/Item"

// memo(componente), memo(commponente, fn)
const ItemList = 
    ( { productos } ) => {
        console.log('ItemList')
        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                { productos.map((prod) =>  <Item key={prod.id} prod={prod} />  ) }
            </div>
        )
    }


export default ItemList