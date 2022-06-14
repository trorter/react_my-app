import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content "}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs/>}/>
            <Route exact path="/profile" element={<Profile/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
