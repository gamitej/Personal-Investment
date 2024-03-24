import { FC } from "react";
import "./ExpenseModal.scss";
import Modal from "@/components/modal/Modal";
import Dropdown from "@/components/dropdown/Dropdown";
import DateField from "@/components/fields/date/DateField";
import InputField from "@/components/fields/input/InputField";

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpenseModal: FC<ExpenseModalProps> = ({ isOpen, onClose }) => {
  /**
   * TSX
   */
  return (
    <Modal
      title="Add Expense"
      modalWidth="40rem"
      modalHeight="fit-content"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="expense-modal">
        <form onSubmit={() => {}}>
          {/* for dropdown */}
          <Dropdown
            label="For"
            options={[]}
            onChange={() => {}}
            selectedValue={null}
          />
          <div className="row-1">
            {/* date */}
            <DateField width="30%" value={null} id="date" onChange={() => {}} />
            {/* amount */}
            <InputField
              width="70%"
              id="amount"
              value=""
              type="number"
              onChange={() => {}}
              label="Amount (Rs)"
              placeholder="Enter amount..."
            />
          </div>
          <div className="row-2">
            {/* description */}
            <InputField
              id="desc"
              value=""
              type="text"
              onChange={() => {}}
              label="Description"
              placeholder="Enter description..."
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
