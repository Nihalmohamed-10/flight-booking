import React from "react";
import { mainLogo, twitterLogo, instaLogo, fbLogo, googlePlay,appStore } from "../../images/Images";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer wrapper">
      <div className="footerFlex">
        <div className="footerLogo">
          <img src={mainLogo} alt="" />
        </div>
        <div className="mainFooterDiv">
            <div className="footerDivs">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="">About Tripma</a>
                </li>
                <li>
                  <a href="">How it works</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Press</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Forum</a>
                </li>
              </ul>
            </div>
            <div className="footerDivs">
              <h3>Partner with us</h3>
              <ul>
                <li>
                  <a href="">Partnership programs</a>
                </li>
                <li>
                  <a href="">Affiliate program</a>
                </li>
                <li>
                  <a href="">Connectivity partners</a>
                </li>
                <li>
                  <a href="">Promotions and events</a>
                </li>
                <li>
                  <a href="">Integrations</a>
                </li>
                <li>
                  <a href="">Community</a>
                </li>
                <li>
                  <a href="">Loyalty program</a>
                </li>
              </ul>
            </div>
            <div className="footerDivs">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="">Help Center</a>
                </li>
                <li>
                  <a href="">Contact us</a>
                </li>
                <li>
                  <a href="">Privacy policy</a>
                </li>
                <li>
                  <a href="">Terms of service</a>
                </li>
                <li>
                  <a href="">Trust and safety</a>
                </li>
                <li>
                  <a href="">Accessibility</a>
                </li>
              </ul>
            </div>
            <div className="footerDivs">
              <h3>Get the app</h3>
              <ul>
                <li>
                  <a href="">Tripma for Android</a>
                </li>
                <li>
                  <a href="">Tripma for iOS</a>
                </li>
                <li>
                  <a href="">Mobile site</a>
                </li>
              </ul>
              <div className="googleNdIosDiv">
                  <div className="googleNdIos">
                    <img src={appStore} alt="" />
                  </div>
                  <div className="googleNdIos">
                    <img src={googlePlay} alt="" />
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div className="btmFooter">
        <div className="logoNdCpy">
          <div>
            <img src={twitterLogo} alt="" />
          </div>
          <div>
            <img src={instaLogo} alt="" />
          </div>
          <div>
            <img src={fbLogo} alt="" />
          </div>
        </div>
        <div>
          <p>© 2020 Tripma incorporated</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
