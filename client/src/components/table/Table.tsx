import "./Table.scss";

const Table = () => {
  return (
    <div className="table">
      {/* table head */}
      <div className="table-toolbar">
        <div className="toolbar">
          <p>S.no</p>
          <p>Name</p>
          <p>Price</p>
          <p>City</p>
        </div>
      </div>
      {/* table body */}
      <div className="table-body">
        <div className="">
          <p>1</p>
          <p>Amitej</p>
          <p>Rs 200</p>
          <p>Bhopal</p>
        </div>
      </div>
    </div>
  );
};

export default Table;
