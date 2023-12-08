import React, { useState } from "react";
import "./Home.css";
import Button from "../Buttons/Button";
import cardData from "../Cards/CardsData";
import secondCardData from "../Cards/secondCardData";
import userData from "../Cards/UserData";
import Footer from "../Footer/Footer";
// import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { mainLogo, vector, departure, arrival } from "../../images/Images";
import Navbar from "../Navbar/Navbar";
import SpotInput from "../SpotInput/SpotInput";

function Home() {
  // const navigate = useNavigate();
  const [isBanner, setIsBanner] = useState(true);

  const handleCloseBanner = () => {
    setIsBanner(false);
  };

  // const toSignUp = () => {
  //   navigate("/signup");
  // };
  return (
    <div>
      {isBanner && (
        <div className="banner">
          <p>
            Join Tripma today and save up to 20% on your flight using code
            TRAVEL at checkout. Promotion valid for new users only.
          </p>
          <div className="close" onClick={handleCloseBanner}>
            <Link to="/">
              <IoMdClose />
            </Link>{" "}
          </div>
        </div>
      )}
      {/* <div className="navbar">
        <div className="logo">
          <a href="/">
            <img src={mainLogo} alt="logo" />
          </a>
        </div>
        <div className="nav">
          <div className="navList">
            <ul>
              <li>
                <a href="#">Flights</a>
              </li>
              <li>
                <a href="#">Hotels</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="/signin">Sign in</a>
              </li>
            </ul>
            <div className="SignupBut">
              <Button btnContent="Sign Up" btnFunction={toSignUp} />
            </div>
          </div>
        </div>
      </div> */}
      <Navbar/>
      <div className="spotlight">
        <div className="spotlightDiv">
          <h1>It’s more than just a trip</h1>
        </div>
        <SpotInput/>
        {/* <div className="spotInput wrapper">
          <div className="inputDiv">
            <select className="Inputs" placeholder="From Where?">
              <option value="" disabled selected>
                From where?
              </option>
              <option value="option1">SFO</option>
              <option value="option2">ATL</option>
              <option value="option3">LAX</option>
              <option value="option1">STL</option>
              <option value="option2">PVG</option>
              <option value="option3">MSP</option>
              <option value="option3">NRT</option>
            </select>
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <select className="Inputs" placeholder="From Where?">
              <option value="" disabled selected>
                Where to?
              </option>
              <option value="option1">SFO</option>
              <option value="option2">ATL</option>
              <option value="option3">LAX</option>
              <option value="option1">STL</option>
              <option value="option2">PVG</option>
              <option value="option3">MSP</option>
              <option value="option3">NRT</option>
            </select>
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <input className="Inputs" type="text" placeholder="Depart Return" />
          </div>
          <div className="inputDiv">
            <img src="" alt="" />
            <input className="Inputs" type="text" placeholder="1 Adult" />
          </div>
          <div className="SearchBut">
            <Button btnContent="Search" />
          </div>
        </div> */}
      </div>

      <div>
        <div className="cardSection wrapper">
          <h3>
            Find your next adventure with these{" "}
            <span>
              <a href="#">flight deals</a>
            </span>
          </h3>

          <p className="all">
            <a href="#">All</a>
            <a href="#">
              <img className="vector" src={vector} alt="" />
            </a>
          </p>
        </div>

        <div className="div4cards wrapper">
          {cardData.map((card) => (
            <div key={card.id} className="divCard">
              <div className="cardImgDiv">
                <img src={card.img} alt="" />
              </div>
              <div className="loc_rate">
                <p>{card.place}</p>
                <p>{card.price}</p>
              </div>
              <div className="cardHighlight">
                <p>{card.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="secondCardSection wrapper">
          <h3>
            Explore unique{" "}
            <span>
              <a href="#">places to stay</a>
            </span>
          </h3>
          <p className="all">
            <a href="#">All</a>
            <a href="#">
              <img className="vector" src={vector} alt="" />
            </a>
          </p>
        </div>

        <div className="div4cards wrapper">
          {secondCardData.map((card) => (
            <div key={card.id} className="secondDivCard">
              <div className="cardImgDiv">
                <img src={card.img} alt="" />
              </div>
              <div className="loc_rate">
                <p>
                  {card.place}
                  <p>{card.location}</p>
                </p>
              </div>
              <div className="cardHighlight">
                <p>{card.highlight}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="moreStays">
          <Button btnContent="Explore more stays" />
        </div>
      </div>
      <div className="review wrapper">
        <h3>
          What{" "}
          <span>
            <a href="#">Tripma</a>
          </span>{" "}
          users are saying
        </h3>
        <div className="userCardDiv">
          {userData.map((card) => (
            <div className="userCards">
              <div className="photoNdName">
                <div className="userImg">
                  <img src={card.userImage} alt="" />
                </div>
                <div className="userContent">
                  <p className="userNameP">{card.name}</p>
                  <p className="userPlaceP">{card.place}</p>
                  <div className="userRating">
                    <img src={card.rateImg} alt="" />
                  </div>
                  <p className="reviewP">{card.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

{
  /* <div className="secondCardSection wrapper">
          <h3>
            Explore unique{" "}
            <span>
              <a href="#">places to stay</a>
            </span>
          </h3>
          <p>
            <a href="">All</a>
          </p>
        </div>
        <div className="div4cards wrapper">
          <div className="secondDivCard">
            <div>
              <img src="" alt="" />
            </div>
            <div className="loc_rate">
              <p>
                Stay among the atolls in{" "}
                <span>
                  <a href="#">Maldives</a>
                </span>
              </p>
            </div>
            <div className="cardHighlight">
              <p>
                From the 2nd century AD, the islands were known as the 'Money
                Isles' due to the abundance of cowry shells, a currency of the
                early ages.
              </p>
            </div>
          </div>
          <div className="secondDivCard">
            <div>
              <img src="" alt="" />
            </div>
            <div className="loc_rate">
              <p>
                Experience the Ourika Valley in{" "}
                <span>
                  <a href="#">Morocco</a>
                </span>
              </p>
            </div>
            <div className="cardHighlight">
              <p>
                Morocco’s Hispano-Moorish architecture blends influences from
                Berber culture, Spain, and contemporary artistic currents in the
                Middle East.
              </p>
            </div>
          </div>
          <div className="secondDivCard">
            <div>
              <img src="" alt="" />
            </div>
            <div className="loc_rate">
              <p>
                Live traditionally in{" "}
                <span>
                  <a href="#">Mongolia</a>
                </span>
              </p>
            </div>
            <div className="cardHighlight">
              <p>
                Traditional Mongolian yurts consists of an angled latticework of
                wood or bamboo for walls, ribs, and a wheel.
              </p>
            </div>
          </div>
        </div> */
}
