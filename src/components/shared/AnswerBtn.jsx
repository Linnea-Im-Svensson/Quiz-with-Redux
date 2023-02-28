import React from 'react';

function AnswerBtn({ children, nr }) {
  return (
    <button
      className={`h-full w-full  border-2 bg-gray-400 hover:bg-opacity-70`}
    >
      {children}
    </button>
  );
}

export default AnswerBtn;
