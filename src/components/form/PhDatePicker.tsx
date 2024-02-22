import { DatePicker, Form, Input } from "antd";
import { Controller } from "react-hook-form";
type TInputDatePickerProps = {
  name: string;
  label?: string;
};
const PhDatePicker = ({ name, label }: TInputDatePickerProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <DatePicker {...field} size="large" style={{ width: "100%" }} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhDatePicker;
