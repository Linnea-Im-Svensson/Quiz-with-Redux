import React from 'react';
import { deleteQuestion, editMode } from '../redux/quiz';
import { BsPencil } from 'react-icons/bs';

function QuestionPreview({ item, index }) {
  return (
    <li className='relative border-2 p-4 rounded-lg w-full'>
      <button
        className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 rounded-full'
        onClick={() => deleteQuestion(item.id)}
      >
        X
      </button>
      <button
        className='absolute top-2 right-12 w-8 h-8 flex items-center justify-center border-2 rounded-full'
        onClick={() => editMode(item)}
      >
        <BsPencil />
      </button>
      <h2>Question {index + 1}</h2>
      <p className='my-2'>{item.question}</p>
      <div className='flex flex-col rounded-lg'>
        <div className='bg-green-300 p-2 rounded-t-lg border-2 border-black'>
          <p className='text-sm'>Correct Answer:</p>
          <p>{item.correctAnswer}</p>
        </div>
        <div className='bg-red-300 p-2 border-x-2 border-b-2 border-black'>
          <p className='text-sm'>Option 1:</p>
          <p>{item.option1}</p>
        </div>
        <div className='bg-red-300 p-2 border-x-2 border-black'>
          <p className='text-sm'>Option 2: </p>
          <p>{item.option2}</p>
        </div>
        <div className='bg-red-300 p-2 rounded-b-lg border-2 border-black'>
          <p className='text-sm'>Option 3: </p>
          <p>{item.option3}</p>
        </div>
      </div>
    </li>
  );
}

export default QuestionPreview;
