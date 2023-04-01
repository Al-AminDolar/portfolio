import "./App.css";
import Navbar from "./component/nav/Navbar.jsx";
import Caurosel from "./component/main/Caurosel";
import Main_page from "./component/main/Main_page";

function App() {
  return (
    <div className="bg-blueGray-900">
      <Navbar />
      <Main_page />

      <Caurosel />
    </div>
  );
}

export default App;
