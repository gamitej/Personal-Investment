import "./Expenses.scss";

const Expenses = () => {
  return (
    <div className="expenses">
      <div className="container">
        <div className="expense-table">
          <div>Expenses table</div>
        </div>
        <div className="right">
          <div className="expense-right-top">
            <div>Major expenses</div>
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
