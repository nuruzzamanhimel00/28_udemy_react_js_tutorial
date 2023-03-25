import React from 'react';
import "./ExpencesFilter.css"

const ExpencesFilter = (props) =>{

    const dropDownChangeHandler = (e) =>{
        props.onChangeFilter(e.target.value);
        // console.log(e.target.value);
    }

    return (
        <div>
            <div className='expences_filter_section'>
                <div className='expences_filter_section_inner'>
                    <div className='card'>
                        <div className='card-body row'>
                           <div className='col-md-6 offset-6'>
                                <div className="form-group">
                                    <label >Filter By Year</label>
                                    <select value={props.selectedYear} onChange={dropDownChangeHandler}  className="form-control" >
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                        <option value="2020">2020</option>
                                        <option value="2021" >2021</option>
                                        <option value="2022" >2022</option>
                                        <option value="2023">2023</option>
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

export default ExpencesFilter;