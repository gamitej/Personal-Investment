import { MouseEvent } from "react";
import "./AddButton.scss";
import { LuPlus } from "react-icons/lu";

interface AddButtonProps {
  label?: string;
  handleClick: (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => void;
}

const AddButton = ({ handleClick, label = "Add New" }: AddButtonProps) => {
  return (
    <button onClick={handleClick}>
      <LuPlus /> {label}
    </button>
  );
};

export default AddButton;
