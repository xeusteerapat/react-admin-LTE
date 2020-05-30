import React, { useState, useEffect } from 'react';
import Question from './Question';
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
          <tbody>
            {questions.map(question => (
              <Question
                key={question.id}
                id={question.id}
                question={question.question}
                deleteQuestion={deleteQuestion}
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
