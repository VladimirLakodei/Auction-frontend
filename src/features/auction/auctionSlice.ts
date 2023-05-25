import { Lot, Bid } from "../../types";
import { createSlice } from "@reduxjs/toolkit";
import { auctionApi } from "../../app/services/auction";
import { RootState } from "../../app/store";

interface InitialState {
  auctionLots: Lot[] | null;
}

const initialState: InitialState = {
  auctionLots: null,
};

const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    // logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      auctionApi.endpoints.getAllAuctionLots.matchFulfilled,
      (state, action) => {
        state.auctionLots = action.payload;
      }
    );
  },
});

export default slice.reducer;

export const selectEmployees = (state: RootState) => state.auction.auctionLots;
