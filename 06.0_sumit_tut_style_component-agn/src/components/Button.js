
const Button = (props) =>{
    return (
        <a href={props.link} target="_blank" rel="noreferrer">
        {props.text}
    </a>
    );
}

export default Button;