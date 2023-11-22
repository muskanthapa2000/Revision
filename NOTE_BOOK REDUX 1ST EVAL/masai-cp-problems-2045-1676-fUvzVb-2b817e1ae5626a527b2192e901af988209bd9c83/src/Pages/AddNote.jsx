import React from "react";


export const AddNote = () => {

  return (
    <div data-testid="add-note">
      <h1>Add Your Note</h1>
      <div>
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
    </div>
  );
};
