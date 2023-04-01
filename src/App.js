import React, { useState } from 'react';

import './App.css';

function App() {

  const [entries, setEntries] = useState([{itemNumber:"8675309", weight:"5500", usd:"4024.37"}, {itemNumber:"954001", weight:"700", usd:"472.11"}, {itemNumber:"19340002", weight:"12978", usd:"6845.09"}])

  function addNewEntry(entry){
    let tempEntries =[...entries, entry];
 
    setEntries(tempEntries);
  }
  return(
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-6'>
          <div className='border-box'>
        <AddPost addNewEntryProperty={addNewEntry} />
          </div>
        </div>
        <div className='col-lg-6'>
          <div className='border-box'>
      <DisplayPost parentEntries={entries} />
      </div>
      </div>
      </div>
     </div>
  
  );
}

export default App;