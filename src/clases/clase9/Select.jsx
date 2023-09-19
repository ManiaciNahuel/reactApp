export default function Select({ options, onSelect, defaultOption=1 }) {

    return options.map((o) => (<> 
        
        <input 
            onChange= {(event)=>{
                onSelect(o.value)
            }} 
            
            type='radio'
            name='color'
            checked={defaultOption===o.value}
            id={o.value}
            
        /> 
  
        <label for={o.value}>{o.text}</label>    
    </> ))  
  }
  