import styled from 'styled-components'

export const FormControl = styled.div`
     margin: 0.5rem 0;
     border: ${props => !props.isValide ? '4px' :'1px' } solid ${props => !props.isValide ? 'red' : '#ddd'};

    & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    & input {
    display: block;
    width: 100%;
    /* border: 1px solid #ccc; */
    border: ${ props => !props.isValide ? '5px' : '1px'} solid ${props=> !props.isValide? 'green' : '#ccc'};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
    }

    & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
    }

    &.invalid{
    border: 1px solid red;
    padding:5px;
    }

`;