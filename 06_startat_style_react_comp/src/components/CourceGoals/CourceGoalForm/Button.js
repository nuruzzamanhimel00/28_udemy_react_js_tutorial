// import React from "react";
// import './Button.css'
import styled from 'styled-components'

const Button = styled.button`
 
    border-color: rgb(213, 0, 143);
    color: rgb(232, 230, 227);
    background-image: initial;
    background-color: rgb(111, 0, 74);
    box-shadow: rgb(0 0 0 / 26%) 0px 0px 4px;
    padding: 0.5rem 1.5rem;
      border: 1px solid #8b005d;
      background: #8b005d;
      cursor: pointer;
  
  &:hover{
    background: #008b2a;
  }
  &:active{
    background: #f00d7e;
  }
`;


// const Button = (props) =>{

//     return (
//         <button type="submit" className="button">
//           {props.children}
//         </button>
//     );
// }

export default Button;