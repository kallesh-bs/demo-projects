import React, { useEffect, useState, useRef } from 'react'
import AppName from '../AppName'
import '../../App.css'
import axios from 'axios';

export default function BankDetails() {

    const [data, setData] = useState({});
    const inputRef = useRef(null);


    const fetchData = async (ifsc) => {
        try {
            const response = await axios.get(`https://ifsc.razorpay.com/${ifsc}`);
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const handleSearch = () => {
        // console.log(inputRef.current.value);
        if (inputRef.current.value !== '') {
            fetchData(inputRef.current.value)
            inputRef.current.value = '';
        }

    };


    return (
        <>
            <AppName appname={"BankDetails"} />

            <div>
                <input type="text" ref={inputRef} />
                <button onClick={handleSearch}>Search</button>
            </div>
            <br />
            {Object.keys(data).length !== 0 &&
                <div>
                    <table border={1} className='tbl1'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bank Name : </td>
                                <td> {data.BANK}</td>
                            </tr>
                            <tr>
                                <td>Bank Code : </td>
                                <td> {data.BANKCODE}</td>
                            </tr>
                            <tr>
                                <td>Branch IFSC : </td>
                                <td> {data.IFSC}</td>
                            </tr>
                            <tr>
                                <td>Branch Name : </td>
                                <td> {data.BRANCH}</td>
                            </tr>
                            <tr>
                                <td>Branch Address :</td>
                                <td> {data.ADDRESS}</td>
                            </tr>
                            <tr>
                                <td>Branch City : </td>
                                <td> {data.CITY}</td>
                            </tr>
                            <tr>
                                <td>Branch District : </td>
                                <td>{data.DISTRICT}</td>
                            </tr>
                            <tr>
                                <td>Branch State :</td>
                                <td>{data.STATE}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}
