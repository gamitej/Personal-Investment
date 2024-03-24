import { FC, useState } from "react";
import "./ExpenseModal.scss";
import Modal from "@/components/modal/Modal";
import Dropdown from "@/components/dropdown/Dropdown";
import DateField from "@/components/fields/date/DateField";
import InputField from "@/components/fields/input/InputField";
import { expenseOptions } from "../data";

interface ExpenseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormField {
  reason: string | null;
}

const ExpenseModal: FC<ExpenseModalProps> = ({ isOpen, onClose }) => {
  const [expenseForm, setExpenseForm] = useState<FormField>({ reason: null });

  /**
   * TSX
   */
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      modalWidth="40rem"
      title="Add Expense"
      modalHeight="fit-content"
    >
      <div className="expense-modal">
        <form onSubmit={() => {}}>
          {/* for dropdown */}
          <Dropdown
            label="Reason"
            width="8rem"
            options={expenseOptions}
            selectedValue={expenseForm.reason}
            onChange={(value: string) =>
              setExpenseForm({ ...expenseForm, reason: value })
            }
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
