import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const DuplicateDetectionVisualization = () => {
  const [array, setArray] = useState([3, 2, 1, 2, 2, 3]);
  const [step, setStep] = useState(0);
  const [message, setMessage] = useState('');

  const resetArray = () => {
    setArray([3, 2, 1, 2, 2, 3]);
    setStep(0);
    setMessage('');
  };

  const nextStep = () => {
    if (step >= array.length) return;

    const newArray = [...array];
    const index = Math.abs(newArray[step]);

    if (index >= newArray.length) {
      setMessage('Error: Index out of bounds');
      return;
    }

    if (newArray[index] < 0) {
      setMessage(`Duplicate found at index ${step} and ${index}`);
      return;
    }

    newArray[index] *= -1;
    setArray(newArray);
    setStep(step + 1);
  };

  useEffect(() => {
    if (step === array.length) {
      setMessage('No duplicates found');
    }
  }, [step, array]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Duplicate Detection Visualization</h2>
      <div className="flex justify-center mb-4">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-12 h-12 border border-gray-300 flex items-center justify-center m-1 ${
              index === step ? 'bg-yellow-200' : ''
            } ${value < 0 ? 'bg-red-200' : ''}`}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={nextStep}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          disabled={step >= array.length}
        >
          Next Step
        </button>
        <button
          onClick={resetArray}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
      <div className="text-center mb-4">
        Current Step: {step} {step < array.length && <ArrowRight className="inline" />} Index: {Math.abs(array[step])}
      </div>
      <div className="text-center font-bold">{message}</div>
    </div>
  );
};

export default DuplicateDetectionVisualization;
