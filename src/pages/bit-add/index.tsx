import { Row } from "antd";
import { useState } from "react";
import { Bid } from "../../types";
import { BitForm } from "../../components/bid-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useAddBidMutation } from "../../app/services/auction";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { Paths } from "../../paths";

export const BitAdd = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [addBid] = useAddBidMutation();

  const handleAddBid = async (data: Bid) => {
    try {
      await addBid(data).unwrap();

      navigate(`${Paths.auctionLot}/${data.id}`);
    } catch (err) {
      const maybeError = isErrorWithMessage(err);

      if (maybeError) {
        setError(err.data.message);
      } else {
        setError("Unknown error");
      }
    }
  };

  return (
    <Layout>
      <Row align="middle" justify="center">
        <BitForm
          onFinish={handleAddBid}
          title="Add Bid"
          btnText="Add"
          error={error}
        />
      </Row>
    </Layout>
  );
};
