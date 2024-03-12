import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeWrapper from './pages/HomeWrapper';
import LoginPage from './pages/LoginPage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylist } from './store/slices/musicSlice/musicAPI';
import { selectPlaylist } from './store/slices/musicSlice';

function App() {
  const CLIENT_ID = "415454bcd3ff4a15afd980f19df85636";
  const REDIRECT_URI = "http://localhost:3000/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";


  const dispatch = useDispatch()
  const playList = useSelector(selectPlaylist)
  const [token, setToken] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [artist, setArtist] = useState<any>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      console.log(token);
      const { data } = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks", {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      console.log(data.items);
      setArtist(data.items);
    } catch (error) {
      console.log(token);
      console.error('Error fetching playlist details:', error);
    }
  };

  useEffect(() => {
    const hash: string = window.location.hash;
    let token: any = window.localStorage.getItem("token");

    if (!token && hash) {
      token = hash.substring(1).split("&").find(el => el.startsWith("access_token"))?.split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem("token", token)
      window.localStorage.setItem("tokenExpirationTime", JSON.stringify(new Date().getTime() + 3600 * 1000))
    }
    setToken(token);
  }, []);

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchPlaylist());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeWrapper />}>
          <Route index element={<></>} />
        </Route>
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      <div className='MainContetn'>
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );

}

export default App;
