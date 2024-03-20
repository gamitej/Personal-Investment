// icons
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

interface TableFooterProps {
  pageNo: number;
  totalPage: number;
  setPageNo: (num: number) => void;
}

const TableFooter: React.FC<TableFooterProps> = ({
  pageNo,
  totalPage,
  setPageNo,
}) => {
  const handleNext = () => {
    if (pageNo < totalPage) {
      setPageNo(pageNo + 1);
    }
  };

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };
  /**
   * TSX
   */
  return (
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
  );
};

export default TableFooter;
