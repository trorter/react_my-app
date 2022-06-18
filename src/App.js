import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import store from "./redux/state";

const App = () => {

  return (
    <Router>
      <div className={"app-wrapper"}>
        <Header/>
        <Navbar/>
        <div className={"app-wrapper-content "}>
          <Routes>
            <Route exact path="/profile" element={<Profile profile={store.getState().profilePage} dispatch={store.dispatch.bind(store)} />} />
            <Route path="/dialogs/*" element={<Dialogs dialogs={store.getState().dialogPage.dialogs} messages={store.getState().dialogPage.messages} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
