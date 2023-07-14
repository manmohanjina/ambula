import logo from "./logo.svg";
import "./App.css";
import AllRoutes from "./allRoutes/AllRoutes";
import Navbar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
