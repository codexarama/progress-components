import React, { useState } from 'react';
import App from './components/App';

export const multiStepContext = React.createContext();

const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [confirmedData, setConfirmedData] = useState([]);

  function submitData() {}

  return (
    <>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          confirmedData,
          setConfirmedData,
          submitData,
        }}
      >
        <App />
      </multiStepContext.Provider>
    </>
  );
};

export default StepContext;
