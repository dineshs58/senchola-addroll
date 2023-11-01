import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './LoginandRegister/Login';
import Register from './LoginandRegister/Register';
import { Routes, Route } from 'react-router-dom';
import Home from './Home/Home';



function App() {
  return (
    <>
     
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
      </Routes> 
     
    </>
  );
}

export default App;
