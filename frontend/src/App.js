
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn';
import Addbook from './components/Addbook/Addbook';
import EditBook from './components/EditBook/EditBook';
import BookRecords from './components/BookRecords/BookRecords';


function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<LogIn/>} ></Route>
        <Route path='/signup' element={<Register/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/addbook' element={<Addbook/>} ></Route>
        <Route path='/editbook' element={<EditBook/>} ></Route>
        <Route path='/bookrecords' element={<BookRecords/>} ></Route>
      </Routes>
      </BrowserRouter>

  
    </div>
  );
}

export default App;
