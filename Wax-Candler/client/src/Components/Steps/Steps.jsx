/* eslint-disable react/prop-types */
const Steps = ({ currentStep }) => {
  const stepPercentage = (currentStep / 4) * 100;

  return (
    <div className="progress" role="progressbar" aria-label="Progress Bar" aria-valuenow={stepPercentage} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar bg-warning text-dark" style={{ width: `${stepPercentage}%` }}>{stepPercentage}%</div>
    </div>
  );
};

export default Steps;