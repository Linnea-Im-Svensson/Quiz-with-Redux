import React, { useState } from 'react';
import {
  useQuiz,
  setName,
  setAnswers,
  setNewQuestionName,
  addQuestion,
  setPreview,
} from '../redux/quiz';
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
import QuestionPreview from './QuestionPreview';

function Admin() {
  const { admin } = useQuiz();

  console.log(admin);

  return (
    <div className='flex md:flex-row flex-col mt-20 items-center justify-between gap-4 w-full '>
      <form
        action=''
        className='flex flex-col border-2 py-4 px-10 rounded-lg mr-auto h-[600px] bg-white'
      >
        <label htmlFor='name'>Quiz name:</label>
        <input
          className='border-2 mb-8'
          type='text'
          id='name'
          value={admin.quizName}
          onChange={(e) => setName(e.target.value)}
        />
        <div className='flex flex-col w-96'>
          <label htmlFor={`question ${admin.questionCount + 1}`}>
            Question {admin.questions.length + 1}
          </label>
          <input
            className='border-2'
            type='text'
            id={`question ${admin.questionCount + 1}`}
            value={admin.newQuestion}
            onChange={(e) => setNewQuestionName(e.target.value)}
          />
        </div>
        <h2>Answers:</h2>
        <div className='flex flex-col w-96'>
          <label
            className='text-green-600 font-semibold'
            htmlFor='correctAnswer'
          >
            Correct answer
          </label>
          <input
            className='border-2'
            type='text'
            id='correctAnswer'
            value={admin.answers.correctAnswer}
            onChange={(e) => setAnswers(e.target)}
          />
        </div>
        <div className='flex flex-col w-96'>
          <label className='text-red-600 font-semibold' htmlFor='option-1'>
            Option 1
          </label>
          <input
            className='border-2'
            type='text'
            id='option-1'
            value={admin.answers.option1}
            onChange={(e) => setAnswers(e.target)}
          />
        </div>

        <div className='flex flex-col w-96'>
          <label className='text-red-600 font-semibold' htmlFor='option-2'>
            Option 2
          </label>
          <input
            className='border-2'
            type='text'
            id='option-2'
            value={admin.answers.option2}
            onChange={(e) => setAnswers(e.target)}
          />
        </div>
        <div className='flex flex-col w-96'>
          <label className='text-red-600 font-semibold' htmlFor='option-3'>
            Option 3
          </label>
          <input
            className='border-2 mb-8'
            type='text'
            id='option-3'
            value={admin.answers.option3}
            onChange={(e) => setAnswers(e.target)}
          />
        </div>
        <button
          className='flex items-center justify-center h-10 w-32 bg-slate-300 rounded-lg mb-10'
          onClick={(e) => (addQuestion(), e.preventDefault())}
        >
          Add Question
        </button>
        <button className='w-full h-10 bg-slate-300 p-2 rounded-lg'>
          Add Game
        </button>
      </form>
      <div className='w-[800px] mb-auto'>
        {admin.questions.length !== 0 ? (
          <div className='flex justify-between items-center p-2'>
            <p>Total number of questions: {admin.questions.length}</p>
            {admin.preview === true ? (
              <button onClick={() => setPreview()}>
                <IoIosArrowDropupCircle className='text-3xl' />
              </button>
            ) : (
              <button onClick={() => setPreview()}>
                <IoIosArrowDropdownCircle className='text-3xl' />
              </button>
            )}
          </div>
        ) : (
          ''
        )}
        <ul
          className={` grid gap-4 lg:grid-cols-2 grid-cols-1 max-h-[570px] overflow-scroll p-2 bg-white rounded-lg ${
            admin.preview ? 'block' : 'hidden'
          }`}
        >
          {admin.questions.map((item, index) => {
            return <QuestionPreview key={item.id} item={item} index={index} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
