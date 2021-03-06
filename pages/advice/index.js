import { getSession } from 'next-auth/react';
import { useState, useContext } from 'react';
import Card from '../../components/Card';
import NavHeader from '../../components/nav/NavHeader';

function AdvicePage() {
  const [isLoading, setLoading] = useState();

  const [quoteText, setQuoteText] = useState(
    "Never regret.If it's good, it's wonderful. If it's bad, it's experience."
  );

  const fetchAdvice = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ADVICE_API}`);
    const response = await res.json();

    setQuoteText(response.slip.advice);
  };

  const handleQuotes = () => {
    setLoading(true);
    fetchAdvice();
    setLoading(false);
  };
  return (
    <div className='min-h-screen'>
      <NavHeader />
      <div className='flex flex-col items-center ustify-center'>
        <h1 className='text-center pt-12 text-lime-500 font-bold text-2xl md:text-3xl tracking-wider'>
          Take an advice
        </h1>
        <div className='flex justify-center'>
          <Card
            quoteText={quoteText}
            handleQuotes={handleQuotes}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
}

export default AdvicePage;

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  // Check if session exists or not, if not, redirect
  if (session == null) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
}
