import React from "react";
import './Globito.scss';

function Globito({children, isButton, onGlobitoClick}){
    return(
        <div className={"Globito ${isButton ? "Globito-button" :""}"} onClick={() =>isButton && onGlobitoClick()}>
            {children}
        </div>
    )
}

export default Globito
