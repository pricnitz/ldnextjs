import React from "react";

export default function FAQSection({ title, highlight, faqs }) {
  return (
    <div className="my-12 max-w-6xl mx-auto px-4">
      {/* Section Heading */}
      {title && (
        <h2 className="text-2xl font-raleway text-center mb-8">
          <span className="text-white">{title}</span>{" "}
          <span className="text-red-600">{highlight}</span>
        </h2>
      )}

      {/* FAQ Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs?.map((faq, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 border-l-4 border-red-600 rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-red-600/40"
          >
            <h3 className="text-red-600 text-lg font-raleway flex items-start gap-2 mb-3">
              <span>❓</span> {faq.question}
            </h3>

            {/* Render answer */}
            {Array.isArray(faq.answer) ? (
              <>
                <p className="text-para leading-relaxed">{faq.answer[0]}</p>
                <div
                  className="text-para leading-relaxed mt-2"
                  dangerouslySetInnerHTML={{ __html: faq.answer[1] }}
                />
              </>
            ) : (
              <p className="text-para leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
