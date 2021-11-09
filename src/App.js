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
import Pagenotfound from "./components/Pagenotfound";
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
            <Ai title="Artificial Intelligence" />
          </Route>
          <Route exact path="/software-development">
            <Softwaredevelopment title="Software Development" />
          </Route>
          <Route exact path="/data-analysis">
            <DataAnalysis title="Data Analysis" />
          </Route>
          <Route exact path="/mobile-app-development">
            <MobileApp title="Mobile App Development" />
          </Route>
          <Route exact path="/seo">
            <Seo title="Search Engine Optimization" />
          </Route>
          <Route exact path="/digital-marketing">
            <DigitalMarket title="Digital Marketing" />
          </Route>
          <Route exact path="/logo-design">
            <Logodesign title="Logo Design" />
          </Route>
          <Route exact path="/broucher-flyer">
            <Broucher title="Broucher & Flyer" />
          </Route>
          <Route exact path="/web-development">
            <WebDevelopment title="Web Development" />
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
          <Route path="*">
            <Pagenotfound title="404 Page" /> 

          </Route>

        </Switch>
        
        
        <Footer/>
      
      </div>

    </Router>
    
  );
}

export default App;
