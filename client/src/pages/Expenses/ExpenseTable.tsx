import "./Expenses.scss";
// components
import Table from "@/components/table/Table";
import Dropdown from "@/components/dropdown/Dropdown";
import AddButton from "@/components/button/AddButton";

const cols = [
  { label: "S.no", value: "no", width: "2rem" },
  { label: "Date", value: "date", width: "3rem" },
  { label: "Description", value: "desc", width: "10rem" },
  { label: "Amount", value: "amount", width: "5rem" },
  { label: "For", value: "for", width: "3rem" },
];

const rows = [
  {
    no: "1",
    date: "20-01-23",
    desc: "recharge",
    amount: "Rs 3200",
    for: "Home",
  },
  {
    no: "1",
    date: "20-01-23",
    desc: "petrol",
    amount: "Rs 3200",
    for: "Wife",
  },
];

interface ExpenseTableProps {
  handleClick: () => void;
}

const ExpenseTable = ({ handleClick }: ExpenseTableProps) => {
  /**
   * TSX
   */
  return (
    <div>
      <Table
        showEntriesPerPage={5}
        cols={cols}
        rows={rows}
        title="Expenses"
        tableHeight="calc(100vh - 25.5rem)"
        additionalLeftSideToolbarComp={
          <div className="additional-comp">
            <AddButton handleClick={handleClick} />
            <Dropdown
              options={[]}
              label="Periodicity"
              onChange={() => {}}
              selectedValue={null}
            />
          </div>
        }
      />
    </div>
  );
};

export default ExpenseTable;
