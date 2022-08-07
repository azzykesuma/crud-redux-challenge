import React from 'react';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import './App.css';
import Create from './pages/Create';
import Detail from './pages/Detail';
import EditPost from './pages/EditPost';
import Home from './pages/Home';


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
