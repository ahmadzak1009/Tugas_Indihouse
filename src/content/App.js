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

        <div id="content" className="container">
          <div id="banner-1">
            Berlangganan IndiHouse bisa dapat internet cepat, nelpon rumah
            sepuasnya dan nonton beragam konten terbaik di layar TV interaktif
          </div>
        </div>
      </div>
    );
  }
}

export default App;
