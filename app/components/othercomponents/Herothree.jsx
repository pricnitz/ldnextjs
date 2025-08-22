import React from "react";

export default function Herothree({ 
  title, 
  highlight, 
  count, 
  description 
}) {
  return (
    <div className="text-center py-10 bg-black">
      {/* Title */}
      <h2 className=" md:text-2xl text-xl font-extrabold font-raleway text-white">
        <span className="text-white">{count}</span>
        <span className="text-red-600">{title}</span>{" "}
        <span className="text-white">| {highlight}</span>
      </h2>

      {/* Description */}
      <p className="mt-4 max-w-3xl mx-auto text-para leading-relaxed">
        {description}
      </p>
    </div>
  );
}
