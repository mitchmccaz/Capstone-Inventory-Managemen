import React, {useState} from "react";

const Addweight = (props) => {

    const [item_id, setitem_id]=useState('');
    const [usd, setusd] = useState('');
    const [weight, setweight] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        
        let newEntry = {
           item_id : item_id,
           weight: weight,
           usd: usd 
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry)
    }
    return (  
        <form onSubmit={handleSubmit}>
            <label>Item ID</label>
            <input type='item_id'value = {item_id} onChange={(event) => setitem_id(event.target.value)} />
            <label>Weight</label>
            <input type='weight' value = {weight} onChange={(event) => setweight(event.target.value) } />
            <label> USD </label>
            <input type ='usd' value ={usd} onChange={(event) => setusd(event.target.value)} />
            <button type = 'submit'>Confirm</button>

        </form>
    );
}

export default Addweight;