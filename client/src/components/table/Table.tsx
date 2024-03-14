import "./Table.scss";

interface TableProps {
  cols: { label: string; value: string }[];
  rows: { [key: string]: string }[];
}

const Table = ({ cols = [], rows = [] }: TableProps) => {
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
