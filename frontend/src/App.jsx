import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";
import Sidebar from "./layouts/Sidebar";

import './App.css'

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/library" element = {<Library/>}/>
            <Route path = "/search" element = {<Search/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
