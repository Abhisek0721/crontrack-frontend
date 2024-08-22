import { Outlet } from "react-router-dom";
import { useState } from "react";

export const CreateWorkSpaceFlow = () => {
  const [currentStep, setcurrentStep] = useState<Number>();

  const handledata = (data: Number) => {
    setcurrentStep(data);
  };

  return (
    <>
      <div className="flex justify-center items-center absolute top-16 right-[50%] left-[50%]">
        {[0, 1].map((index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full ${
                currentStep === index ? "bg-primary" : "bg-gray-300"
              }`}
            />
            {index < 1 && <div className="w-[40vw] h-1 bg-gray-300 mx-1" />}
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Outlet context={{ handledata }} />
        </div>
      </div>
    </>
  );
};
