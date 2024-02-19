import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disable?: boolean }[];
};
const PhSelect = ({ label, name, options }: TPhSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            size="large"
            {...field}
            options={options}
          />
          {error && <small>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
