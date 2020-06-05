import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from '../../config/axios.config';

const QuestionForm = () => {
  const initialValue = {
    question: '',
    axis_id: '',
  };

  const [formdata, setFormdata] = useState(initialValue);
  const [redirect, setRedirect] = useState(false);
  const { question, axis_id } = formdata;

  const handleChange = e => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const body = {
      question,
      axis_id,
    };

    await axios.post('/question/questions', body);
    setFormdata(initialValue);

    setTimeout(() => setRedirect(true), 500);
  };

  return (
    <>
      {redirect ? <Redirect to='/questions' /> : null}
      <div className='content-wrapper'>
        <div className='card-body'>
          <h1>Add New Question</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='card-body'>
            <div className='form-group'>
              <label>Title</label>
              <input
                type='text'
                className='form-control'
                name='question'
                value={question}
                placeholder='Enter new question'
                onChange={handleChange}
              />
            </div>
            <div className='form-group'>
              <label>Axis</label>
              <input
                type='text'
                className='form-control'
                name='axis_id'
                value={axis_id}
                placeholder='Add Axid ID'
                onChange={handleChange}
              />
            </div>
          </div>
          {/* /.card-body */}
          <div className='card-footer'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
        <div className='card-body'>
          <Link to='/questions' className='btn btn-secondary'>
            Back to all questions
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
