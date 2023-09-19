import { Link } from "react-router-dom"


const Item = ( {prod} ) => {
    console.log('Item')
    return (
        <div            
            className='col-md-4 p-1'                                                
        >                        
            <Link to={`/detalle/${prod.id}`}>
                <div className="card w-100 mt-5" >
                    <div className="card-header">
                        {`${prod.name} - ${prod.categoria}`}
                    </div>
                    <div className="card-body">
                        <img src={prod.foto} alt='' className='w-50' />
                        {prod.price}                                                            
                    </div>
                    <div className="card-footer">  
                        <button className="btn btn-outline-primary btn-block">
                            detalle del producto
                        </button>                
                    </div>
                </div>
            </Link>                                                                                
        </div>
    )
}

export default Item