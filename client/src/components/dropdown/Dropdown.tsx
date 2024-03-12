import { useState } from "react";
import "./Dropdown.scss";
import { FaAngleDown } from "react-icons/fa6";

interface DropdownProps {
  selectedValue: string | null;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const Dropdown = ({ selectedValue, options = [], onChange }: DropdownProps) => {
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow((prev) => !prev);
  };

  const handleChange = (value: string) => {
    handleOpen();
    onChange(value);
  };

  /**
   * TSX
   */
  return (
    <div className="dropdown">
      <div className="dropdown-title" onClick={handleOpen}>
        <div>{selectedValue === null ? "select" : selectedValue} </div>
        <FaAngleDown className="icon" />
      </div>
      {show && (
        <div className="dropdown-options">
          {options.map((item, idx) => (
            <div
              className="option"
              key={`${idx}-options`}
              onClick={() => handleChange(item.value)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
