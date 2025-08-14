// components/Accordion.jsx
"use client"
import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ items = [], allowMultipleOpen = false }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleItem = (index) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) =>
                prev.includes(index)
                    ? prev.filter((i) => i !== index)
                    : [...prev, index]
            );
        } else {
            setOpenIndexes((prev) =>
                prev.includes(index) ? [] : [index]
            );
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto border rounded-md">
            {items.map((item, index) => (
                <AccordionItem
                    className="border-b last:border-b-1 transition-all duration-300 ease-in-out border-red-600"
                    key={index}
                    title={item.title}
                    isOpen={openIndexes.includes(index)}
                    onToggle={() => toggleItem(index)}
                >
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

export default Accordion;
