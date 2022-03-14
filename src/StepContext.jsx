import React, { useState } from 'react';
import App from './components/App';

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          submittedData,
          setSubmittedData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
