import AddItem from "./AddDisplay/AddDisplay";
import TableHeader from "../TableHeader/TableHeader";
import { SearchForm } from "./Search/Search";
import React from "react";
import { useState } from "react";



const DisplayPost = (props) => {
    return (  
        <table>
        <thead>
          <tr>
            <th>Item Number</th>
            <th>Weight</th>
            <th>USD</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry,index) => {
            return (
              <tr key={index}>
                <td>{entry.itemNumber}</td>
                <li>
                <td>{entry.weight}</td>
                </li>
                <td>{entry.usd}</td>                
              </tr>
            );
          })}
        </tbody>
      </table>
    );
}
 
export default DisplayPost;