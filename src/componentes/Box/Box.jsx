import React from 'react';
import './Box.scss';
import CardType from '../CardType/CardType.jsx';


function Box(props) {
    return (
        <div className='box'>
            <div className='Cardtype'>
                <CardType/>
                <CardType/>
                <CardType/>
            </div>
        </div>
    )
}

export default Box;
