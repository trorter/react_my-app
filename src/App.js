import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = (props) => {

  let posts = [
    {id: 1, message: 'It\'s my fist post', likesCount: '100'},
    {id: 2, message: 'Hi! How are you?', likesCount: '11'},
    {id: 3, message: 'Stub / mock post', likesCount: '12'},
    {id: 4, message: 'NEW ONE', likesCount: '22'}
  ]

  let dialogs = [
    {id: 1, name: 'Andrew'},
    {id: 2, name: 'Nick'},
    {id: 3, name: 'Sally'},
    {id: 4, name: 'Sarah'},
  ]

  let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'What\'s up?'},
    {id: 3, message: 'How is your studying?'}
  ]

  return (
    <Router>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content "}>
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route exact path="/profile" element={<Profile posts={posts} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
