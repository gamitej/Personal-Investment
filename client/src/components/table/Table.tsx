import "./Table.scss";

const Table = ({ title = "title" }) => {
  return (
    <div className="table">
      <div className="table-toolbar">
        <div className="table-toolbar-left">
          <p>{title}</p>
        </div>
        <div className="table-toolbar-right"></div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>City</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Amitej</td>
            <td>Bhopal</td>
            <td>Bhopal</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Amitej</td>
            <td>Bhopal</td>
            <td>Bhopal</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Amitej</td>
            <td>Bhopal</td>
            <td>Bhopal</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
