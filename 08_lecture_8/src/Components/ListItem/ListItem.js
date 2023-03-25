import React from "react"; 

const ListItem = (props) =>{

    const listGroupDeleteHandler = ()=>{
        props.onListGroupId(props.listItem.id);
        // console.log(props.listItem.id);
    }

    return (<>
    <li className="list-group-item my-1" onClick={listGroupDeleteHandler}>
        {props.listItem.name} ( {props.listItem.age} years old  )
    </li>
    </>);
}

export default ListItem;