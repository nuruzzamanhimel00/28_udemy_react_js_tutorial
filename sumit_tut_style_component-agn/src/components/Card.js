import nerdImage from '../assets/images/illustration.png';
// import Image from './Image.js'
// import Content from './Content.js'
import Button from './Button.js'
// import Tag from './Tag.js'
import {Tag, H1, P, Image} from './styles/Element.style.js'
import {CardContainer, ContentContainer, ButtonContainer} from './styles/Container.style.js'
import {StyleTitle} from './styles/Custom.style.js'

// import Title from './Title.js'

const Card = () =>{
    return (
        <CardContainer>
            <ContentContainer>
                <Tag bg="#4361ee" >EXCLUSIVE</Tag>
                <H1>
                    <StyleTitle text='React Style Component' color='red' />
                </H1>
                <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh
                </P>
                <ButtonContainer>
                    <Button link="https://google.com" text="my name is himel" />                
                    <Button link="https://google.com" text="my name is himel" />                
                </ButtonContainer>
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}

export default Card;