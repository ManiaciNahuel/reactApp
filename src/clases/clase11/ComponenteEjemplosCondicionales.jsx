import { useState, useEffect } from "react";


 
export const ControlledInput = () => {
    const [dataForm, setDataForm] = useState( {email: '', nombre: '' } );    

    const handleOnChange = (e) =>{        
        setDataForm( {...dataForm,
            [e.target.name]: e.target.value
        } )
        // console.log(e.target.name)
        // console.log(e.target.value)
    }

    console.log(dataForm)
    return (
        <>
            <input
                type="text"
                name='email'
                value={dataForm.email}
                onChange={(e) => handleOnChange(e)} /// addEventListener('evento', fn)
                placeholder="mail"
            /><br></br>
            <input
                type="text"
                name='nombre'
                value={dataForm.nombre}
                onChange={handleOnChange}
                placeholder="nombre"
            />
           
        </>
    );
  };










  
  
export  function LoadingComponent() {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 5000)        
    }, []);


    
    return <>
        { loading ? <h2>Cargando ...</h2> : <h3>Productos cargardos!</h3>}
    </>;
  }











  
export  function TextComponent({ condition = false, children }) {

    // console.log(children)
    const token = localStorage.getItem('token')
    if (!token) {
        
        return <h2>Uds no esta logeado no puede ver el componente</h2>;  //navigate
    }

  
    return (
        <>  
            {children}
            <h2>Ud esta logueado puede ver la pág.</h2>
        </>
    )
  }








//   condicion ? :  => if else ,    condicion && => if   ,    condicion ||  or


export  function TextComponent2({ condition = true }) {

    // Llamado context 
    return (
        <>
            {condition && <h2>Ud esta logueado puede ver esta parte.</h2>}

            {!condition && <h2>Ud no esta logueado, NO puede ver esta sección.</h2>}

        </>
    );
  }

// condicion ? :(si no), condición && accion si, condicion  || acciones







export  function TextComponent3({ condition = false }) {

    return (
        <>
            <h2> { condition ? 'Ud esta logueado puede ver la pág.' : 'Ud NO esta logueado no puede ver la pág.'} </h2>            
            
        </>
    )
}









 export function TextComponent4({ condition = false }) {

    return (
        <>
            <h2 style={ { color: condition ? "green" : "red" } }>
                Ud esta logueado puede ver la pág.
            </h2>
        </>
    );
  }













  
export  function TextComponent5({ stock = 0 }) {

    return (
        <>
            <h2 className={ (stock !== 0) ? "alert alert-success" : "alert alert-danger" }>
                stock
            </h2>
        </>
    );
}

















export  function TextComponent6( { condition = false, otro='mt-5'}  ) {
    return (
        <>
            <h2
                className={ `${condition === true ? "alert alert-success" : "alert alert-danger"} ${otro || ""} `}
            >
                Ud esta logueado puede ver la pág.
            </h2>
        </>
    );
}












export function TextComponent7({ condition = false , otro = "mt-5" }) {
    
    const props = condition

        ?
            {
                className: `alert alert-success ${otro || ""}`,
                style: {color: 'red'},
                title: "Este es el titulo si la condicion es verdadera",
                nombre: 'Fede'
            }
        : 
            {
                className: `alert alert-warning ${otro || ""}`,
                style: {color: 'green'},
            }

            
    
      return (
        <>    
            {/* className= btn btn-success style=   */}
            <h2 {...props} >Ud esta logueado puede ver la pág.</h2>
        </>
    )
  }