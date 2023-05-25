import { Bid } from "../../types";
import { Form, Card, Space, Button, Alert } from "antd";
import { CustomInput } from "../custom-input";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  bid?: T;
};

export const BitForm = ({
  onFinish,
  title,
  bid,
  btnText,
  error,
}: Props<Bid>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish} initialValues={bid}>
        <CustomInput type="text" name="bidderName" placeholder="Bidder Name" />
        <CustomInput type="number" name="amount" placeholder="Amount" />
        <Space direction="vertical" size="large">
          {error ? <Alert message={error} type="error" /> : null}
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  );
};
