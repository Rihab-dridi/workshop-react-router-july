import profiles from "./components/profileList";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Profiles from "./components/profiles";
import AboutUs from "./components/aboutUs";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile";
import User from "./components/user";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/Profiles" exact component={Profiles} />
        <Route path="/Profiles/:id" component={User} />
      </Router>
    </div>
  );
}

export default App;
//step1: install react router dom
// step2: import ...
//step3: wrap the app with the router 
//step 4: define the component path using route 
///////the link 
