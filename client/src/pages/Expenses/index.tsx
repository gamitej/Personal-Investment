import Modal from "@/components/modal/Modal";
import "./Expenses.scss";
import ExpenseTable from "./ExpenseTable";
import MajorExpense from "./MajorExpense";
import { useState } from "react";

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
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
        <div className="right">
          <div className="expense-right-top">
            <MajorExpense />
          </div>
          <div className="expense-right-bottom">
            <div>Last 6 month expenses bar chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
