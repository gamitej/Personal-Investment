import "./DateField.scss";
import { FC } from "react";

interface DateFieldProps {
  id: string;
  width?: string;
  label?: string;
  onChange: () => void;
}

const DateField: FC<DateFieldProps> = ({
  id = "date-id",
  width = "100%",
  label = "Select Date",
  onChange,
}) => {
  /**
   * TSX
   */
  return (
    <div className="date-field" style={{ width: width }}>
      <label htmlFor={id}>{label}</label>
      <input type="date" id={id} onChange={onChange} />
    </div>
  );
};

export default DateField;
