import "./Expenses.scss";
import ExpenseTable from "./ExpenseTable";
import MajorExpense from "./MajorExpense";

const Expenses = () => {
  /**
   * TSX
   */
  return (
    <div className="expenses">
      <div className="container">
        <div className="expense-table">
          <ExpenseTable />
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
