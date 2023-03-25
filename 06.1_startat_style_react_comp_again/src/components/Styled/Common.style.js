import styled from 'styled-components';

//styled component
export const CardBody = styled.div`
flex: 1 1 auto;
padding: 1rem 1rem;
border: 1px solid ${ props => props.isValid ? '#ddd' : 'red' };

& button{

    border: 5px solid ${ props => props.isValid ? '#ddd' : 'red' };
}
/* &.invalied{
    border: 1px solid red !important;
} */
/* &.invalied button.button{
    background: red;
    border: 1px solid red !important;
} */
`;