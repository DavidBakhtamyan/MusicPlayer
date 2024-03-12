import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPlaylist } from "./musicAPI";

interface MusicState {
  playlist: any[]; 
}

const initialState: MusicState = {
  playlist: [],
};

const musicSlice = createSlice({
  name: "Music",
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {

    builder.addCase(fetchPlaylist.pending,()=>{
        console.log('pending');
    }).addCase(fetchPlaylist.fulfilled, (state, action: PayloadAction<any>) => {
      const { payload } = action;
      console.log('Done');
      return {
        ...state,
        playlist: [1],
      };
    });
  },
});

export const selectPlaylist = (state: { Music?: MusicState }) => state.Music?.playlist;
export default musicSlice.reducer;
