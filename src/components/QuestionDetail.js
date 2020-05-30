import React from 'react';
import { Link } from 'react-router-dom';

const QuestionDetail = ({ id }) => {
  return (
    <div className='content-wrapper'>
      {/* Content Header (Page header) */}
      <section className='content-header'>
        <div className='container-fluid'>
          <div className='row mb-2'>
            <div className='col-sm-6'>
              <h1>Question details</h1>
            </div>
            <div className='col-sm-6'>
              <ol className='breadcrumb float-sm-right'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item active'>Blank Page</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className='content'>
        {/* Default box */}
        <div className='card'>
          <div className='card-header'>
            <h3 className='card-title'>Question Title</h3>
            <div className='card-tools'>
              <button
                type='button'
                className='btn btn-tool'
                data-card-widget='collapse'
                data-toggle='tooltip'
                title='Collapse'
              >
                <i className='fas fa-minus' />
              </button>
              <button
                type='button'
                className='btn btn-tool'
                data-card-widget='remove'
                data-toggle='tooltip'
                title='Remove'
              >
                <i className='fas fa-times' />
              </button>
            </div>
          </div>
          <div className='card-body'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
            aliquam eum ipsum aperiam laborum nam quos numquam commodi, optio
            sequi perferendis obcaecati sunt dignissimos veritatis ipsam
            cupiditate dolor, dicta impedit.
          </div>
          {/* /.card-body */}
          <div className='card-footer'>
            <Link to='/questions'>
              <button className='btn btn-secondary'>Back</button>
            </Link>
          </div>
          {/* /.card-footer*/}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default QuestionDetail;
