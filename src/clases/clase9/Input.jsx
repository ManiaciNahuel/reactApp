import {useState, useEffect} from 'react'
// import './input.css'


export const Input = () => {
    

    const inputHandler = (event)=>{
        // event.preventDefault()        
        event.stopPropagation();
        console.log(event.key)       
    }

    return (
        <div className="box" >
            <div className="border border-1 border-warning" >
                <input 
                    className="m-5" 
                    onClick={ inputHandler } 
                    // onClick={ inputHandler } 
                    type="text" 
                    name="nombre" 
                    id="i"
                />
            </div>
        </div>
    )
}
