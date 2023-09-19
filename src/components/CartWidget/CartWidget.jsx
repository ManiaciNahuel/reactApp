import { Link } from 'react-router-dom'
import Img from '../../imagenes/carrito.svg'



const CartWidget = () => {
  return (
    <>    
        <Link to='/cart' >  <img src={ Img } style={{width: 100}} alt="imagen"/>
          </Link>   </>
  )
}

export default CartWidget