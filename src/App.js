
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';

import Home from './Components/Home';
import Details from './Components/Details';
import Error from './Components/Error';
import Update from './Components/Update';
function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/update" element={<Update/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
