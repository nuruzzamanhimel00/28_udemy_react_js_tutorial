import styled from 'styled-components'

export const FormControl = styled.div`
    margin: 0.5rem 0;
    padding: 10px;
    border: 2px solid ${ props => !props.isValid ? 'red' : '#ddd' } !important;

    & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    & input {
    display: block;
    width: 100%;
    border:  ${ props => !props.isValid ? '5px' : '1px' } solid  ${ props => !props.isValid ? 'green' : '#ccc' } !important;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    }

    & input:focus {
    outline: none;
    background: ${ props => !props.isValid ? 'orange' : '#fad0ec' } !important ;
    border-color: #8b005d;
    }


    /* &.invalid{
    border: 2px solid red !important;
    padding: 10px;
    } */
`;