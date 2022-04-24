import React, {useState} from "react";
import '../contador/Contador.scss';

export default function Contador(props){
    const [count, setCount]= useState(props.inicial);

    function handleAdd(){
        setCount(count + 1);    
    }

    function handleSubstract(){
        setCount (count - 1)
    }
        
    return(
        <div className="contador">
            <div className="contador-buttom">
                <button className="contador-buttom-icons" onClick={handleSubstract}>-</button>
                <button className="contador-buttom-icons"> {count} </button>
                <button className="contador-buttom-icons" onClick={handleAdd}>+</button>
            </div>
            <div className="contador-buttom-agregar">
                <button>Agregar al carrito></button>
            </div>
        </div>
    );
}