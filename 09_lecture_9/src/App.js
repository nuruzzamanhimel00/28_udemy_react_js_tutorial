import React, { useState } from 'react';
// import './App.css'
import FormSection from './Components/FormSection/FormSection.js'
import ListGroup from './Components/ListGroup/ListGroup.js'

import {MainSection, MainSectionInner, ListSection} from './Style/Common.style.js'
import Card from './Components/Ui/Card/Card.js'

function App() {

  const [listData, setListData] = useState([]);

  const getListGroupIdHandler = (id) =>{
    let latestListData = listData.filter( (list)=>list.id !== id );
    setListData((prevData) =>{
      return [
        ...latestListData
      ]
    });
    // console.log("id",id);
  }

  let content = (  <div className='no-data-found text-center  mt-4'>
      <h3>No Data found...</h3>
    </div>);

  if(listData.length > 0){
    content = (
      
      <ListSection className='mt-4'> 
      {/* <ListSection className='list-section mt-4'>  */}
            <Card className={`card`}>
            {/* <div className='card'> */}
                  <div className='card-body'>
                  <ListGroup 
                  listData={listData} 
                  onGetListGroupId={getListGroupIdHandler}
                  />
                </div>
              </Card>
            
          </ListSection>
    ) ;
  }

  const setListInputHandler = (data) =>{
    setListData((prevData) =>{
     return [
      ...prevData,
      data
     ]
    });
    // console.log(data);
  }
  
  return (
    <div>
   
      {/* <div className='main-section'> */}
      <MainSection>
        <MainSectionInner>
         <FormSection onSetListInput={setListInputHandler} />
          {content}
          
        </MainSectionInner>
      </MainSection>
    </div>
  );
}

export default App;
