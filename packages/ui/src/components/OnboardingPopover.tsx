import React from 'react';

export type OnboardingPopoverProps = React.HTMLAttributes<HTMLDivElement> & {
  step: number;
  totalSteps: number;
  title: string;
  description: string;
  onNext?: () => void;
  onSkip?: () => void;
  nextLabel?: string;
};

export function OnboardingPopover({
  step,
  totalSteps,
  title,
  description,
  onNext,
  onSkip,
  nextLabel = 'Next',
  className,
  ...props
}: OnboardingPopoverProps) {
  return (
    <div
      className={`malix-onboarding-popover${className ? ` ${className}` : ''}`}
      role="dialog"
      aria-label={`Step ${step} of ${totalSteps}: ${title}`}
      {...props}
    >
      <span className="malix-onboarding-popover__step">
        Step {step} of {totalSteps}
      </span>

      <h3 className="malix-onboarding-popover__title">{title}</h3>

      <p className="malix-onboarding-popover__description">{description}</p>

      <div className="malix-onboarding-popover__actions">
        {onSkip ? (
          <button
            type="button"
            className="malix-onboarding-popover__skip"
            onClick={onSkip}
          >
            Skip
          </button>
        ) : null}
        {onNext ? (
          <button
            type="button"
            className="malix-onboarding-popover__next-btn"
            onClick={onNext}
          >
            {nextLabel}
          </button>
        ) : null}
      </div>
    </div>
  );
}
