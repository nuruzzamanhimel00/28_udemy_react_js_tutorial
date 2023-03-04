import React from 'react'

const Title = (props) =>{
    // console.log(props);
    return (
        <>
            <span className={props.className} >{props.title}</span>
        </>
    );
}

export default Title;