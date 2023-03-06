import AnswerBtn from './shared/AnswerBtn';

function GameQuestion({ question }) {
  return (
    <div>
      {' '}
      <h2 className='text-2xl font-semibold ml-4 mb-4'>{question.question}</h2>
      <div className='grid grid-cols-2 lg:w-[60vw] md:w-[80vw] w-[90vw] h-40'>
        {/* randomizes the answers and displays them */}

        {question.answers.map((answer, index) => {
          return <AnswerBtn key={index} answer={answer} />;
        })}
      </div>
    </div>
  );
}

export default GameQuestion;
