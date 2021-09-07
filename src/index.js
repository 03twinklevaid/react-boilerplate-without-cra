import React from 'react';
import reactDom from 'react-dom';
// import './styles/styles.css';
import './styles/styles.scss';

const App = () => {
  return (
    <>
      <h1>This is app component</h1>
      <h2>Hello world from react!!</h2>
    </>
  )
}
reactDom.render(<App />, document.getElementById('root'));