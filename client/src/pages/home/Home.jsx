import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import PropertyList from "../../components/propertyList/PropertyList";
import Offers from "../../components/offers/Offers";
import Subscription from "../../components/subscription/Subscription";
import Footer from "../../components/footer/Footer";
import PopularDestinations from "../../components/popularDestinations/PopularDestinations";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <div className="checkboxes">
          <input type="checkbox" />
          <p className="checkboxText">
            I'm looking for an entire home or apartment
          </p>
          <input type="checkbox" />
          <p className="checkboxText">I'm travelling for work</p>
        </div>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <div>
          <h1 className="homeTitle">Explore Netherlands</h1>
          <p className="homeSubtitle">
            These popular destinations have a lot to offer
          </p>
        </div>
        <PopularDestinations />
        <h1 className="homeTitle">Similar hotels you might like</h1>
        <Offers />
        <Subscription />
        <Footer />
      </div>
    </div>
  );
};
export default Home;
