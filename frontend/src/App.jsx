import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./Pages/HomePage";
import Warning from "./Components/warning";
import Reservation from "./Pages/ReservationPage";
import ResPag from "./Pages/ReservePage";


function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Warning/>}/>
          <Route path="/reservation" element={<Reservation/>}/>
          <Route path="*" element={<div><h2>error 404</h2></div>}/>
          <Route path="reserve" element={<ResPag/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
