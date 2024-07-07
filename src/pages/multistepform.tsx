// src/components/MultiStepForm.tsx
import  { useState, useCallback, useMemo } from 'react';
import Workspace from './WorkSpace';
import Socialaccounts from './Socialaccounts';




// Progress Indicator Component
interface ProgressProps {
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center items-center absolute top-16 right-[50%] left-[50%]">
      {[0, 1].map((index) => (
        <div key={index} className="flex items-center">
          <div 
            className={`w-4 h-4 rounded-full ${
              currentStep === index ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          />
          {index < 1 && <div className="w-[40vw] h-1 bg-gray-300 mx-1" />}
        </div>
      ))}
    </div>
  );
};

// Main MultiStepForm Component
const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = useMemo(() => [
    <Workspace key="1" />,
    <Socialaccounts key="2" />,
  ], []);

  const handleNext = useCallback(() => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  }, [steps.length]);

  const handlePrevious = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md">
      <h2 className='text-center text-xl sm:text-2xl font-semibold mb-6'>
        {currentStep === 0 ? "Create a Workspace" : "Add an Account"}
      </h2>
  
      <ProgressIndicator currentStep={currentStep} />
  
      <div className="mt-8">
        {steps[currentStep]}
      </div>
  
      <div className="flex justify-between mt-8 sm:mt-10">
        <button
          onClick={handlePrevious}
          className={`bg-gray-200 text-gray-700 px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
            currentStep === 0 ? 'invisible' : ''
          }`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
            currentStep === steps.length - 1 ? 'hidden' : ''
          }`}
        >
          Next
        </button>
        <button 
          className={`bg-blue-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base ${
            currentStep === steps.length - 1 ? '' : 'invisible'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  </div>
  
  );
};

export default MultiStepForm;
