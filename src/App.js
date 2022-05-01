import React from 'react'; 
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/home";
import About from "./components/pages/about"; 
import Portfolio from "./components/pages/portfolio";
import Model from "./components/pages/model";
import Computer from "./components/pages/computer";
import Contact from "./components/pages/contact";
import Pythoncrud from "./components/portfolio/Pythoncrud";  
import Model1 from "./components/model3d/model";
 


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <div>
            <ScrollToTop />
            <Navbar />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/model" component={Model} />
            <Route path="/computer" component={Computer} />
            <Route path="/contact" component={Contact} />
          </div>
        </Switch>
        <div> 
            <Route path="/Pythoncrud" component={Pythoncrud} /> 
        </div>
        <div> 
            <Route path="/Model1" component={Model1} /> 
        </div> 
      </Router>
    </> 
  );
}

export default App;