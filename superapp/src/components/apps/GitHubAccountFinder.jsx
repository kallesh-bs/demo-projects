import React, { useRef, useState } from 'react'
import AppName from '../AppName';
import axios from 'axios';
import { data } from '../../data'
import '../../App.css'
import { Link } from 'react-router-dom';

export default function GitHubAccountFinder() {
  let inpRef = useRef();
  const [accountDetails, setAccountDetails] = useState({});
  console.log(data);

  async function fetchData(account) {
    try {
      const response = await axios.get(`https://api.github.com/users/${account}`)
      console.log(response.data);
      setAccountDetails(response.data)
    } catch (error) {
      if (error.response) {
        const statusCode = parseInt(error.response.status);
        switch (statusCode) {
          case 404: alert("Invalid ID"); break;
          case 403: alert("Api Limit Exceeded try after cool down period ID"); break;
          default: alert(`Error : ${statusCode} : ${error.response.statusText}`)
        }
      } else {
        alert("Something went wile fetching data")
      }
    }

  }

  function searchAccount() {
    if (inpRef.current.value !== '') {
      fetchData(inpRef.current.value)
      inpRef.current.value = '';
    }
  }

  return (
    <>
      <div>
        <AppName appname={"GitHub Account Finder"} />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type='text' ref={inpRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAccount();
            }
          }} />
        <button onClick={searchAccount}>Search</button>
      </div>
      <br />
      {Object.keys(accountDetails).length !== 0 &&
        <div className='card'>
          <img src={accountDetails.avatar_url} alt='NA' />
          <h2>Name : {accountDetails.login}</h2>
          <h3>URL : <Link to={accountDetails.html_url}>{accountDetails.html_url}</Link></h3>
        </div>}
    </>
  )
}
