import { Lot } from "../../types";
import { Form, Card, Space, Button, Alert } from "antd";
import { CustomInput } from "../custom-input";

type Props<T> = {
  onFinish: (values: T) => void;
  btnText: string;
  title: string;
  error?: string;
  lot?: T;
};

export const LotForm = ({
  onFinish,
  title,
  lot,
  btnText,
  error,
}: Props<Lot>) => {
  return (
    <Card title={title} style={{ width: "30rem" }}>
      <Form name="add-employee" onFinish={onFinish} initialValues={lot}>
        <CustomInput type="text" name="name" placeholder="Lot Title" />
        <CustomInput
          type="text"
          name="description"
          placeholder="Lot description"
          required={false}
        />
        <CustomInput
          type="number"
          name="startingPrice"
          placeholder="Starting Price"
        />
        <CustomInput
          type="number"
          name="buyNowPrice"
          placeholder="Buy Now Price"
          required={false}
        />
        <CustomInput
          type="datetime-local"
          name="startDate"
          placeholder="Start Date"
        />
        <CustomInput
          type="datetime-local"
          name="endDate"
          placeholder="End Date"
        />
        <Space direction="vertical" size="large">
          {error ? <Alert message={error} type="error" /> : null}
          <Button htmlType="submit">{btnText}</Button>
        </Space>
      </Form>
    </Card>
  );
};
