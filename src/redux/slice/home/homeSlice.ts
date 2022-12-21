import { createSlice } from '@reduxjs/toolkit';
import { getNFTCollections } from './homeActions';

/**
 * Create a slice as a reducer containing actions.
 *
 * In this example actions are included in the slice. It is fine and can be
 * changed based on your needs.
 */
export const homeSlice = createSlice({
  name: 'NFTs',
  initialState: {
    nfts: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNFTCollections.pending, (state) => {
        return {
          ...state,
          loading: true,
        };
      })
      .addCase(getNFTCollections.fulfilled, (state, action) => {
        return {
          ...state,
          loading: false,
          nfts: action.payload,
        };
      })
      .addCase(getNFTCollections.rejected, (state) => {
        return {
          ...state,
          loading: false,
        };
      });
  },
});

export default homeSlice.reducer;
