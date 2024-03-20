import "./Expenses.scss";
// components
import Table from "@/components/table/Table";
import Dropdown from "@/components/dropdown/Dropdown";
import AddButton from "@/components/button/AddButton";

const cols = [
  { label: "Code", value: "code", width: "3rem" },
  { label: "Company", value: "company", width: "10rem" },
  { label: "Price", value: "price", width: "5rem" },
  { label: "Change", value: "change", width: "3rem" },
  { label: "Date", value: "date", width: "3rem" },
];

const rows = [
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
  },
  {
    code: "AAC",
    company: "Aus adas ddasd ad sadsad asdsad",
    price: "200",
    change: "+2.01",
    date: "hi",
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
            <Dropdown onChange={() => {}} options={[]} selectedValue={null} />
          </div>
        }
      />
    </div>
  );
};

export default ExpenseTable;
