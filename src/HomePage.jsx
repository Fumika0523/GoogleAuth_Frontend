import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [user, setUser] = useState(null);//holds the logged-in user object from the backend (or null initially).
  const [loggedIn, setLoggedIn] = useState(false); //a boolean to track if the user is logged in or not.

  const getGoogleProfile = async () => {
    try {
      console.log("Google data is calling...");

      // Await the response and store it in "res"
      // const res = await axios.get('http://localhost:8000/', {
      //   withCredentials: true,
      // });

      const res = await fetch("http://localhost:8000/",{
        method:"GET",
        credentials:"include",
      })
      const data = await res.json()
      

      //  Use res.data safely
      // console.log('getGoogleProfile', res.data);
      console.log('getGoogleProfile', data);

      setLoggedIn(res.data.loggedIn);

      if (res.data.loggedIn) {
        setUser(res.data.user);
      }
    } catch (e) {
      console.log("Failed to fetch Google Profile", e);
    }
  };

  useEffect(() => {
    getGoogleProfile();
  }, []); // run once

  return (
    <>
      <h1>Google Profile Page</h1>

      {loggedIn === true ? (
        user ? (
          <div>
            <p>Google ID: {user.googleId}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>

            <pre>{JSON.stringify(user, null, 2)}</pre>
          </div>
        ) : (
          <p>Loading user...</p>
        )
      ) : (
        <p>Not logged in</p>
      )}
    </>
  );
};

export default HomePage;
