import React from 'react';
import ListItem from './ListItem/ListItem';
import './ListWrapper.css';

// listWrapper to komponent funkcyjny
const ListWrapper = () => (
    <ul className="listWrapper__wrapper">
        <ListItem/>
    </ul> 
);
export default ListWrapper;