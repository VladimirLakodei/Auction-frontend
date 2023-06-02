import { Descriptions, Button } from "antd";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { Paths } from "../../paths";
import { Layout } from "../../components/layout";
import { BitItem } from "../../components/bid-item";
import { useGetAuctionLotQuery } from "../../app/services/auction";

export const AuctionLot = () => {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const lotId = params.id || "";
  const { data, isLoading } = useGetAuctionLotQuery(lotId);
  const goToAddBid = () => navigate(Paths.bitAdd.replace(":id", lotId));

  if (isLoading) {
    return <span>Loading</span>;
  }

  if (!data) {
    return <Navigate to="/" />;
  }

  const bids = data.bids.map((bid) => (
    <>
      <BitItem amount={bid.amount} bidderName={bid.bidderName} />
      <br />
    </>
  ));

  return (
    <Layout>
      <Button type="primary" style={{ margin: "16px 0" }} onClick={goToAddBid}>
        Add Bid
      </Button>
      <Descriptions title="Lot info" bordered>
        <Descriptions.Item label="Title" span={3}>
          {data.name}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          {data.description}
        </Descriptions.Item>
        <Descriptions.Item label="Starting Price" span={3}>
          {data.startingPrice.toString()}
        </Descriptions.Item>
        <Descriptions.Item label="Buy Now Price" span={3}>
          {data.buyNowPrice?.toString()}
        </Descriptions.Item>
        <Descriptions.Item label="startDate" span={3}>
          {data.startDate}
        </Descriptions.Item>
        <Descriptions.Item label="endDate" span={3}>
          {data.endDate}
        </Descriptions.Item>
        {data.highestBid ? (
          <Descriptions.Item label="highestBid" span={3}>
            <BitItem
              amount={data.highestBid.amount}
              bidderName={data.highestBid.bidderName}
            />
          </Descriptions.Item>
        ) : null}
        <Descriptions.Item label="Bids" span={3}>
          {bids}
        </Descriptions.Item>
      </Descriptions>
    </Layout>
  );
};
