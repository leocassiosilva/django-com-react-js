import React from 'react';

export  default function ItemComponent(props){
    const status = props.status;
    return <li>{props.name} 
    <div>Status:{status ? <p>Finalizado!</p> : <p>Não Finalizado!</p>}</div></li>
}