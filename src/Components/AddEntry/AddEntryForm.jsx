import React, { useState } from 'react';
import './AddEntryForm.css';



const AddEntryForm = (props) => {
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState('')
    const [usd, setUSD] =useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [totalUSD, setTotalUSD] = useState(0);
    const [totalWeight, setTotalWeight] = useState(0);
    const [entries, setEntries] = useState([]);

    const handleSearch = (event) => {
        event.preventDefault();
        // Your search logic(info) goes here
        const searchUSD = parseFloat(searchTerm);
        const foundEntry = entries.find(entry => entry.usd === searchUSD);
        if (foundEntry) {
            console.log(`Found entry with USD ${searchUSD}:`, foundEntry);
        } else {
            console.log(`No entry found with USD ${searchUSD}`);
        }
      }

    const handleDelete = (index) => {
        const entryToDelete = entries[index];
        setTotalUSD(totalUSD - parseFloat(entryToDelete.usd));
        setTotalWeight(totalWeight - parseFloat(entryToDelete.weight));
        setEntries(entries.filter((entry, i) => i !== index));
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
        setTotalUSD(totalUSD + parseFloat(usd));
        setTotalWeight(totalWeight + parseFloat(weight));
        setEntries([...entries, newEntry]);
    }
    
    return ( 
        <>
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
                    <input type="text" placeholder="Search" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <button type ='submit'  class="btn btn-primary" style={{'margin-top': '1em'}}>Add</button>
            </form>
            {entries.map((entry, index) => (
                <div key={index}>
                    <p>Weight: {entry.weight}, Date: {entry.date}, USD: {entry.usd}</p>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
            ))}
            <p>Total Weight: {totalWeight}</p>
            <p>Total USD : {totalUSD}</p>
            
         </>
     );
}
 
export default AddEntryForm;











