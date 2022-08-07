import React from 'react';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import './App.css';
import Create from './Pages/Create';
import Detail from './Pages/Detail';
import EditPost from './Pages/EditPost';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditPost />}  /> 
          <Route path='/detail/:id' element={<Detail />}  /> 
          <Route path='/create' element={<Create />}  /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
