import React from 'react';
import useForm from '../../hooks/useForm';

const EditForm = ({ id, question, updateQuestion, toggle }) => {
  const [value, handleChange, reset] = useForm(question);

  const handleSubmit = e => {
    e.preventDefault();
    updateQuestion(id, value);
    reset();
    toggle();
  };

  return (
    <>
      <input
        type='text'
        className='form-control'
        value={value}
        onChange={handleChange}
      />
      <button className='btn btn-primary' onSubmit={handleSubmit}>
        Save
      </button>
    </>
  );
};

export default EditForm;
