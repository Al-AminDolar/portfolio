import "./App.css";
import Navbar from "./component/nav/Navbar.jsx";
import Caurosel from "./component/main/Caurosel";
import Main_page from "./component/main/Main_page";
import Blogs from "./component/main/Blogs";
import Footer from "./component/main/Footer";

function App() {
  return (
    <div className="bg-blueGray-900">
      <Navbar />
      <Main_page />

      <Caurosel />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
