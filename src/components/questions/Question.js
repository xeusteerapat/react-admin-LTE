import React from 'react';
import dayjs from 'dayjs';
import useToggle from '../../hooks/useToggle';
import EditQuestion from './EditQuestion';

const Question = ({
  id,
  question,
  deleteQuestion,
  updateQuestion,
  updatedAt,
}) => {
  const [isEdit, toggle] = useToggle();
  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        {isEdit ? (
          <EditQuestion
            id={id}
            question={question}
            updateQuestion={updateQuestion}
            toggle={toggle}
          />
        ) : (
          <td onDoubleClick={toggle}>{question}</td>
        )}
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
