import React, { useState, useEffect } from 'react';
import axios from '../config/axios.config';
import Table from './Table';

const Question = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    const response = await axios.get('/question/questions');
    setQuestions(response.data);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <div className="content-wrapper">
      <h1>Question</h1>
      {questions.map(question => (
        <Table
          key={question.id}
          id={question.id}
          question={question.question}
          updatedAt={question.updatedAt}
        />
      ))}
    </div>
  );
};

export default Question;
