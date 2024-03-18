import "./Table.scss";
import { useMemo, useState } from "react";
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
  const showEntriesPerPage = 5;
  const totalItems = rows.length;
  const totalPage = Math.ceil(totalItems / showEntriesPerPage);

  const [pageNo, setPageNo] = useState<number>(1);

  const handleNext = () => {
    if (pageNo < totalPage) {
      setPageNo((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo((prev) => prev - 1);
    }
  };

  const paginatedData = useMemo(() => {
    const data = rows.slice(
      (pageNo - 1) * showEntriesPerPage,
      pageNo * showEntriesPerPage
    );
    return data;
  }, [rows, pageNo]);

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
            {paginatedData.map((item, idx) => (
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
        <div className="footer-left">
          Showing {pageNo} of {totalPage} entries
        </div>
        <div className="footer-right">
          <div
            className={`${pageNo === 1 ? "active" : "icon"}`}
            onClick={handlePrev}
          >
            <FaRegArrowAltCircleLeft />
          </div>
          <div
            className={`${pageNo === totalPage ? "active" : "icon"}`}
            onClick={handleNext}
          >
            <FaRegArrowAltCircleRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
