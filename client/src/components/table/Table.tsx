import "./Table.scss";
import { useState } from "react";
// icons
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

interface TableProps {
  title?: string;
  tableHeight?: string;
  rows: { [key: string]: string }[];
  cols: { label: string; value: string }[];
}

const Table = ({
  title = "title",
  cols = [],
  rows = [],
  tableHeight = "300px",
}: TableProps) => {
  const totalItems = rows.length;

  const [pageNo, setPageNo] = useState<number>(0);

  /**
   * TSX
   */
  return (
    <div className="table">
      {/* table toolbar*/}
      <div className="table-toolbar">
        <div className="toolbar-left">
          <p>{title}</p>
        </div>
        <div className="toolbar-right">
          <div></div>
          <div>
            <input type="text" placeholder="search..." />
          </div>
        </div>
      </div>
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
      {/* table footer */}
      <div className="table-footer">
        <div className="footer-left">Showing 1 of 3 entries</div>
        <div className="footer-right">
          <div
            className={`${pageNo === 0 ? "active" : "icon"}`}
            onClick={() => setPageNo((prev) => prev - 1)}
          >
            <FaRegArrowAltCircleLeft />
          </div>
          <div
            className={`${pageNo === totalItems ? "active" : "icon"}`}
            onClick={() => setPageNo((prev) => prev + 1)}
          >
            <FaRegArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
