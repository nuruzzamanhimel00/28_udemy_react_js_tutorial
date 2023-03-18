import React from "react";
import Button from '../Ui/Button/Button.js'

const FormSection = () =>{
    return (
        <>
        <div className='form-section'>
            <div className='card'>
            <div className='card-body'>
                <form>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control"/>
                
                </div>
                <div className="form-group">
                    <label >age</label>
                    <input type="number" className="form-control" />
                </div>
                
                <Button />
                </form>
            </div>
            </div>
        </div>
        </>
    );
}

export default FormSection;