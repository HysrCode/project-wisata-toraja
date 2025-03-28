import React, { useEffect, useState } from "react";
import "./Destinations.css";
import Loading from "../Loading/Loading";
//axios for fetching data
import axios from "axios";

//import icon
import { MdLocationPin } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";

const Destinations = () => {
  const [destinasiList, setDestinasiList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/destinasi");
        setDestinasiList(response.data);
      } catch (err) {
        setError("Failed to fetch data");
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (destinasiList.length === 0) {
    return <Loading/>;
  }

  return (
    <div className="destination section container">
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText">JELAJAHI</span>
          <h3>Temukan Tujuan Wisatamu</h3>
          <p>
            Nikmati perjalanan wisata budaya yang membuat kamu bangga akan
            keidahan alam
          </p>
        </div>

        <div className="searchField grid">
          <div className="inputField flex">
            <MdLocationPin className="icon" />
            <input type="text" placeholder="Lokasi" />
          </div>

          <div className="inputField flex">
            <BsFillCreditCardFill className="icon" />
            <input type="text" placeholder="Harga" />
          </div>

          <div className="inputField flex">
            <BsFillCalendarDateFill className="icon" />
            <input type="text" placeholder="Tanggal" />
          </div>

          <button className="btn flex">
            <BiSearchAlt className="icon" /> Cari
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex">
            <li>Rekomendasi</li>
            <li>Alam</li>
            <li>Budaya</li>
            <li>Kuliner</li>
          </ul>
        </div>
        
        <div className="destinationContainer grid">
          {destinasiList.map((destinations) => {
            const images = `./imagesDestination/${destinations.images[0]}`;
            return (
              <div className="singleDestination" key={destinations.id}>
                <div className="imgDiv">
                  <img src={images} alt={destinations.name} />
                  <div className="descInfo flex">
                    <div className="text">
                      <span className="name">{destinations.name}</span>
                      <p className="flex">
                        <TiLocation className="icon" />
                        {destinations.city}
                      </p>
                    </div>
                    <span className="rating">{destinations.rating}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
