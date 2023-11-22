import React from "react";
import { useSelector , useDispatch } from "react-redux";
import {useEffect} from 'react';
import { GET_DATA_SUCCESS } from "../Redux/AppReducer/action";
import { AddNote } from "./AddNote";
import { NoteCard } from "../Components/NoteCard";

export const ViewNotes = () => { 

  const {notes} = useSelector((store)=> store.notes);
  console.log(notes)
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(GET_DATA_SUCCESS())
  } , [])

  

  return (
    <div data-testid="viewnotes-container">
      <h1>View Notes</h1>
      <div data-testid="view-notes">
       {/* render all the notes by using NoteCard component */}
       {
          notes.map((e)=>{
          
               return (
              <NoteCard e = {e}/>
            )
            
           
          })
       }
                 
      </div>
    </div>
  );
};
