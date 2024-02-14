import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Posts from './Posts';
import Header from './header/Header';
import Comments from './Comments';
import Albums from './Albums';
import Photos from './Photos';
import Users from './Users';
import Todos from './Todos';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
        <Routes>
        <Route path='/' element={<Header/> } />
          <Route path='/Posts' element={<Posts/>} />
          <Route path='/Comments' element={<Comments/>} />
          <Route path='/Albums' element={<Albums/>} />
          <Route path='/Photos' element={<Photos/>} />
          <Route path='/Comments' element={<Comments/>} />
          <Route path='/Todos' element={<Todos/>} />
          <Route path='/Users' element={<Users/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
