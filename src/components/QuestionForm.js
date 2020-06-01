import React from 'react';
import { Link } from 'react-router-dom';
import axios from '../config/axios.config';

const QuestionForm = () => {
  return (
    <div className='content-wrapper'>
      <div className='card-body'>
        <h1>Add New Question</h1>
      </div>
      <form>
        <div className='card-body'>
          <div className='form-group'>
            <label htmlFor='question'>Title</label>
            <input
              type='text'
              className='form-control'
              id='question'
              placeholder='Enter new question'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='axid'>Axis</label>
            <input
              type='text'
              className='form-control'
              id='axid'
              placeholder='Add Axid ID'
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
  );
};

export default QuestionForm;
