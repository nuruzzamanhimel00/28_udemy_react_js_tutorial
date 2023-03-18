import React from "react";
import ListItem from '../ListItem/ListItem.js'

const ListGroup = () =>{
    return (
        <>
         <div className='list-section mt-4'>
            <div className='card'>
                  <div className='card-body'>
                    <ul className="list-group">
                      
                      <ListItem />
                      <ListItem />
                      <ListItem />
                      <ListItem />
                     
            
                    </ul>
                </div>
              </div>
            
          </div>
        </>
    );
}

export default ListGroup;