import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/MainMenu/About";
import Contacts from "./Components/MainMenu/Contacts";
import CatJavaScript from "./Components/Category/CatJavaScript"
import CatTypeScript from "./Components/Category/CatTypeScript"
import CatReact from "./Components/Category/CatReact"
import CatNodeJS from "./Components/Category/CatNodeJS"
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

    <Router>
    <Header />
    <Navigation />
      <Routes>
        <Route exat path="/" element={<Main/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        <Route path="javascript" element={<CatJavaScript/>}/>
        <Route path="react" element={<CatReact/>}/>
        <Route path="typescript" element={<CatTypeScript/>}/>
        <Route path="nodejs" element={<CatNodeJS/>}/>

      </Routes>
    </Router>

    <Footer />
    </>
  );
}

export default App;
