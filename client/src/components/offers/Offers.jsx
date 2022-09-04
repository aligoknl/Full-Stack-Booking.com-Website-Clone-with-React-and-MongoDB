import useFetch from "../../hooks/useFetch";
import "./offers.css";

const Offers = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8081/api/hotels?&limit=4"
  );
  if (error) {
    return <div>"Something went wrong. Please try again."</div>;
  }
  return (
    <div className="offer">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data.map((item) => (
            <div className="offerItem" key={item._id}>
              <img src={item.photos[0]} alt="" className="offerImg" />
              <span className="offerName">{item.name}</span>
              <span className="offerCity">{item.city}</span>
              <span className="offerPrice">
                <span className="offerStarting">Starting from </span>€
                {item.cheapestPrice}
              </span>
              {item.rating && (
                <div className="offerRating">
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Offers;
