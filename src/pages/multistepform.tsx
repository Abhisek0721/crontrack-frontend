import  { useState, useCallback, useMemo } from 'react';
import Workspace from './WorkSpace';
import Socialaccounts from './SocialAccounts';
import toast from 'react-hot-toast';
import { Button } from '@/components/ui/button';



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
              currentStep === index ? 'bg-primary' : 'bg-gray-300'
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
    toast.success('Workspace created successfully');
  }, [steps.length]);

  const handlePrevious = useCallback(() => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  }, []);

  const handleContinue = useCallback(() => {
    toast.success('Account added successfully');
  }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
    <div className="w-full max-w-md">
      <h2 className='text-center text-xl sm:text-2xl font-semibold'>
        {currentStep === 1 && "Add an Account"}
      </h2>
  
      <ProgressIndicator currentStep={currentStep} />

      <div className="mt-8">
        {steps[currentStep]}
      </div>


      <Button
          onClick={handleNext}
          className={`bg-secondary w-[100%] mt-3 py-5 ${
            currentStep === steps.length - 1 && 'hidden'
          }`}
        >
          Create Workspace
        </Button>
  
      <div className="flex justify-between mt-8 sm:mt-10">
        <Button
          onClick={handlePrevious}
          className={`bg-secondary ${
            currentStep === 0 && 'invisible'
          }`}
        >
          Previous
        </Button>
       
        <Button 
          className={`bg-secondary ${
            currentStep === steps.length - 1 ? '' : 'invisible'
          }`}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  </div>
  
  );
};

export default MultiStepForm;
