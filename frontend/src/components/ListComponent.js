import React from 'react';
import ItemComponent from './ItemComponent';

export  default function ListComponent(){
    return (
       <div>
            <h2>Minha Lista</h2>
            <ul>
                <ItemComponent name={'Meu Item1'}/>
                <ItemComponent name={'Meu Item2'}/>
            </ul>
       </div>
    );
}