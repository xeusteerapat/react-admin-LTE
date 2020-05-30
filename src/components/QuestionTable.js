import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import axios from '../config/axios.config';

const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('/question/questions');
    setQuestions(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteQuestion = async id => {
    await axios.delete(`/question/questions/${id}`);
    fetchData();
  };

  const questionTable = questions.map(question => (
    <tr key={question.id}>
      <td>{question.id}</td>
      <td>
        <Link to={`/question/${question.id}`}>{question.question}</Link>
      </td>
      <td>{dayjs(question.updatedAt).format('YYYY-MMMM-DD HH:mm a')}</td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteQuestion(question.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className='content-wrapper'>
      <h1>All questions</h1>
      <div className='card-body'>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{questionTable}</tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionTable;
