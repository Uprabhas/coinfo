import logo from './logo.svg';
import './App.css';
import Navbar from './shared/Navbar/navbar';
import Footer from './shared/Footer/footer';


function App() {
  return (
    <div className="App">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
