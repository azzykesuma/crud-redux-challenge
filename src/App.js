import React from 'react';
import { Routes, Route , HashRouter} from 'react-router-dom';
import './App.css';
import AddPost from './pages/AddPost';
import Create from './pages/Create';
import Detail from './pages/Detail';
import EditPost from './pages/EditPost';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/edit/:id' element={<EditPost />}  /> 
          <Route path='/add' element={<AddPost />}  /> 
          <Route path='/detail/:id' element={<Detail />}  /> 
          <Route path='/create' element={<Create />}  /> 
      </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
