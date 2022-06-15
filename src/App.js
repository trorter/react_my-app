import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = (props) => {

  return (
    <Router>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content "}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogs} messages={props.state.messages} />} />
            <Route exact path="/profile" element={<Profile posts={props.state.posts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
