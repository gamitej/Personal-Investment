import { useCallback, useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

interface DropdownProps {
  label: string;
  width?: string;
  selectedValue: number | string | null;
  onChange: (value: string | number) => void;
  options: { label: string | number; value: string | number }[];
}

const Dropdown = ({
  label = "label",
  width = "8rem",
  selectedValue,
  options = [],
  onChange,
}: DropdownProps) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showOptions, setShowOptions] = useState(false);

  // ================ EVENT-HANDLERS =================

  const handleOpen = () => {
    setShowOptions((prev) => !prev);
  };

  const handleChange = (value: string | number) => {
    handleOpen();
    onChange(value);
  };

  // =================== USE-EFFECT ===================

  // Effect to handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  // Function to calculate the dropdown position
  const calculateDropdownPosition = useCallback(() => {
    if (!dropdownRef.current) return;

    const dropdownRect = dropdownRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const heightDiff = Math.abs(dropdownRect.bottom - windowHeight);

    if (heightDiff < 100) return { bottom: "2.8rem" };
    return { top: "2.8rem" };
  }, []);

  /**
   * TSX
   */
  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${showOptions && "active"}`}
      style={{ width: width }}
    >
      {selectedValue !== null && <label>{label}</label>}
      <div className="dropdown-title" onClick={handleOpen}>
        <div
          className="selected-option"
          title={`${
            selectedValue === null ? `Select ${label}` : selectedValue
          }`}
        >
          {selectedValue === null ? `Select ${label}` : selectedValue}
        </div>
        <div>
          {showOptions ? (
            <IoMdArrowDropdown className="icon" />
          ) : (
            <IoMdArrowDropright className="icon" />
          )}
        </div>
      </div>
      {showOptions && (
        <div
          className="dropdown-options"
          style={{ ...calculateDropdownPosition() }}
        >
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
                <span title={`${item.label}`}>{item.label}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
