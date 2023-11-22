import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [name , setName] = useState(true);
  const navigate = useNavigate();
  const {notes} = useSelector((store)=>store.notes)
  console.log(notes);
  const noteslength = notes.length;
  console.log(noteslength);

  const handleChange=()=>{
    setName(!name);
    
    if(name)
    {
      navigate('/')
    }else {
      navigate(`/addnote`)
    }
  }
  return (
    <div
      data-cy="navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 5px",
        background: "rgb(241, 233, 213)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1585435465945-bef5a93f8849?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fG5vdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          width="80px"
          style={{
            borderRadius: "10px 40px 40px 10px",
            marginRight: "2%",
          }}
          alt="logo"
        />
        <span
          style={{
            fontSize: "30px",
            fontWeight: "700",
            color: "rgb(216, 122, 0)",
            fontFamily: "cursive",
          }}
        >
          NoteBook
        </span>
      </div>
      <div style={{ textAlign: "center" }}>
        {/* The page name should be either "Notes" or "Add Notes" */}
        <p data-testid="page-name">
         {name ? "Notes" : "Add Notes"}
        </p>
      </div>
      {/* the total count should be updated on real time as Total Notes: {notesCount} */}
      <h3 data-cy="total-notes">Total Notes: {noteslength}</h3>
      {/* The button should have text content as "New Note+"(default) or "View Notes" and clicking on it should be direct us to respective page*/}
      <button
        data-cy="addnote-viewnotes-button"
        style={{
          fontFamily: "cursive",
          fontSize: "15px",
          fontWeight: "700",
          background: "rgb(245,175,1)",
          cursor: "pointer",
        }}
        onClick={handleChange}
      >
        {name ? "New Note+" : "View Notes"}
      </button>
    </div>
  );
};

export default Navbar;
