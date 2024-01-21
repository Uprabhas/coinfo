import "./App.css";
import Navbar from "./shared/Navbar/navbar";
import Footer from "./shared/Footer/footer";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/authentication/login/Login";
import Registration from "./pages/authentication/Registration/Registration";

function App() {
  return (
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
          <Route path="/registration" Component={Registration}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
