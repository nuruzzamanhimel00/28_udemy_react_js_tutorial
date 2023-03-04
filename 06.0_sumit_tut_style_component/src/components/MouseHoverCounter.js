import React,{useState} from "react";

const MouseHoverCounter = () => {
    const [countData, setCountData] = useState({
        counter: 0
    })
    const counterClickIncrementHandler = () =>{
        setCountData((prevData) => {
            return {
                counter: prevData.counter + 1
            }
        });
    }
    const counterClickDecrementHandler = () =>{
        setCountData((prevData) => {
            return {
                counter: prevData.counter - 1
            }
        });
    }
    return (
        <>
            <div style={
                {
                    display:'flex'
                }
            }>
                <h1 onMouseOver={counterClickIncrementHandler} >Mouse Over {countData.counter} Increment times</h1> &nbsp;
                <h1 onMouseOver={counterClickDecrementHandler} >Mouse Over {countData.counter} Decrement times</h1>
            </div>
        </>
    );
}

export default MouseHoverCounter;