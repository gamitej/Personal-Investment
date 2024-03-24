import "./Expenses.scss";
import { useState } from "react";
// components
import MajorExpense from "./MajorExpense";
import ExpenseTable from "./ExpenseTable";
import LastSixMonth from "./LastSixMonth";
import ExpenseModal from "./components/ExpenseModal";
import AddButton from "@/components/button/AddButton";

const Expenses = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /**
   * TSX
   */
  return (
    <div className="expenses">
      <div className="container">
        {/* EXPENSE TABLE */}
        <div className="expense-table">
          <ExpenseTable handleClick={() => setIsModalOpen(true)} />
          <ExpenseModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        {/* MONTHLY EXPENSE */}
        <div className="right">
          <div className="expense-right-top">
            <h3>Monthy Expense</h3>
            <MajorExpense />
            <div className="add-btn">
              <AddButton size="sm" handleClick={() => setIsModalOpen(true)} />
            </div>
          </div>
          {/* LAST 6 MONTH */}
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
