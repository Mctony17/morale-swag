import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CardButton from './CardButton';

function Card({ quoteAuthor, quoteText, handleQuotes, isLoading }) {
  return (
    <div className='relative w-[350px] md:w-[450px] h-auto bg-[#323a49] mt-10 mb-20 px-8 pt-8 pb-16 rounded-xl flex flex-col justify-center items-center'>
      <FontAwesomeIcon icon={faStar} className='w-8 h-8 text-lime-500' />
      <div className='text-lg md:text-2xl font-semibold text-gray-300 leading-8 text-center mt-4 space-y-4'>
        <p className=''>&quot;{quoteText}&quot;</p>
        <p className='text-xl font-semibold'> - {quoteAuthor}</p>
      </div>
      <hr className='w-[300px] border-t-1 border-gray-500 mt-8 bottom-16 mx-auto' />
      <div className='absolute -bottom-[30px] mx-aut right-8 '>
        <CardButton handleQuotes={handleQuotes} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default Card;
