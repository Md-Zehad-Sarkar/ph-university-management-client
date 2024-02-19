import { Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
const PhInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input size="large" type={type} {...field} name={name} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhInput;
