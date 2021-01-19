import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
      </main>
    </div>
  );
}

export default App;
