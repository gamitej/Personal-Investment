import { useCallback, useEffect, useRef, useState } from "react";
import "./Dropdown.scss";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

interface DropdownProps {
  width?: string;
  label?: string;
  selectedValue: number | string | null;
  onChange: (value: string | number) => void;
  options: { label: string | number; value: string | number }[];
}

const Dropdown = ({
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

    if (heightDiff < 100) return { bottom: "2.6rem" };
    return { top: "2.6rem" };
  }, []);

  /**
   * TSX
   */
  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${showOptions && "active"}`}
      style={{ width }}
    >
      <div className="dropdown-title" onClick={handleOpen}>
        <div>{selectedValue === null ? "select" : selectedValue} </div>
        {showOptions ? (
          <IoMdArrowDropdown className="icon" />
        ) : (
          <IoMdArrowDropright className="icon" />
        )}
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
                {item.label}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
