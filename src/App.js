import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import Home from "./pages/Home";
import Menu from "./pages/Menu";

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
     <Routes>
        {/* <Route path="/" exact element={<Home/>} /> */}
      
        </Routes>
    </div>
  );
}

export default App;
