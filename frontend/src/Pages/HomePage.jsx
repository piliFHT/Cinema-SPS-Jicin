import {React} from "react";
import "../App.scss";
import HomeCom from "../Components/HomeComp";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {

  return (
    <>
    <Header/>
      <HomeCom/>
      <Footer/>
    </>
  )
}
export default Home;