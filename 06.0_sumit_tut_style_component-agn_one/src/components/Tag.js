const Tag = (props) => {
    console.log(props);
    return (
        <>
           {/* // <span className="tag">{props.text}</span> */}
                <span className={props.bg}>{props.text}</span>
        </>
     
    );
}

export default Tag;