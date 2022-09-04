import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Subscription from "../../components/subscription/Subscription";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";

const Hotel = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8081/api/hotels/find/${id}`
  );

  const { date, options } = useContext(SearchContext);

  const dayCalculation = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / dayCalculation);
    return diffDays;
  }

  let days = dayDifference(date[0].endDate, date[0].startDate);

  if (days === 0) {
    days = 1;
  }

  if (error) {
    return (
      <div>
        <Navbar />
        <Header type="list" />
        "Something went wrong. Please try again."
      </div>
    );
  }

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    direction === "left"
      ? (newSlideNumber =
          slideNumber === 0 ? data.photos.length - 1 : slideNumber - 1)
      : (newSlideNumber =
          slideNumber === data.photos.length - 1 ? 0 : slideNumber + 1);

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Page is loading. Please wait"
      ) : (
        <div className="hotelContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="arrow"
                onClick={() => handleMove("left")}
              />
              <div className="sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="arrow"
                onClick={() => handleMove("right")}
              />
            </div>
          )}
          <div className="hotelWrapper">
            <Link to={"/"}>
              <button className="bookNow">Book Now!</button>
            </Link>
            <h1 className="hotelTitle">{data.name}</h1>
            <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="hotelDistance">
              Excellent location – {data.distance} from center
            </span>
            <span className="hotelPriceHighlight">
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </span>
            <div className="hotelImages">
              {data.photos?.map((photo, i) => (
                <div className="hotelImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitle">{data.title}</h1>
                <p className="hotelDesc">{data.description}</p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a {days}-night stay!</h1>
                <span>
                  Located in the real heart of {data.city}, this property has an
                  excellent location score of {data.rating}!
                </span>
                <h2>
                  <b>${days * data.cheapestPrice * options.room}</b> ({days}
                  {days === 1 ? "night" : "nights"})
                </h2>
                <Link to={"/"}>
                  <button className="bookNowBelow">Book Now!</button>
                </Link>
              </div>
            </div>
          </div>
          <Subscription />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hotel;
