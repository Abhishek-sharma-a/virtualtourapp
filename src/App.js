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


function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/explore" exact element={<Explore />} />
        <Route path="/community" exact element={<Community />} />
        <Route path="/pricing" exact element={<Pricing />} />
        <Route path="/realtor" exact element={<Realtor />} />
        <Route path="/knowledgebase" exact element={<Knowledgebase />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;







