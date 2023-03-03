
const Title = (prop) => {
    console.log(prop.className);
    return (
        <span className={prop.className} >{prop.text}</span>
    )
}
export default Title;