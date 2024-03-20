import Dropdown from "@/components/dropdown/Dropdown";
import "./Expenses.scss";
import Table from "@/components/table/Table";
import AddButton from "@/components/button/AddButton";

const cols = [
  { label: "Code", value: "code", width: "10rem" },
  { label: "Company", value: "company", width: "20rem" },
  { label: "Price", value: "price", width: "25rem" },
  { label: "Change", value: "change", width: "13rem" },
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

const Expenses = () => {
  /**
   * TSX
   */
  return (
    <div className="expenses">
      <div className="container">
        <div className="expense-table">
          <div>
            <Table
              showEntriesPerPage={10}
              title="Expenses"
              tableHeight="300px"
              cols={cols}
              rows={rows}
              additionalLeftSideToolbarComp={
                <div className="additional-comp">
                  <AddButton handleClick={() => {}} />
                  <Dropdown
                    onChange={() => {}}
                    options={[]}
                    selectedValue={null}
                  />
                </div>
              }
            />
          </div>
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
