import { api } from "./api";
import { Lot, Bid } from "../../types";

export const auctionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllAuctionLots: builder.query<Lot[], void>({
      query: () => ({
        url: "/auction/lots",
        method: "GET",
      }),
    }),
    // getAuctionLot: builder.query<Lot, string>({
    //   query: (id) => ({
    //     url: `/auction/lots/${id}`,
    //     method: "GET",
    //   }),
    // }),
    addBid: builder.mutation<Bid, Bid>({
      query: (bid) => ({
        url: `/auction/lots/${bid.lotId}/bids`,
        method: "POST",
        body: bid,
      }),
    }),
  }),
});

export const { useGetAllAuctionLotsQuery, useAddBidMutation } = auctionApi;

export const {
  endpoints: { getAllAuctionLots, addBid },
} = auctionApi;
