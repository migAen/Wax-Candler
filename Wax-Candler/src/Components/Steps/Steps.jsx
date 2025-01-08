
import './Steps.css';

const Steps = ({ currentStep, steps }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => (
        <div key={index} className={`step ${index < currentStep ? 'step-active' : ''}`}>
          <span className="step-number">{index + 1}</span>
          <span className="step-label">{step}</span>
        </div>
      ))}
    </div>
  );
};

export default Steps;
