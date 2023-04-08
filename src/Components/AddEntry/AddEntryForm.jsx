import React, { useState } from 'react';
import './AddEntryForm.css';



const AddEntryForm = (props) => {

    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('')
    const [usd, setUSD] =useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
      }
      const handleSearch = (event) => {
        event.preventDefault();
        // Your search logic(info) goes here
      }

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            weight: weight,
            date: date,
            usd : usd,
            
            
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    
    return ( 
        <form onSubmit={handleSubmit} className='form-grid'>
            <div className = 'form-group'>
                <label>Weight</label>
                <input type='number' className="form-control" value = {weight} onChange ={(event)=> setWeight(parseFloat(event.target.value))}/>
            </div>
            <div className ='form-group'>
                <label>Date</label>
                <input type='date' value={date} class="form-control" onChange ={(event)=> setDate(event.target.value)}/>
            </div>
            <div className='form-group'>
                <label>USD</label>
                <input type='usd' value={usd} class="form-control" onChange={(event)=> setUSD(event.target.value)}/>

            </div>
            <div>
                <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <button type ='submit'  class="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
        </form>
        
     );
}
 
export default AddEntryForm;