import React from "react";

function ProcessSteps({ title, steps, conclusion }) {
  return (
    <div className="my-12">
      {title && <h2 className="text-white text-2xl font-raleway mb-4">{title}</h2>}

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
