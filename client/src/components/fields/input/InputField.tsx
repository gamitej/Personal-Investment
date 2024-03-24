import "./InputField.scss";

const InputField = ({
  type = "text",
  label = "Label",
  placeholder = "Enter...",
}) => {
  /**
   * TSX
   */
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={() => {}} />
    </div>
  );
};

export default InputField;
