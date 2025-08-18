import React from "react";

function SectionBlock({ title, description , features }) {
  return (
    <div className="my-12">
        
      {title && (
        <h2 className="text-white text-2xl font-raleway mb-4">{title}</h2>
      )}
      

      {description && (
        <p
          className="text-para"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {features && features.length > 0 && (
        <ul className="list-disc pl-5">
          {features.map((feature, index) => (
            <li key={index} className="text-para">
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SectionBlock;
