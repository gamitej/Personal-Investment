import "./DateField.scss";

const DateField = ({ label = "Select Date" }) => {
  /**
   * TSX
   */
  return (
    <div className="date-field">
      <label>{label}</label>
      <input type="date" id="date-input" onChange={() => {}} />
    </div>
  );
};

export default DateField;
