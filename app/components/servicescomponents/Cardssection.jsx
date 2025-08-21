import React from "react";

function Cardssection({ title, highlight, cards, conclusion }) {
  return (
    <div className="my-12">
      {title && (
        <h2 className="text-red-600 text-2xl font-raleway mb-4">
          {title} <span className="text-white">{highlight}</span>
        </h2>
      )}

      {/* Cards Grid */}
      {cards?.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative group flex flex-col justify-between rounded border border-neutral-800 bg-primary shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-neutral-900 to-transparent transition duration-300 rounded pointer-events-none" />

              {/* Card Content */}
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  {card.icon && (
                    <span className="text-red-600 text-xl">{card.icon}</span>
                  )}
                  <span>{card.title}</span>
                </h3>
                <p className="text-sm text-para">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {conclusion && <p className="text-para mt-4">{conclusion}</p>}
    </div>
  );
}

export default Cardssection;
