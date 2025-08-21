import React from 'react'
import Marquee from 'react-fast-marquee';

function Keywords({ title, highlight, description, keywordlist, conclusion }) {
  return (
    <div className="my-12 text-center">
      {title && (
        <h2 className="text-white text-2xl font-raleway mb-4">
          {title} <span className="text-red-600">{highlight}</span>
        </h2>
      )}

      {description && <p className="text-para font-raleway mb-6">{description}</p>}

      <Marquee gradient={false} speed={50} pauseOnHover={false} className="py-2">
        {keywordlist?.map((keyword, idx) => (
          <span
            key={idx}
            className="mx-3 px-5 py-2 rounded bg-neutral-800 text-white text-sm font-medium border border-neutral-700 hover:text-red-600 transition"
          >
            {keyword}
          </span>
        ))}
      </Marquee>

      {conclusion && <p className="text-para mt-6">{conclusion}</p>}
    </div>
  );
}

export default Keywords;
