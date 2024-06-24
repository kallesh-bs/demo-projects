import React, { useRef, useState } from 'react'
import AppName from '../AppName';
import axios from 'axios';
import { data } from '../../data'
// import '../../App.css'
import { Link } from 'react-router-dom';

export default function GitHubAccountFinder() {
  let inpRef = useRef();
  const [accountDetails, setAccountDetails] = useState({});
  console.log(data);
  const [error, setError] = useState('');

  async function fetchData(account) {
    try {
      if (account.length === 0) {
        setError("Enter Something to search")
        setAccountDetails({})
        setTimeout(() => {
          setError('')
        }, 2000)
      }
      else {
        const response = await axios.get(`https://api.github.com/users/${account}`)
        console.log(response.data);
        setAccountDetails(response.data)
      }
    } catch (error) {
      if (error.response) {
        const statusCode = parseInt(error.response.status);
        switch (statusCode) {
          case 404: {
            // alert("Invalid ID")
            setError("Invalid ID");
            setAccountDetails({})
            setTimeout(() => {
              setError('')
            }, 2000)
          }; break;
          case 403: {
            // alert("Api Limit Exceeded try after cool down period ID")
            setError("Limit Exceeded Try After some time");
            setAccountDetails({})
            setTimeout(() => {
              setError('')
            }, 2000)
          }; break;
          default: {
            // alert(`Error : ${statusCode} : ${error.response.statusText}`)
            setError(`Error : ${statusCode} : ${error.response.statusText}`);
            setAccountDetails({})
            setTimeout(() => {
              setError('')
            }, 2000)
          }
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
    else {
      setError("Please Enter Id To Search")
      setTimeout(() => {
        setError('')
      }, 2000)
    }
  }

  function debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay)

    }
  }

  const call = debounce(fetchData, 1000);



  return (
    <>
      <div>
        <AppName appname={"GitHub Account Finder"} />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type='text' ref={inpRef}
          onChange={(e) => call(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              searchAccount();
            }
          }} />
        <button onClick={searchAccount}>Search</button>
      </div>
      <br />
      {
        error ?
          <div className='' style={{ textAlign: "center" }}>{error}</div>
          :
          Object.keys(accountDetails).length !== 0 &&
          <div className='' style={{ textAlign: "center" }}>
            <img src={accountDetails.avatar_url} alt='NA' className='' style={{ height: "16rem", width: "16rem" }} />
            <h2 className=''>Name : {accountDetails.login}</h2>
            <h3>URL : <Link to={accountDetails.html_url}>{accountDetails.html_url}</Link></h3>
          </div >
      }



      {/* {Object.keys(accountDetails).length !== 0 &&
        <div className='card'>
          <img src={accountDetails.avatar_url} alt='NA' />
          <h2>Name : {accountDetails.login}</h2>
          <h3>URL : <Link to={accountDetails.html_url}>{accountDetails.html_url}</Link></h3>
        </div>} */}
    </>
  )
}
