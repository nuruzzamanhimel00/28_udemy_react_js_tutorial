import nerdImage from '../assets/images/illustration.png';
// import Image from './Image.js'
// import Content from './Content.js'
import Button from './Button.js'
// import Tag from './Tag.js'

import {CardContainer, ContentContainer, ButtonContainer} from '../components/styles/Container.style.js'
import {TagCustomeStyle, TitleCustomeStyle} from './styles/Custom.style.js'
import {H1, P, Image} from './styles/Element.style.js'

// import Title from './Title.js'

const Card = () =>{
    return (
        <CardContainer>
            <ContentContainer>
                {/* <Tag text="EXCLUSIVE" ></Tag> */}
                <TagCustomeStyle text="EXCLUSIVE" bg="#4361ee" />
                <H1>
                    <TitleCustomeStyle color="red" man="himel" title="React js first course" />
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