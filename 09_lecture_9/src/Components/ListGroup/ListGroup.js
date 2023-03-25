import React from "react";
import ListItem from '../ListItem/ListItem.js'

const ListGroup = (props) =>{
    
    const listGroupIdHandler = (id) =>{
        props.onGetListGroupId(id);
        // console.log(id);
    }

    const listItems = props.listData.map((listItem) =>(
        <ListItem
        key={listItem.id}
        listItem={listItem}
        onListGroupId={listGroupIdHandler}
        // name="himel"
        />
    ));

    return (
        <>
        <ul className="list-group">
            {listItems}  
        </ul>
        </>
    );
}

export default ListGroup;