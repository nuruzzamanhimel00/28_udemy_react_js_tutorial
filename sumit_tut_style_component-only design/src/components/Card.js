import nerdImage from '../assets/images/illustration.png';
import Image from './Image.js'
import Content from './Content.js'
import Button from './Button.js'
import Tag from './Tag.js'
const Card = () =>{
    return (
        <div className="card">
            <Content>
                <Tag text="EXCLUSIVE" ></Tag>
                <h1>React Style Component</h1>
                <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, wh
                </p>
                <div className="buttons">
                    <Button link="https://google.com" text="my name is himel" />                
                    <Button link="https://google.com" text="my name is himel" />                
                </div>
            </Content>
            <Image src={nerdImage} alt="Nerd" width="300px" />
        </div>
    )
}

export default Card;