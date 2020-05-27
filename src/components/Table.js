import React from 'react';

const Table = ({ id, question, updatedAt }) => {
  return (
    <div className="card-body">
      <table id="example2" className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Question</th>
            <th>updatedAt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{question}</td>
            <td>{updatedAt}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
