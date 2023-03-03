import nerdImage from '../assets/images/illustration.png';
// import Image from './Image.js'
// import Content from './Content.js'
import Button from './Button.js'
// import Tag from './Tag.js'
import {CardContainer, ContentContainer, ButtonContainer} from './styles/Container.styles.js'
import {Tag, H1, P, Image} from './styles/Elements.js'

// import Title from './Title.js'
import {StyledTitle} from './styles/Custom.style.js'

const Card = () =>{
    return (
        <CardContainer>
            <ContentContainer>
                <Tag background='#4361ee' >EXCLUSIVE</Tag>
                <H1>
                    {/* <Title text="React Style Component" /> */}
                    <StyledTitle text="React Style Component test" color="yellow" />
                </H1>
                <P>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh
                </P>
                <ButtonContainer>
                    <Button link="https://google.com" text="my name is himel" />                
                    <Button link="https://google.com" text="my name is himel" />                
                </ButtonContainer>
                {/* <div className='buttons'>
                    <Button link="https://google.com" text="my name is himel" />                
                    <Button link="https://google.com" text="my name is himel" />                
                </div> */}
            </ContentContainer>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </CardContainer>
    )
}

export default Card;