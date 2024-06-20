import React, { useRef, useState } from 'react'
import AppName from '../AppName'
import { weatherDetails } from '../../data'
import { IoCloudSharp } from "react-icons/io5";
import { GiPositionMarker } from "react-icons/gi";
import { IoMdSunny } from "react-icons/io";
import axios from 'axios';

export default function WeatherDetails() {
    console.log(weatherDetails)
    const [wDetails, setWDetails] = useState({});
    const [wId, setWId] = useState(0);
    const [displayMessage, setDisplayMessage] = useState("Enter City Name and Search to see Weather Details")
    let inpRef = useRef();
    let apiKey = "0c8bba021cc0d5fb5098f7b227cbcc6dx"

    async function fetchData(city) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then((res) => {
                setWDetails(res.data)
            })
            .catch((err) => {
                // console.log(err.response.data.message, err.response.data.cod);
                setWDetails({})
                setDisplayMessage(err.response.data.message)
            })
    }

    function getWeatherDetails() {
        if (inpRef.current.value === '') {
            setWDetails({})
        }
        fetchData(inpRef.current.value)
        inpRef.current.vale = ''
    }

    return (
        <>
            <div><AppName appname={"Weather Details"} /></div>
            <div style={{ textAlign: "center" }}>
                <input
                    type='text'
                    ref={inpRef}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            getWeatherDetails();
                        }
                    }}
                /> &nbsp;
                <button onClick={getWeatherDetails} style={{ cursor: "pointer" }}>Search</button>
            </div>
            <br />
            {
                Object.keys(wDetails).length !== 0 ?
                    <div className='card2'>
                        <div className='cl'>
                            <GiPositionMarker className='ic1' />
                            <h1>{wDetails.name}</h1>
                        </div>
                        <div className='ct'>
                            <h1>{wDetails.main.temp}<sup>o</sup>C</h1>
                            <h1>{parseInt(wDetails.main.temp) * 1.8 + 32}<sup>o</sup>F</h1>
                        </div>
                        <div>
                            {wId === 501}
                            <div className='cic1'>
                                <h1>{wDetails.weather[0].description}</h1>
                            </div>
                        </div>
                    </div>
                    : <div className='card2'><h1 style={{ fontSize: "1rem", padding: "0.5rem", textAlign: "center   " }}>{displayMessage}</h1></div>
            }
        </>
    )
}
