import "./Expenses.scss";
import { useState } from "react";
// components
import MajorExpense from "./MajorExpense";
import ExpenseTable from "./ExpenseTable";
import LastSixMonth from "./LastSixMonth";
import Modal from "@/components/modal/Modal";
import AddButton from "@/components/button/AddButton";

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * TSX
   */
  return (
    <div className="expenses">
      <div className="container">
        <div className="expense-table">
          <ExpenseTable handleClick={() => setIsModalOpen(true)} />
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            hi
          </Modal>
        </div>
        <div className="right">
          <div className="expense-right-top">
            <h3>Monthy Expense</h3>
            <MajorExpense />
            <div className="add-btn">
              <AddButton size="sm" handleClick={() => setIsModalOpen(true)} />
            </div>
          </div>
          <div className="expense-right-bottom">
            <h3>Last 6 Months Expense</h3>
            <LastSixMonth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
