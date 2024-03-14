import "./Table.scss";

interface TableProps {
  cols: { label: string; value: string }[];
}

const Table = ({ cols = [], rows = [] }: TableProps) => {
  const cols: object[] = [
    { label: "Code", value: "code" },
    { label: "Company", value: "company" },
    { label: "Price", value: "price" },
    { label: "Change", value: "change" },
    { label: "Date", value: "date" },
  ];

  const rows: object[] = [
    {
      code: "AAC",
      company: "Aus",
      price: "200",
      change: "+2.01",
      date: "2 Mar",
    },
  ];

  /**
   * TSX
   */
  return (
    <div className="table">
      {/* table head */}
      <div className="table-header">
        <table>
          <thead>
            <tr>
              {cols.map((item, idx) => (
                <th key={idx}>{item.label}</th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
      {/* table body */}
      <div className="table-body">
        <table>
          <tbody>
            {rows.map((item, idx) => (
              <tr key={idx}>
                {cols.map(({ value }, colsIdx) => (
                  <td key={`cols-${colsIdx}`}>{item[value]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
