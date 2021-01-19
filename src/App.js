import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

import Homescreen from "./Screens/Homescreen";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Homescreen />
    </>
  );
}

export default App;
