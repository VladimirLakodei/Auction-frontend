import { Form, Input } from "antd";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
};

export const CustomInput = ({
  type = "text",
  name,
  placeholder,
  required = true,
}: Props) => {
  return (
    <Form.Item
      name={name}
      rules={[{ required, message: "This field is required" }]}
      shouldUpdate={true}
    >
      <Input
        placeholder={`${placeholder}${required ? "" : " (optional)"}`}
        type={type}
        size="large"
      />
    </Form.Item>
  );
};
