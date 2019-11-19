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

        <div id="content-2">
          <div className="container">
            <div id="content-2-top">
              <h2>
                Berlangganan IndiHouse dan nikmati konten terbaik di dalam layar
                TV Anda
              </h2>
              <div id="nav-content2">
                <div className="nav-content2-item">
                  <img
                    src={require("../images/indihouse/nav-content2-1_active.png")}
                  />
                </div>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <div className="nav-content2-item">
                  <img
                    src={require("../images/indihouse/nav-content2-2.png")}
                  />
                </div>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                <div className="nav-content2-item">
                  <img
                    src={require("../images/indihouse/nav-content2-3.png")}
                  />
                </div>
              </div>
            </div>

            <div id="slider-3" className="konten-indihome">
              <div className="slider-3-item">
                <img src={require("../images/indihouse/3nd-slider-1.jpg")} />
                <h3>Lomba EPG</h3>
                <p>IndiHouse TV</p>
              </div>
              <div className="slider-3-item">
                <img src={require("../images/indihouse/3nd-slider-2.jpg")} />
                <h3>UseeSport 2</h3>
                <p>IndiHouse TV</p>
              </div>
              <div className="slider-3-item">
                <img src={require("../images/indihouse/3nd-slider-3.jpg")} />
                <h3>FX - Ray Donovan Season 7</h3>
                <p>IndiHouse TV</p>
              </div>
              <div className="slider-3-item">
                <img src={require("../images/indihouse/3nd-slider-4.jpg")} />
                <h3>Boomerang - Taffy</h3>
                <p>IndiHouse TV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
