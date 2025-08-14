// components/AccordionItem.jsx
import { useRef, useEffect, useState } from 'react';

const AccordionItem = ({ title, children, isOpen, onToggle, className = '' }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left text-red-600 font-medium focus:outline-none cursor-pointer"
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height: `${height}px` }}
      >
        <div ref={contentRef} className="px-4 pb-4 text-para bg-secondary p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
