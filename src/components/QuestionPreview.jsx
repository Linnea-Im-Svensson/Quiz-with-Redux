import React from 'react';
import { deleteQuestion } from '../redux/quiz';

function QuestionPreview({ item, index }) {
  return (
    <li className='relative border-2 p-4 rounded-lg'>
      <button
        className='absolute top-2 right-2 w-8 h-8 flex items-center justify-center border-2 rounded-full'
        onClick={() => deleteQuestion(item.id)}
      >
        X
      </button>
      <h2>Question {index + 1}</h2>
      <p className='my-2'>{item.question}</p>
      <div className='flex flex-col rounded-lg'>
        <p className='bg-green-300 p-2 rounded-t-lg border-2 border-black'>
          Correct Answer: {item.correctAnswer}
        </p>
        <p className='bg-red-300 p-2 border-x-2 border-b-2 border-black'>
          Option 1: {item.option1}
        </p>
        <p className='bg-red-300 p-2 border-x-2 border-black'>
          Option 2: {item.option2}
        </p>
        <p className='bg-red-300 p-2 rounded-b-lg border-2 border-black'>
          Option 3: {item.option3}
        </p>
      </div>
    </li>
  );
}

export default QuestionPreview;
