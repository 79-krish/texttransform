import './App.css';
import  Navbar from './components/Navbar';
import Footer from './components/Footer';
import Textform from './components/Textform';
import Index from './components/Index';
import About from './components/About';
function App() {
  return (
  <>

<Navbar title="Krishnal" link="services"/>
<div className="container">
<Textform heading="Enter the test to anlalyze"/>
<About ></About>
<Index></Index> 
</div>
<Footer/>

  </>
  );
}

export default App;
