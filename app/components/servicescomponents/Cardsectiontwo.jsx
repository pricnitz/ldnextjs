import React from 'react'

export default function Cardsectiontwo({ title, highlight, cards, conclusion }) {
    return (
        <div className="my-12">
            {title && (
                <h2 className="text-red-600 text-2xl font-raleway mb-4 text-center">
                    {title} <span className="text-white">{highlight}</span>
                </h2>
            )}

            {/* Cards Grid */}
            {cards?.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="relative flex flex-col rounded border-l border-red-600 bg-neutral-900 shadow-md p-6 
                   transition-all duration-300 hover:shadow-red-600/40 hover:-translate-y-1"
                        >
                            {/* Icon inside circle */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white text-xl">
                                    {card.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-neutral-300 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {conclusion && <p className="text-para mt-4">{conclusion}</p>}
        </div>
    );
}