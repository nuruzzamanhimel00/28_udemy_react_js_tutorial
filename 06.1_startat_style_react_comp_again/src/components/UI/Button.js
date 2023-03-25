import React from "react";
import styles from './Button.module.css';

// import styled from 'styled-components';

// const Button = styled.button`
//      color: rgb(216, 212, 207);
//     box-shadow: rgb(0 0 0 / 26%) 0px 0px 4px;
//     border-color: rgb(213, 0, 143);
//     background-image: initial;
//     background-color: rgb(111, 0, 74);
//     padding: 0.5rem 1.5rem;
//     border: 1px solid #8b005d;
//     background: #8b005d;
//     width: auto;

//     @media(max-width: 768px){
//         width: 100%;
//     }

//     &:hover{
//         background: rgb(213, 0, 143);
//     }
//     &:focus{
//         background: rgb(0, 213, 96);
//     }
// `;

const Button = (props) => {
    return (
        <button type={props.type} className={styles.button}>
            {props.children}
        </button>
    );
}

export default Button;

