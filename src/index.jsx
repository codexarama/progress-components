import React from 'react';
import StepContext from './StepContext';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <StepContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StepContext>,

  document.getElementById('root')
);
