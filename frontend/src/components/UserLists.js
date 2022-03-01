import React from 'react';
import ListComponent from './ListComponent'; 

export  default function UserLists(){
    return (
        <div>
            <ListComponent listName={'Minha Lista 1'} />
            <ListComponent listName={'Minha Lista 2'} />
        </div>
    )
}