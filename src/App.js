import { Route, Routes } from "react-router-dom";
import './App.css';
import Footer from "./pages/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" exact element={<Home/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
