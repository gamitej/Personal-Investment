import "./InputField.scss";
import { FC } from "react";

interface InputFieldProps {
  onChange: () => void;
  id: string;
  value: string;
  label: string;
  width?: string;
  placeholder?: string;
  type: "text" | "number" | "password";
}

const InputField: FC<InputFieldProps> = ({
  onChange,
  value = "",
  type = "text",
  width = "100%",
  label = "Label",
  id = "input-id",
  placeholder = "Enter...",
}) => {
  /**
   * TSX
   */
  return (
    <div className="input-field" style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
