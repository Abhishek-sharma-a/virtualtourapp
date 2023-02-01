import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
     <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="*" element={<NotFound/>} />
      
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
