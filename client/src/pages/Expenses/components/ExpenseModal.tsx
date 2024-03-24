import { FC } from "react";
import "./ExpenseModal.scss";
import Modal from "@/components/modal/Modal";

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpenseModal: FC<ExpenseModalProps> = ({ isOpen, onClose }) => {
  /**
   * TSX
   */
  return (
    <Modal title="Add Expense" isOpen={isOpen} onClose={onClose}>
      <div>
        <form onSubmit={() => {}}>
          <input type="date" />
          <input type="text" placeholder="expense desc..." />
          <input type="" />
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
