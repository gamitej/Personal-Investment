import { useState } from "react";
import "./Dropdown.scss";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

interface DropdownProps {
  width?: string;
  label?: string;
  selectedValue: string | null;
  onChange: (value: string) => void;
  options: { label: string; value: string }[];
}

const Dropdown = ({
  width = "8rem",
  selectedValue,
  options = [],
  onChange,
}: DropdownProps) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleOpen = () => {
    setShowOptions((prev) => !prev);
  };

  const handleChange = (value: string) => {
    handleOpen();
    onChange(value);
  };

  /**
   * TSX
   */
  return (
    <div className={`dropdown ${showOptions && "active"}`} style={{ width }}>
      <div className="dropdown-title" onClick={handleOpen}>
        <div>{selectedValue === null ? "select" : selectedValue} </div>
        {showOptions ? (
          <IoMdArrowDropdown className="icon" />
        ) : (
          <IoMdArrowDropright className="icon" />
        )}
      </div>
      {showOptions && (
        <div className="dropdown-options">
          {options?.length === 0 && (
            <div className="option" onClick={() => setShowOptions(false)}>
              None
            </div>
          )}
          {options?.length > 0 &&
            options?.map((item, idx) => (
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
