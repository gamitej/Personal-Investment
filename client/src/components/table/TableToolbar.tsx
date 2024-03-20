import { FC } from "react";
import { TableToolbarProps } from "./type";

const TableToolbar: FC<TableToolbarProps> = ({
  additionalLeftSideToolbarComp,
}) => {
  /**
   * TSX
   */
  return (
    <div className="table-toolbar">
      <div className="toolbar-left">{additionalLeftSideToolbarComp}</div>
      <div className="toolbar-right">
        <div></div>
        <div>
          <input type="text" placeholder="search..." />
        </div>
      </div>
    </div>
  );
};

export default TableToolbar;
