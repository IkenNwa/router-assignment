import React, {useState} from 'react';
import ErrorBoundary from './ErrorBoundary';
import Navigation from './Navigate';

const Home = () => {
  function Counter() {
    const [count, setCount]= useState(0)
    function handleClick() {
      setCount(count + 1)
    }
    if (count === 5) {
      throw new ErrorBoundary("Whata!!")
    }
    return(
    <h1 onClick={handleClick} >{count}</h1>
    );
  }

  return (
    <div>
      <h1>This is the Home page</h1>
      <p>I can't see my house here.</p>
      <Navigation />
      <h5>Error Boundary Test</h5>
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
    </div>
  );
};
export default Home;
