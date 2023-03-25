import React,{useState} from "react";

const ClickCounter = () => {
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
            <div>
                <button onClick={counterClickIncrementHandler} >Cliked {countData.counter} Increment times</button> &nbsp;
                <button onClick={counterClickDecrementHandler} >Cliked {countData.counter} Decrement times</button>
            </div>
        </>
    );
}

export default ClickCounter;