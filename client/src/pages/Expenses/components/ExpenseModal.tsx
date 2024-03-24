import { FC } from "react";
import "./ExpenseModal.scss";
import Modal from "@/components/modal/Modal";
import Dropdown from "@/components/dropdown/Dropdown";

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
      modalHeight="26rem"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="expense-modal">
        <form onSubmit={() => {}}>
          <Dropdown onChange={() => {}} options={[]} selectedValue={null} />
          <input type="date" id="date" />
          <div className="input-field">
            <label>Amount (Rs)</label>
            <input type="number" placeholder="Enter amount..." />
          </div>
          <div className="input-field">
            <label>Desciption</label>
            <input type="text" placeholder="Description..." />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
