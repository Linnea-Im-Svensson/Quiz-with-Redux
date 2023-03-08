import AnswerBtn from './shared/AnswerBtn';

function GameQuestion({ question }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      {' '}
      <div className='flex items-center justify-center bg-blue-100 lg:w-[55vw] w-[75vw] px-4 py-10 rounded-lg mb-10'>
        <h2 className='text-2xl font-semibold '>{question.question}</h2>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:w-[60vw] md:w-[80vw] w-[90vw] gap-2'>
        {/* randomizes the answers and displays them */}

        {question.answers.map((answer, index) => {
          return <AnswerBtn key={index} answer={answer} letter={index} />;
        })}
      </div>
    </div>
  );
}

export default GameQuestion;
