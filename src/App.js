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
import PortifolioHTMLCSSJS from "./components/portfolio/PortifolioHTMLCSSJS"
import PortifolioReactJS from "./components/portfolio/PortifolioReactJS"
import Html1 from "./components/portfolio/Html1";
import Tcc2020 from "./components/portfolio/Tcc2020";
import Model1 from "./components/Modelagem3D/Model1";
import Model2 from "./components/Modelagem3D/Model2";
import Model3 from "./components/Modelagem3D/Model3";
import Model4 from "./components/Modelagem3D/Model4";
import Model5 from "./components/Modelagem3D/Model5";
import Model6 from "./components/Modelagem3D/Model6";
import Model7 from "./components/Modelagem3D/Model7";
import Model8 from "./components/Modelagem3D/Model8";
import Model9 from "./components/Modelagem3D/Model9";


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
          <Route path="/PortifolioHTMLCSSJS" component={PortifolioHTMLCSSJS} />
          <Route path="/PortifolioReactJS" component={PortifolioReactJS} />
          <Route path="/Html1" component={Html1} />
          <Route path="/Tcc2020" component={Tcc2020} />
        </div>
        <div> 
          <Route path="/Model1" component={Model1} />
          <Route path="/Model2" component={Model2} />
          <Route path="/Model3" component={Model3} />
          <Route path="/Model4" component={Model4} />
          <Route path="/Model5" component={Model5} />
          <Route path="/Model6" component={Model6} />
          <Route path="/Model7" component={Model7} />
          <Route path="/Model8" component={Model8} />
          <Route path="/Model9" component={Model9} />
        </div> 
      </Router>
    </> 
  );
}

export default App;