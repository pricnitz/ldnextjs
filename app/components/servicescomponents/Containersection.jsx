import React from "react";

export default function Containersection({ title, highlight, description, conclusion , features }) {
  return (
    <div className="my-12">
      {title && (
        <h2 className="text-red-600 text-2xl font-raleway mb-4 text-center">
          {title} <span className="text-white">{highlight}</span>
        </h2>
      )}

      {description && (
        <div className="bg-secondary text-center p-5 space-y-4">
          {description.map((desc, idx) => (
            <p
              key={idx}
              className="text-para"
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          ))}
        </div>
      )}

      {features && <p className="text-para mt-4 text-center"><i>{features}</i></p>}
      {conclusion && <p className="text-para mt-4">{conclusion}</p>}
    </div>
  );
}
