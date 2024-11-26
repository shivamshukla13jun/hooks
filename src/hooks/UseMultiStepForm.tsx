import { useState } from 'react';

type UseMultiStepFormReturn<T> = {
    handleNext: () => void;
    handleBack: () => void;
    steps: T[];
    step: T;
    isFirstStep: boolean;
    isLastStep: boolean;
};

function useMultiStepForm<T>(steps: T[]): UseMultiStepFormReturn<T> {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
    };

    const handleBack = () => {
        setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
    };

    return {
        handleNext,
        handleBack,
        steps,
        step: steps[currentStep],
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === steps.length - 1,
    };
}

export default useMultiStepForm;
