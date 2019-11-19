import React, { Component } from "react";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <div id="header">
          <div className="container flex-center-between">
            <div id="logo">IndiHouse</div>
            <div id="menu">
              <ul id="menu-links" className="flex-center-between">
                <li>
                  <a href="#" className="menu-link">
                    Promo
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    Paket & Add On
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    Pusat Bantuan
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    Info Terkini
                  </a>
                </li>
                <li>
                  <a href="#" className="menu-link">
                    MyIndiHouse
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
