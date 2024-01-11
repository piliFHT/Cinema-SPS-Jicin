import React, { useState } from "react";
import "../App.scss";
import Dropdown from "react-bootstrap/Dropdown";
import {Route } from "react-router-dom";
import Home from "../Pages/HomePage";

function Header() {
  return (
    <>
      <div className="container-fluid text-start sticky-top hder">
         
        <div className="container text-start">
        <Dropdown>
            <Dropdown.Toggle variant="nigger" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/home">Program</Dropdown.Item>
              <Dropdown.Item href="/reserve">Rezervace</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        </div>
    </>
  );
}

export default Header;
