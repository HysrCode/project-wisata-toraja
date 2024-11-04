import React, { useState } from "react"
import "./Questions.css"
import Accordion  from "./Accordion.jsx"


const Questions = () => {

    const [active, setActive] = useState('Apa yang membuat Toraja unik sebagai tujuan wisata?')
    return (
        <div className="questions section container">
            <div className="secHeading">
                <h3>
                    Frequently Asked Questions
                </h3>
            </div>
            <div className="secContiner grid">
                {/* component from other file */}
                <div className="accordion grid">
                    <Accordion title={"Apa yang membuat Toraja unik sebagai tujuan wisata?"} desc={"Toraja terkenal dengan budaya dan tradisi uniknya yang masih dipertahankan hingga kini. Salah satu daya tarik utamanya adalah upacara pemakaman Rambu Solo' yang merupakan tradisi kematian yang megah dan kompleks. "} active={active} setActive={setActive} />

                    <Accordion title={"Kapan waktu terbaik untuk mengunjungi Toraja?"} desc={"Waktu terbaik untuk mengunjungi Toraja adalah antara bulan Juni hingga September, di mana cuaca cenderung lebih kering dan nyaman untuk berwisata. "} active={active} setActive={setActive} />

                    <Accordion title={"Apa saja kegiatan wisata yang bisa dilakukan di Toraja?"} desc={"WWisatawan dapat mengunjungi situs budaya dan sejarah seperti Londa, Kete Kesu, dan Lemo; menyaksikan upacara adat Rambu Solo' dan Ma'nene; menikmati wisata alam dengan mendaki Gunung Sesean, menjelajahi air terjun Sarambu Assing, dan menikmati pemandangan dari Batu Tumonga; berinteraksi dengan penduduk lokal dengan menginap di desa tradisional. "} active={active} setActive={setActive} />
                    
                </div>
                
                <div className="form">
                    <div className="secHeading">
                        <h4>Do you have any specific queston?</h4>
                        <p>Please fill the form below and our dedicated team will get intouch with you as soon as posible</p>
                    </div>
                    <div className="formContent grid">
                        <input type="email" placeholder="Enter email address" />
                        <textarea name="" id="" placeholder="Enter question here"></textarea>
                        <button className="btn">submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions