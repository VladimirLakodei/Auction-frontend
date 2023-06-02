import { Bid } from "../../types";

export const BitItem = ({
  amount,
  bidderName,
}: Pick<Bid, "amount" | "bidderName">) => {
  return (
    <div>
      <div>Amount {amount.toString()}</div>
      <div>Bidder Name {bidderName}</div>
    </div>
  );
};
