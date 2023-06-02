export type Bid = {
  id: Number;
  lotId: Number;
  amount: Number;
  user: null;
  bidderName: String;
};

export type Lot = {
  id: Number;
  name: String;
  description?: String;
  startingPrice: Number;
  buyNowPrice: Number | null;
  startDate: String | null;
  endDate: String | null;
  bids: Bid[];
  highestBid: Bid | null;
};

export type ErrorWithMessage = {
  status: number;
  data: {
    message: string;
  };
};
