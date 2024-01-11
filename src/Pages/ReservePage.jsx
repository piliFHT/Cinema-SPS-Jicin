import { React } from "react";
import "../App.scss";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ResSel from "../Components/Reserve";

function ResPag() {
  return (
    <>
      <Header />
      <ResSel/>
      <Footer />
    </>
  );
}
export default ResPag;
