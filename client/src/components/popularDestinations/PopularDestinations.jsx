import "./popularDestinations.css";
import useFetch from "../../hooks/useFetch.js";

const PopularDestinations = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8081/api/hotels/countByCity?cities=Amsterdam,Zeeland,Maastricht,Rotterdam"
  );
  if (error) {
    return <div>"Something went wrong. Please try again."</div>;
  }
  return (
    <div className="popularDestinations">
      {loading ? (
        "Loading, please wait."
      ) : (
        <>
          <div className="popularDestinationsItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/976539.webp?k=0a7263960952588dc71a60f1f9c2e738b5c0af9b2d9d3c3df79677d630b8a665&o="
              alt="Amsterdam"
              className="popularDestinationsImg"
            />
            <div className="popularDestinationsTitles">
              <h1>Amsterdam</h1>
              <p>{data[0]} properties</p>
            </div>
          </div>
          <div className="popularDestinationsItem">
            <img
              src="https://cf.bstatic.com/xdata/images/region/square250/66219.webp?k=7e0dbc8041d5dd06a29e3bf0cc8c1817a904d3f5860c9366c719dc1781908225&o="
              alt="Zeeland"
              className="popularDestinationsImg"
            />
            <div className="popularDestinationsTitles">
              <h1>Zeeland</h1>
              <p>{data[1]} properties</p>
            </div>
          </div>
          <div className="popularDestinationsItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/976560.webp?k=860549c314b03e11d9573c5d80ecff821e365943dcc335b3dc6f2a767ff08af3&o="
              alt="Maastricht"
              className="popularDestinationsImg"
            />
            <div className="popularDestinationsTitles">
              <h1>Maastricht</h1>
              <p>{data[2]} properties</p>
            </div>
          </div>
          <div className="popularDestinationsItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/square250/976525.webp?k=28ab37ad52e0b672e0d84806232679ce7ec6d2fcd6ac633e4365b3097d880c51&o="
              alt="Rotterdam"
              className="popularDestinationsImg"
            />
            <div className="popularDestinationsTitles">
              <h1>Rotterdam</h1>
              <p>{data[3]} properties</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PopularDestinations;
