import React, {useState} from "react";

const AddDisplay = (props) => {

    const [itemNumber, setName]=useState('');
    const [USD, setUSD] = useState('');
    const [weight, setWeight] = useState('');
    
    
    function handleSubmit(event){
        event.preventDefault();
        
        let newEntry = {
           itemNumber : itemNumber,
           usd : usd,
           weight: weight,
           post: post
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Item Number</label>
            <input type='itemNumber'value = {itemNumber} onChange={(event) => setItemNumber(event.target.value)} />
            <label>USD</label>
            <input type='usd' value = {USD} onChange={(event) => setUSD(event.target.value) } />
            <label> Weight </label>
            <input type ='weight' value ={weight} onChange={(event) => setWeight(event.target.value)} />
            <button type = 'submit'>Save</button>

        </form>
    );
}

export default AddDisplay;