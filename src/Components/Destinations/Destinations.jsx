import React from "react"
import "./Destinations.css"

//import images
import image1 from "../../Assets/images/image1.jfif"
import image2 from "../../Assets/images/image2.jfif"
import image3 from "../../Assets/images/image3.jpg"
import image4 from "../../Assets/images/image4.jfif"
import image5 from "../../Assets/images/image5.jfif"
import image6 from "../../Assets/images/image6.jpg"



//import icon
import {MdLocationPin} from 'react-icons/md'
import {BsFillCreditCardFill} from 'react-icons/bs'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {BiSearchAlt} from 'react-icons/bi'
import {TiLocation} from 'react-icons/ti'

const Destinations = () => {
    //Array for images
    const destinations = [
        {
            id: 1,
            img: image1,
            name: "Negeri Atas Awan",
            locaton: "Toraja",
            rating:4.7
        },
        {
            id: 2,
            img: image2,
            name: "Patung Tuhan Yesus",
            locaton: "Toraja",
            rating:4.7
        },
        {
            id: 3,
            img: image3,
            name: "Pongo-Pongo",
            locaton: "Makale",
            rating:4.7
        },
        {
            id: 4,
            img: image4,
            name: "Lembah Olon",
            locaton: "Toraja",
            rating:4.7
        },
        {
            id: 5,
            img: image5,
            name: "Kubur Batu Lemo",
            locaton: "Toraja",
            rating:4.7
        },
        {
            id: 6,
            img: image6,
            name: "Museum Ne' Gadeng",
            locaton: "Toraja",
            rating:4.7
        }
    ]

    return (
        <div className="destination section container">
            <div className="secContainer">
                <div className="secTitle">
                    <span className="redText">JELAJAHI</span>
                    <h3>Temukan Tujuan Wisatamu</h3> 
                    <p>Nikmati perjalanan wisata budaya yang membuat kamu bangga akan keidahan alam</p>
                </div>

            <div className="searchField grid" >
                <div className="inputField flex">
                    <MdLocationPin className="icon" />
                    <input type="text" placeholder="Lokasi"/>
                </div>

                <div className="inputField flex">
                    <BsFillCreditCardFill className="icon" />
                    <input type="text" placeholder="Harga"/>
                </div>

                <div className="inputField flex">
                    <BsFillCalendarDateFill className="icon" />
                    <input type="text" placeholder="Tanggal"/>
                </div>

                <button className="btn flex"><BiSearchAlt className="icon"/> Cari</button>
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
                {destinations.map(destinations => {
                    return (
                        <div className="singleDestination">
                            <div className="imgDiv">
                                <img src={destinations.img} alt={destinations.name} />
                                <div className="descInfo flex">
                                    <div className="text">
                                        <span className="name">{destinations.name}</span>
                                        <p className="flex"><TiLocation className="icon" />{destinations.locaton}</p>
                                    </div>
                                    <span className="rating">{destinations.rating}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
                </div>
        </div>
    </div>
    )
}

export default Destinations