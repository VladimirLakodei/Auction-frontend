import { Row } from "antd";
import { useState } from "react";
import { Lot } from "../../types";
import { LotForm } from "../../components/lot-form";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/layout";
import { useAddLotMutation } from "../../app/services/auction";
import { isErrorWithMessage } from "../../utils/is-error-with-message";
import { Paths } from "../../paths";

export const LotAdd = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [addLot] = useAddLotMutation();

  const handleAddLot = async (data: Lot) => {
    try {
      const newLot = await addLot(data).unwrap();
      navigate(`${Paths.auctionLot}/${newLot.id}`);
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
        <LotForm
          onFinish={handleAddLot}
          title="Add Lot"
          btnText="Add"
          error={error}
        />
      </Row>
    </Layout>
  );
};
