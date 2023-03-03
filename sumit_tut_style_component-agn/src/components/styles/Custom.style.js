import styled from 'styled-components'
import Title from '../Title.js'

export const StyleTitle = styled(Title)`
    color: ${ (props) => props.color }
`;