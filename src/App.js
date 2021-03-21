import React from 'react'; 
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import SobreM from "./components/pages/SobreM"; 
import Portfolio from "./components/pages/Portfolio";
import Modelagem from "./components/pages/Modelagem";
import Computacao from "./components/pages/Computacao";
import Contato from "./components/pages/Contato";
import Pythoncrud from "./components/portfolio/Pythoncrud";  
import Model1 from "./components/Modelagem3D/Model1";
 


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <div>
            <ScrollToTop />
            <Navbar />
            <Route path="/SobreM" component={SobreM} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Modelagem" component={Modelagem} />
            <Route path="/Computacao" component={Computacao} />
            <Route path="/Contato" component={Contato} />
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