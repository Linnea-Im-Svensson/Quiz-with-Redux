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

function Admin() {
  const { admin } = useQuiz();

  console.log(admin);

  return (
    <div className='flex md:flex-row flex-col items-center justify-between gap-4 w-full '>
      <form
        action=''
        className='flex flex-col border-2 py-4 px-10 rounded-lg mr-auto h-[600px]'
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
          className={` grid gap-4 lg:grid-cols-2 grid-cols-1 max-h-[570px] overflow-scroll pr-2 ${
            admin.preview ? 'block' : 'hidden'
          }`}
        >
          {admin.questions.map((item, index) => {
            return (
              <li key={item.id} className='border-2 p-4 rounded-lg'>
                <h2>Question {index + 1}</h2>
                <p className='my-2'>{item.question}</p>
                <div className='flex flex-col border-2 rounded-lg border-black'>
                  <p className='bg-green-300 p-2 rounded-t-lg border-b-2 border-black'>
                    Correct Answer: {item.correctAnswer}
                  </p>
                  <p className='bg-red-300 p-2 border-b-2 border-black'>
                    Option 1: {item.option1}
                  </p>
                  <p className='bg-red-300 p-2 border-b-2 border-black'>
                    Option 2: {item.option2}
                  </p>
                  <p className='bg-red-300 p-2 rounded-b-lg'>
                    Option 3: {item.option3}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
