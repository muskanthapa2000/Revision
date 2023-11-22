import Navbar from "./Components/Navbar";
import {BrowserRouter} from 'react-router-dom'
import MainRoutes from "./MainRoutes";
function App() {
  // DO NOT CHANGE/MODIFY this app-structure here
  return (
    <div data-testid="notes-app">
      {/* import and show Navbar and MainRoutes here */}    
      <BrowserRouter>
        <Navbar/> 
        <MainRoutes/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
