import "./App.css";
import Navbar from "./shared/Navbar/navbar";
import Footer from "./shared/Footer/footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login/Login";
import Watchlist from "./pages/Watchlist/Watchlist";
import Registration from "./pages/authentication/Registration/Registration"
import Coindetail from "./pages/Coinmodel/coin-detail/Coindetail";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { GlobalProvider } from "./Context/context1";




function App() {
  return (
    <GlobalProvider>
    <Router>
      <div className="App">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/login" Component={Login}/>
          <Route path="/watchlist" Component={Watchlist}/>
          <Route path="/reg" Component={Registration}/>
          <Route path='/:id' Component={Coindetail}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    </GlobalProvider>
  );
}

export default App;
