import React from "react";

const ExpenceFilter = (props) =>{

    const selectYearDropdownHandler = (e) =>{
        props.onChangeSelectFilter(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
        <div className='expences_filter_section'>
            <div className='expences_filter_section_inner'>
                <div className='card m-1'>
                    <div className='card-body row'>
                       <div className='col-md-6 offset-6'>
                            <div className="form-group">
                                <label >Filter By Year</label>
                                <select value={props.selectYear} onChange={selectYearDropdownHandler} className="form-control" >
                       
                           
                                    <option value="2021" >2021</option>
                                    <option value="2022" >2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                </select>
                            </div>
                       </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ExpenceFilter;