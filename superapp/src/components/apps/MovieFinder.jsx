import React, { useEffect, useState, useRef } from 'react';
import AppName from '../AppName';
import axios from "axios";

export default function MovieFinder() {
    const [data, setData] = useState([]);
    const [target, setTarget] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies");
                setData(response.data);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleSearch = () => {
        setTarget([])
        console.log(inputRef.current.value);
        if (inputRef.current.value.length !== 0) {
            let s = data.filter(x => x.Title.toLowerCase().includes(inputRef.current.value.toLowerCase()));
            setTarget(s);
        }
    };

    return (
        <>
            <div>
                <AppName appname={"Movie Finder"} />
            </div>
            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <br />

            {target.length !== 0 ? (
                <div>
                    {target.map(y => (<div key={Math.random() + ""}>
                        <div>{y.Title} </div>
                        <div> Year: {y.Year} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Duration : {y.Runtime}</div>
                        <img src={y.Poster} alt='No Img' />
                    </div>
                    ))}
                </div>
            ) : (<div>No Data Found</div>)}
        </>
    );
}