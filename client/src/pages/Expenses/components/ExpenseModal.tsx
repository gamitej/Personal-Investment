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
  desc: string | null;
  date: Date | null;
  amount: number;
  reason: string | null;
}

const ExpenseModal: FC<ExpenseModalProps> = ({ isOpen, onClose }) => {
  const [expenseForm, setExpenseForm] = useState<FormField>({
    reason: null,
    desc: null,
    amount: 0,
    date: new Date(),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setExpenseForm({ ...expenseForm, [id]: value });
  };

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
            <DateField
              width="30%"
              id="date"
              onChange={handleChange}
              value={expenseForm.date}
            />
            {/* amount */}
            <InputField
              width="70%"
              id="amount"
              type="number"
              label="Amount (Rs)"
              onChange={handleChange}
              value={expenseForm.amount}
              placeholder="Enter amount..."
            />
          </div>
          <div className="row-2">
            {/* description */}
            <InputField
              id="desc"
              type="text"
              label="Description"
              onChange={handleChange}
              value={expenseForm.desc}
              placeholder="Write description..."
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ExpenseModal;
