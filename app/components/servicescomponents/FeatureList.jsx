import React from "react";

function FeatureList({ title, items, conclusion, description , highlight  }) {
    return (
        <div className="my-12">
            {title && <h2 className="text-white text-2xl font-raleway mb-4">{title} <span className="text-red-600">{highlight}</span> </h2>}
            {description && <p className="text-para ">{description}</p>}

            <ul className="list-disc pl-6 text-para space-y-2 mt-4">
                {items?.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            {conclusion && <p className="text-para mt-4">{conclusion}</p>}
        </div>
    );
}

export default FeatureList;
