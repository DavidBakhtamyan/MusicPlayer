import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchPlaylist = createAsyncThunk(
    "Music/fetchPlaylist",
    async function(){
        const response = await axios.get("https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF/tracks", {
            headers: {
              Authorization: `Bearer BQDWemDmDe2Bj2hJR7GKCbFb5yBvrMixafQrzu6GP4W-ghep_7A2XbeVX5999k51ZzmlHIRcz3t_ptNwTQq6RE7lRD2SAwjbtt6ysfVdh7fzkAzz3F8JS_2aNr4GAMhhG97pvFPLCKk2-m_NEMeJ1tdG6Z1A3OjGG18WT0uDX44xkEUWSOPHAa2ULXhtE5E`
            },
          }); 
          
          return response.data.items
    }
)