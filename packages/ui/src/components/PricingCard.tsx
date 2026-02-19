import React from 'react';

export type PricingCardProps = React.HTMLAttributes<HTMLDivElement> & {
  planName: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  highlighted?: boolean;
};

export function PricingCard({
  planName,
  price,
  period = '/month',
  description,
  features,
  ctaLabel = 'Get Started',
  onCtaClick,
  highlighted = false,
  className,
  ...props
}: PricingCardProps) {
  return (
    <div
      className={`malix-pricing-card${className ? ` ${className}` : ''}`}
      data-highlighted={highlighted || undefined}
      {...props}
    >
      <span className="malix-pricing-card__badge">{planName}</span>

      <div className="malix-pricing-card__price-row">
        <span className="malix-pricing-card__price">{price}</span>
        <span className="malix-pricing-card__period">{period}</span>
      </div>

      {description ? (
        <p className="malix-pricing-card__description">{description}</p>
      ) : null}

      <ul className="malix-pricing-card__features">
        {features.map((feature, i) => (
          <li key={i} className="malix-pricing-card__feature-item">
            <svg
              className="malix-pricing-card__check-icon"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="malix-pricing-card__cta"
        onClick={onCtaClick}
      >
        {ctaLabel}
      </button>
    </div>
  );
}
