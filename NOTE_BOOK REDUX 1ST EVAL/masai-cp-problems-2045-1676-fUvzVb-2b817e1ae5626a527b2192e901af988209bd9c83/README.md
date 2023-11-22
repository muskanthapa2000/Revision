## React-Redux-Note-Book

#### Problem Statement

## Submission Instructions [Please note]

## Maximum Marks - 17

- The Submission should not contain spaces, for example,/rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to GitHub

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check Initial Redux Store Structure- 2 marks
 ✅ Check if the home page append with basic elements - 1 mark
 ✅ Check if able to display all the notes - 2 marks
 ✅ check if the edit form is visible only we click on edit, and does not exist if we click on cancel edit- 1 mark
 ✅ Check if able to edit the notes and updating on redux store and UI in real-time - 4 marks
 ✅ check deleting the note is working or not - 2 marks
 ✅ New Note+ button re-directing us to the addnote page and also text content of the button is changing as per the problem statement, and again clicking on it reverts to the homepage - 2 marks
 ✅ Able to access the addnote page and add new note - 2 marks

```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
- `npm install --engine-strict`
- `npm start`
- `npm run server` -> to start the JSON-server
- **_Note_**:

1. Libraries need to be installed by yourself
2. Make sure that the JSON-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. You need to restart the react server once the env file is updated.
5. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the JSON-server URL
6. use only `axios` to make API call

#### Steps

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to perform CRUD operation.

### Understanding Component Structure

- src
  - Components
    - Navbar.jsx
    - NoteCard.jsx
  - Pages
    - AddNote.jsx
    - ViewNotes.jsx
  - MainRoutes.JSX
  - Redux

### Redux

- AppReducer
- store

initial state

```
{
  notes: [],
  view: "View Notes"
}
```

- The notes should be updated with the latest data when the user visits the home page.
- The `view` state in the Redux store should be updated based on the user's interactions with the app.
- The view by default will be `View Notes` as we visit the homepage which is basically a `ViewNotes.jsx` when we tried to redirect to another page, the state of view in the redux store should also get updated to `Add Notes`
- for ex:- If I am in the Home page(`ViewNotes.jsx` will be visible) the view should be `View Notes`. When I click on the `New Note+` button on the navbar the redux store view state should be updated to `Add Notes`
- All the state management activities should be handled in redux only. By dispatching the appropriate action as required.
- You are free to create any action types as per the requirement.

**NOTE**: Redux is mandatory for this application and uses the states of the redux store to Update the Data on DOM.

1. DO NOT change the initial state in the reducer file.
2. Some of the boilerplates are provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
3. Make sure Redux is connected with your React application properly, and you have access to the Redux store data.

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial notes data. **Do not overwrite/modify this data**

### MainRoutes.jsx

- Path: “/”, Page: ViewNotes.jsx (This is our Home Page)
- Path: “/addnote”, Page: AddNote.jsx (Where user will be able to add note)

### Components
<div>
<img width="100%" src="https://i.imgur.com/tXkcTbW.png">
</div>

#### Navbar.jsx

- The Navbar component should be visible on every page of the application.
- The Navbar should have three features:
  1. The name of the page that the user is currently viewing should be displayed in a `p` tag with `data-testid="page-name"`.
      - The name should be either "Notes" or "Add Notes" depending on whether the user is viewing their notes or adding a new note.
      - When the user is viewing their notes, the text should be `Notes`.
      - When the user is adding a new note, the text should be `Add Notes`.
  3. The total number of notes should be displayed in an `h3` tag with `data-cy="total-notes"` and textContent should be `Total Notes: 6`. where 6 is the count of notes and it should be updated in real-time.
- The Navbar should also contain a button in the top-right corner that enables the user to switch between viewing their notes and adding a new note.
  - The button should display `New Note+` by default.
  - Clicking the button should redirect the user to the AddNote page (`/addnote`) and change the text to `View Notes`.
  - Clicking the button again should redirect the user back to the main page (`/`) and change the text back to `New Note+`.

#### NoteCard.jsx

<div>
<img width="100%" src="https://i.imgur.com/MMk9JmJ.png">
</div>

- This component will display a note's `title` and `description`.
- It also contains two buttons:
  - `Delete` (which will delete the note)
  - `Edit` (when clicked, it will display div with `data-testid="edit-note" that includes a form with input fields pre-filled with the note's title and description, which can be edited)
- When the `Edit` button is clicked, its text content should change to `Cancel Edit`, and clicking it again should remove the form (i.e., the div with `data-testid="edit-note"` should not exist on the DOM).
- When the form is submitted, it should send a `patch` request to update the note on the UI and in the Redux store, and the div with `data-testid="edit-note"` for editing should not exist on the DOM, and the button text should change back to `Edit`.
- Whenever you are deleting or editing the note appropriate "DELETE" and "PATCH" requests should be made to the endpoint and then you need to make a "GET" request and update the notes state of the redux store. Then your web application will be updated as we are using redux.

### Pages

#### ViewNotes

- The notes data should be updated with the latest data of db.json in the redux store and on the UI, whenever this component is rendered.
- The data in the redux store should be the same as the initial state provided in the redux store, before rendering this component.
- Render all the notes present in db.json using the `NoteCard` component.
- Display all the notes under the div with `data-testid="viewnotes"` provided in the boilerplate.
- As mentioned in the NoteCard.jsx the user should be able `delete` and `edit` the note and should be updated on real-time.
- The Notes should be visible based on the order in db.json, i.e the latest note will appear at the end of the list.

#### AddNote.jsx
<div>
<img width="100%" src="https://i.imgur.com/zKF43MV.png">
</div>

- This page usually consists of a form where the user will be able to enter the title and description of the note. Upon submitting the form, a POST request should be made to /notes. The note data should be added to both the Redux store and db.json, and the count of total notes should be updated in real-time.
- After successful submission, the user should not be redirected to the ViewNotes page
- Additionally, the total Notes count in the Navbar should also be updated.

### Note:- When ever user edit, add or delete the note, we should also make sure that the data should be updated in redux store and UI by making appropriate requests.

### General Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, and removing them may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the JSON file.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
