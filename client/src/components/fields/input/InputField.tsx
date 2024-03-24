import "./InputField.scss";

const InputField = ({
  id = "input-id",
  type = "text",
  width = "100%",
  label = "Label",
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
        onChange={() => {}}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
