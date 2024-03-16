import "./Table.scss";

interface TableProps {
  tableHeight?: string;
  rows: { [key: string]: string }[];
  cols: { label: string; value: string }[];
}

const Table = ({ cols = [], rows = [], tableHeight = "300px" }: TableProps) => {
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
      <div className="table-body" style={{ height: tableHeight }}>
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
