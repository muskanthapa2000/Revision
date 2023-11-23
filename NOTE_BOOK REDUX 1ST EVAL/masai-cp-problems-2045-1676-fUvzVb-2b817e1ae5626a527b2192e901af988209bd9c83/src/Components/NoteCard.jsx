import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { DELETE_DATA_SUCCESS, EDIT_DATA_SUCCESS } from "../Redux/AppReducer/action";
import { useParams } from "react-router-dom";

export const NoteCard = ({e}) => {
  const [toggle , setToggle] = useState(true);
  const [data , setData] = useState({
    title : "",
    description : ""
  })
  const dispatch = useDispatch();
  // const {id} = useParams();
  // console.log(id);
 

  const handleDelete=(id)=>{
      dispatch(DELETE_DATA_SUCCESS(id))
  }

  const hanldeChange =(e)=>{
    setData({
      ...data , 
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit =(e , id)=>{
    e.preventDefault();
    dispatch(EDIT_DATA_SUCCESS(data , id))
  }
  
  return (
    <div data-testid="note-card">
      {/* Add title and description of the note in h3 and p tag respectively */}
      <h3>{e.title}</h3>
      <p>{e.description}</p>      
      <button onClick={()=>{handleDelete(e.id)}}>
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
          <form onSubmit={()=>handleSubmit(e.id)}>
            <label>Title</label>
            <input           
              data-testid="title-input"
              placeholder="Enter Title" 
              name = "title"
              value={data.title}   
              onChange={hanldeChange}       
            ></input>
            <label>Description</label>
            <input
              placeholder="Enter Description"            
              data-testid="description-input"     
              name = "description"  
              value={data.description}    
              onChange={hanldeChange}
            ></input>
            <input type="submit"></input>
          </form>
        </div>  
      }   
    </div>
  );
};
