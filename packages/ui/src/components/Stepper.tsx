import React from 'react';

export type StepStatus = 'completed' | 'active' | 'pending';

export type StepItem = {
  label: string;
  icon?: React.ReactNode;
  status: StepStatus;
};

export type StepperProps = {
  steps: StepItem[];
  className?: string;
};

export function Stepper({ steps, className }: StepperProps) {
  return (
    <div className={`malix-stepper${className ? ` ${className}` : ''}`}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <div className="malix-stepper__step" data-status={step.status}>
            <span className="malix-stepper__step-icon">
              {step.status === 'completed' ? (
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5 3.5L5.5 10L2.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                step.icon ?? null
              )}
            </span>
            <span className="malix-stepper__step-label">{step.label}</span>
          </div>
          {index < steps.length - 1 ? (
            <span className="malix-stepper__connector" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
}
