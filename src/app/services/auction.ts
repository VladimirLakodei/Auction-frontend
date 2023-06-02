import { api } from "./api";
import { Lot, Bid } from "../../types";

export const auctionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllAuctionLots: builder.query<Lot[], object>({
      query: (params) => ({
        url: "/auction/lots",
        params,
        method: "GET",
      }),
    }),
    getAuctionLot: builder.query<Lot, string>({
      query: (id) => ({
        url: `/auction/lots/${id}`,
        method: "GET",
      }),
    }),
    addLot: builder.mutation<Lot, Lot>({
      query: (lot) => ({
        url: "/auction/lots",
        method: "POST",
        body: lot,
      }),
    }),
    addBid: builder.mutation<Bid, Bid>({
      query: (bid) => ({
        url: `/auction/lots/${bid.lotId}/bids`,
        method: "POST",
        body: bid,
      }),
    }),
  }),
});

export const {
  useGetAuctionLotQuery,
  useGetAllAuctionLotsQuery,
  useAddLotMutation,
  useAddBidMutation,
} = auctionApi;

export const {
  endpoints: { getAllAuctionLots, getAuctionLot, addLot, addBid },
} = auctionApi;
