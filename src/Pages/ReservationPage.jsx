import { React } from "react";
import "../App.scss";
import HomeCom from "../Components/HomeComp";
import ReservationComp from "../Components/Reservation";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Reservation() {
  return (
    <>
      <Header />
      <ReservationComp />
      <Footer />
    </>
  );
}
export default Reservation;
