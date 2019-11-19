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

          <div id="slider">
            <div id="slider-1">
              <img src={require("../images/indihouse/slider1.jpg")} alt="" />
            </div>

            <div id="paket">
              <div className="paket-item paket-premium">
                <p>Berlangganan IndiHouse Paket Premium</p>
                <button>Lihat Detail</button>
              </div>
              <div className="paket-item paket-gamer">
                <p>Berlangganan IndiHouse Paket Gamer</p>
                <button>Lihat Detail</button>
              </div>
            </div>
          </div>

          <div id="add-on-unggulan">
            <h3>Add On Unggulan</h3>
            <div id="slider-2">
              <div className="slider-2-item">
                <img src={require("../images/indihouse/2nd-slider-1.jpg")} />
                <div className="slider-2-text">
                  iflix <span>Lihat</span>
                </div>
              </div>
              <div className="slider-2-item">
                <img src={require("../images/indihouse/2nd-slider-2.jpg")} />
                <div className="slider-2-text">
                  Hooq <span>Lihat</span>
                </div>
              </div>
              <div className="slider-2-item">
                <img src={require("../images/indihouse/2nd-slider-3.jpg")} />
                <div className="slider-2-text">
                  EduKids <span>Lihat</span>
                </div>
              </div>
              <div className="slider-2-item">
                <img src={require("../images/indihouse/2nd-slider-4.jpg")} />
                <div className="slider-2-text">
                  CatchPlay <span>Lihat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
