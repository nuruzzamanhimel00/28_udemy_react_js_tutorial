import React from 'react';
import './App.css'
import FormSection from './Components/FormSection/FormSection.js'
import ListGroup from './Components/ListGroup/ListGroup.js'

function App() {
  return (
    <div>
      <div className='main-section'>
        <div className='main-section-inner'>
         <FormSection />

        <ListGroup />
         
        </div>
      </div>
    </div>
  );
}

export default App;
