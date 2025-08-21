import React from "react";

function ProcessSteps({ title, highlight, description,  steps, conclusion }) {
  return (
    <div className="my-12">
      {title && <h2 className="text-white text-2xl font-raleway mb-4">{title} <span className="text-red-600">{highlight}</span></h2>}
      {description && <p className="text-para font-raleway mb-4">{description}</p>}

      <ol className="list-decimal pl-6 text-para space-y-2">
        {steps?.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ol>

      {conclusion && <p className="text-para mt-4">{conclusion}</p>}
    </div>
  );
}

export default ProcessSteps;
