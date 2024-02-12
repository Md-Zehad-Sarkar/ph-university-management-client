import { Input } from "antd";
import { Controller } from "react-hook-form";
type TInputProps = {
  type: string;
  name: string;
  label?: string;
};
const PhInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "15px", width: "400px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input type={type} {...field} name={name} id={name} />
        )}
      />
    </div>
  );
};

export default PhInput;
