import React from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

const Question = ({ id, question, deleteQuestion, updatedAt }) => {
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>
          <Link to={`/question/${id}`}>{question}</Link>
        </td>
        <td>{dayjs(updatedAt).format('YYYY-MMMM-DD HH:mm a')}</td>
        <td>
          <button className='btn btn-danger' onClick={() => deleteQuestion(id)}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Question;
