
import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Goals from './components/Goals';
import Header from './components/Header';
import Info from './components/Info';
import Services from './components/Services';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Services/>
      <Goals/>
      <Info/>
      <Footer/>
      
    </div>
  );
}

export default App;
