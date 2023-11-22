import {Routes , Route} from 'react-router-dom'
import { ViewNotes } from './Pages/ViewNotes';
import { AddNote } from './Pages/AddNote';

const MainRoutes = () => {
  return (
    <div>
{/* Add routes here for "/" for "ViewNotes" and "/addnote" for "AddNote" */}
      <Routes>
        <Route path="/" element={<ViewNotes/>}></Route>
        <Route path='/addnote' element={<AddNote/>}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
