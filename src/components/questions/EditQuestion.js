import React from 'react';
import useForm from '../../hooks/useForm';

const EditForm = ({ id, question, updateQuestion }) => {
  const [value, handleChange] = useForm(question);

  return (
    <>
      <td>
        <form action=''>
          <input
            type='text'
            className='form-control'
            value={value}
            onChange={handleChange}
          />
          <button
            className='btn btn-primary'
            onClick={() => updateQuestion(id, value)}
          >
            Save
          </button>
        </form>
      </td>
    </>
  );
};

export default EditForm;
