import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContex"

const Cart = () => {
  const { cartList, vaciarCarrito, precioTotal, removeItem } = useCartContext()

    return (
        <div>
            {cartList.length === 0 ? 
                <div className="container mt-5">
                    <label className="alert alert-warning">NO HAY PRODUCTOS EN EL CARRITO</label><br />
                    <Link to='/'>
                        <button className='btn btn-outline-primary'>Seleccionar productos</button>
                    </Link>
                </div>
            :
                <>
                    {cartList.map(product =>  <div key={product.id} >
                                                <li >
                                                    {product.name} - price: {product.price} - cantidad: {product.cantidad}
                                                </li>
                                                <button className='btn btn-outline-primary' onClick={()=> removeItem(product.id)}> X </button> 
                                                </div>)}
                    <h2>El precio total es: {precioTotal()}</h2>
                    <button onClick={vaciarCarrito}>Vaciar carrito</button>
                </>
            }
        </div>
    )
}

export default Cart