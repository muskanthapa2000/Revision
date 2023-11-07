import logo from './logo.svg';
import './App.css';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Product from './components/pages/Product';
import AddProducts from './components/pages/AddProduct';
import Navbar from './components/pages/Navbar';
import AppRought from './components/routess/AppRought';


function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
    {/* <Signup/>
    <Login/>
    <Product/>
    <AddProducts/> */}

    <Navbar/>
    <AppRought/>
    </div>
  );
}

export default App;
