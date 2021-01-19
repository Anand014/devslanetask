import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Homescreen from "./Screens/Homescreen";

function App() {
  return (
    <>
      <Router>
        <div>
          <Route path="/" component={Navbar} />
          <Route path="/" component={Sidebar} />
          <Route path="/" component={Homescreen} />
        </div>
      </Router>
    </>
  );
}

export default App;
