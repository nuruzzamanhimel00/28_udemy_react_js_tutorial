import styled from 'styled-components'
import Tag from '../Tag.js'
import Title from '../Title.js'

export const TagCustomeStyle = styled(Tag)`
    background: ${(props) => props.bg} ;
    display: inline-block;
    color: #fff;
    margin-bottom: 10px;
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.7em;
`;

export const TitleCustomeStyle = styled(Title)`
    color: ${ (props) => props.color };
`;
