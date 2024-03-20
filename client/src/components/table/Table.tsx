import "./Table.scss";
import { FC, useMemo, useState } from "react";
// components
import TableToolbar from "./TableToolbar";
import TableFooter from "./TableFooter";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
// types
import { TableBodyProps, TableToolbarProps } from "./type";

interface TableProps extends TableBodyProps, TableToolbarProps {
  title: string;
  showEntriesPerPage?: 5 | 10 | 15 | 25;
}

const Table: FC<TableProps> = ({
  title = "title",
  cols = [],
  rows = [],
  tableHeight = "300px",
  showEntriesPerPage = 5,
  additionalLeftSideToolbarComp,
}) => {
  const [pageNo, setPageNo] = useState<number>(1);
  const [paginationValue, setPaginationValue] =
    useState<any>(showEntriesPerPage);

  const totalItems = rows.length;
  const totalPage = Math.ceil(totalItems / paginationValue);

  // function to return selected page rows
  const selectedPageRowsData = useMemo(() => {
    const data = rows.slice(
      (pageNo - 1) * paginationValue,
      pageNo * paginationValue
    );
    return data;
  }, [rows, pageNo, paginationValue]);

  /**
   * TSX
   */
  return (
    <div className="table-main">
      <h3 className="title">{title}</h3>
      {/* table toolbar */}
      <TableToolbar
        additionalLeftSideToolbarComp={additionalLeftSideToolbarComp}
      />
      <div className="table">
        {/* table head */}
        <TableHead cols={cols} />
        {/* table body */}
        <TableBody
          cols={cols}
          tableHeight={tableHeight}
          rows={selectedPageRowsData}
        />
      </div>
      {/* table footer */}
      <TableFooter
        pageNo={pageNo}
        totalPage={totalPage}
        setPageNo={setPageNo}
        paginationValue={paginationValue}
        setPaginationValue={setPaginationValue}
      />
    </div>
  );
};

export default Table;
