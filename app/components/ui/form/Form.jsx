import React from 'react'

function Form({
    onSubmit,
    fields = [
        { name: "name", label: "Name", placeholder: "Name" },
        { name: "businessName", label: "Business Name", placeholder: "Business Name" },
        { name: "website", label: "Website", placeholder: "Website" },
        { name: "email", label: "Email Address", placeholder: "Email Address" },
        { name: "contact", label: "Contact No.", placeholder: "Contact No." },
        { name: "subject", label: "Subject", placeholder: "Subject" },
        { name: "message", label: "Message", placeholder: "Message", type: "textarea" },
    ],
    submitText = "Submit",
}) {
    return (
        <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-4 grid-cols-1">
            {fields.map((field, idx) =>
                field.type === "textarea" ? (
                    <div key={idx} className="md:col-span-2 col-span-1">
                        <label htmlFor={field.name}>{field.label}</label>
                        <textarea
                            key={idx}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="w-full p-3 rounded bg-secondary text-white outline-none"
                        />
                    </div>
                ) : (
                    <div key={idx} className="md:col-span-1">
                        <label htmlFor={field.name}>{field.label}</label>
                        <input
                            key={idx}
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            className="w-full p-3 rounded bg-secondary text-white outline-none"
                        />
                    </div>
                )
            )}
            <div className="col-span-1">
                <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded w-full cursor-pointer"
                >
                    {submitText}
                </button>
            </div>
        </form>
    );
}

export default Form