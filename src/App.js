import "./App.css";
import Header from "./Header";
import Search from "./Search";
import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router-dom"
import Home from './Home'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/search/:searchTerm' element={<Search/>} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
