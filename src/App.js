import {BrowserRouter, Routes, Route, Navlink} from "react-router-dom"
import './App.css';
import Create from './pages/Create/Create'
import Home from './pages/Home/Home'
import Recipe from './pages/Recipe/Recipe'
import Search from './pages/Search/Search'


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
     <Routes path='/'  element={<Home/>}/>
     <Routes path='create'  element={<Create/>}/>
     <Routes path='search'  element={<Search/>}/>
     <Routes path='recipes/:id'  element={<Recipe/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
 