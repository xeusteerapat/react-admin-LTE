import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Question from './Question';
import axios from '../../config/axios.config';

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

  const updateQuestion = async (id, newQuestion) => {
    const body = {
      question: newQuestion,
    };

    await axios.put(`/question/questions/${id}`, body);
    fetchData();
  };

  return (
    <div className='content-wrapper'>
      <div className='card-body'>
        <h1>All Questions</h1>
        <Link to='/addquestion' className='btn btn-primary my-2'>
          Add New Question
        </Link>
        <table className='table table-bordered table-hover'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Question</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {questions.map(question => (
              <Question
                key={question.id}
                id={question.id}
                question={question.question}
                deleteQuestion={deleteQuestion}
                updateQuestion={updateQuestion}
                updatedAt={question.updatedAt}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuestionTable;
