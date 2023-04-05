import React, { Component } from 'react';
import './App.css';
import Display from './Display/AddDisplay/AddDisplay';
import Display from './Display/Search/Search';
import Display from './Display/Display';
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);

        
        
        this.state = {
           items: [],
        }
    }

    componentDidMount = () => {
        this.getAllItems();
    }

    getAllItems = async () => {
        let response = await axios.get('http://127.0.0.1:8000/api/inventory_data/')
        this.setState({
            items : response.data
        });
        
    }

    sortItemsByDecending = () => {
        this.setState({items: this.state.items.sort((1, -1))});
    }


    deleteItem = async (songId) => {
        let response = await axios.delete('http://127.0.0.1:8000/api/inventory_data/' + itemId + '/')
        this.getAllItems(); 
        return response.status; 
         
    }

    createItem = async (newSong) => {
        let response = await axios.post('http://127.0.0.1:8000/api/inventory_data/', newItem)
        this.getAllItems(); 
        return response.status; 
         
    }

    render() {
        return (
            <div className="container-fluid">
                <TableHeader sortByItem_Id={this.sortByItem_Id}/>
                
            </div>
        )
    }
}

export default App;