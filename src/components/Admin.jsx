import {
  useQuiz,
  setName,
  setAnswers,
  setNewQuestionName,
  addQuestion,
  setPreview,
  editQuestion,
  addGame,
  setStorage,
} from '../redux/quiz';
import {
  IoIosArrowDropupCircle,
  IoIosArrowDropdownCircle,
} from 'react-icons/io';
import QuestionPreviewItem from './QuestionPreviewItem';

function Admin() {
  const { admin } = useQuiz();

  return (
    <div
      className='flex md:flex-row flex-col md:mt-28 mt-28  md:justify-between justify-start gap-4 w-full '
      id='top'
    >
      {/* lägg till onSubmit */}
      <form className='flex flex-col justify-center items-center border-2 py-4 px-10 rounded-lg md:mr-auto mr-0 h-[600px] bg-blue-50'>
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
        <div className='flex gap-4'>
          {admin.edit ? (
            <button
              className='flex items-center justify-center h-10 w-32 text-blue-100 bg-myBlue rounded-lg mb-10'
              onClick={(e) => (editQuestion(), e.preventDefault())}
            >
              Edit Question
            </button>
          ) : (
            <button
              className='flex items-center justify-center h-10 w-32 text-blue-100 bg-myBlue rounded-lg mb-10'
              onClick={(e) => (addQuestion(), e.preventDefault())}
            >
              Add Question
            </button>
          )}
        </div>
        <button
          className='w-full h-10 text-blue-100 bg-myBlue p-2 rounded-lg'
          onClick={(e) => (addGame(), e.preventDefault(), setStorage())}
        >
          Add Game
        </button>
      </form>
      <div
        className={`lg:w-[800px] w-[500px] mb-auto ${
          admin.questions.length === 0 ? 'hidden' : 'block'
        }`}
      >
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
          className={` grid gap-4 place-items-center lg:grid-cols-2 grid-cols-1  max-h-[570px] overflow-scroll p-2 bg-white rounded-lg ${
            admin.preview ? 'block' : 'hidden'
          }`}
        >
          {admin.questions.map((item, index) => {
            return (
              <QuestionPreviewItem key={item.id} item={item} index={index} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Admin;
