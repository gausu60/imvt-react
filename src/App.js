import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Header from './components/Header';
import Info from './components/Info';
import Services from './components/Services';
import Contact from './components/Contact';
import WebDevelopment from "./components/Webdevelopment";
import Logodesign from "./components/Logodesign";
import Broucher from "./components/Broucher";
import DigitalMarket from "./components/DigitalMarket";
import Seo from "./components/Seo";
import MobileApp from "./components/MobileApp";
import DataAnalysis from "./components/DataAnalysis";
import Softwaredevelopment from "./components/Softwaredevelopment";
import Ai from "./components/Ai";
import About from "./components/About";
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/about-us">
            <About />
          </Route>
          <Route exact path="/AI-Machine-Learning">
            <Ai />
          </Route>
          <Route exact path="/software-development">
            <Softwaredevelopment />
          </Route>
          <Route exact path="/data-analysis">
            <DataAnalysis />
          </Route>
          <Route exact path="/mobile-app-development">
            <MobileApp />
          </Route>
          <Route exact path="/seo">
            <Seo />
          </Route>
          <Route exact path="/digital-marketing">
            <DigitalMarket />
          </Route>
          <Route exact path="/logo-design">
            <Logodesign />
          </Route>
          <Route exact path="/broucher-flyer">
            <Broucher />
          </Route>
          <Route exact path="/web-development">
            <WebDevelopment />
          </Route>
          <Route exact path="/contact-us">
            <Contact />

          </Route>
          <Route exact path="/">
            <Banner/>
            <Services/>
            <Goals/>
            <Info/>

          </Route>

        </Switch>
        
        
        <Footer/>
      
      </div>

    </Router>
    
  );
}

export default App;
