import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Explore from '../src/pages/explore'
import Pricing from "../src/pages/Pricing"
import Community from '../src/pages/Community'
import Realtor from '../src/pages/Realtor'

import Knowledgebase from "../src/pages/Knowledgebase"

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Register from "./pages/Register";

function App() {
  return (
    <div className="App ">
      <Header />
      <Menu />

      <Routes>

        <Route path="/" exact element={<Home />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/realtor" exact element={<Realtor />} />
        <Route path="/knowledgebase" exact element={<Knowledgebase />} />
        <Route path="/NotFound" exact element={<NotFound />} />
        <Route path="/login" exact element={<Login />} />
         <Route path="/register" exact element={<Register />} /> 
        <Route path="/About" exact element={<About />} />




      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;







