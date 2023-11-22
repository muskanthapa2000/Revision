import React from "react";
import {useState} from 'react';

export const NoteCard = ({e}) => {
  const [toggle , setToggle] = useState(true);
  
  return (
    <div data-testid="note-card">
      {/* Add title and description of the note in h3 and p tag respectively */}
      <h3>{e.title}</h3>
      <p>{e.description}</p>      
      <button>
        Delete
      </button>
      {/* The button should be changed to Edit or Cancel Edit */}
      <button onClick={()=>{setToggle(!toggle)}}>
        {toggle ? "Edit" : "Cancel Edit"}
      </button>
      {/* The below div should be visible only when some click on Edit and after submitting the form the data should be updated on DOM as well as redux store.
      1. Make a patch request the update
      2. After making patch request update the all the notes in the redux store by making get request*/}
      {
        toggle ? " " : 
      
        <div data-testid="edit-note">
          <form>
            <label>Title</label>
            <input           
              data-testid="title-input"
              placeholder="Enter Title"           
            ></input>
            <label>Description</label>
            <input
              placeholder="Enter Description"            
              data-testid="description-input"           
            ></input>
            <input type="submit"></input>
          </form>
        </div>  
      }   
    </div>
  );
};
