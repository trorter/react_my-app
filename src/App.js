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
            <Route exact path="/profile" element={<Profile posts={props.state.profilePage.posts} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.dialogPage.dialogs} messages={props.state.dialogPage.messages} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
