import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Careerhero from "../components/careercomponents/Careerhero";
import Link from "next/link";

import { CarrerheaderTitles, jobOpenings } from '../data.jsx';
import { careerPageSEO } from "../seo";

// SEO Metadata for the Career page
export const metadata = careerPageSEO;

const handleCareerFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const contact = formData.get("contact");
    const profile = formData.get("profile");
    const message = formData.get("message");

    const fullMessage = `Career Enquiry:
Name: ${name}
Email: ${email}
Contact: ${contact}
Profile: ${profile}
Message: ${message}
    
(Attached files are not supported in WhatsApp)`;

    const phoneNumber = "917974777707"; // WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;

    window.open(whatsappURL, "_blank");
};


const careerFields = [
  { name: "name", label: "Name", placeholder: "Name" },
  { name: "email", label: "Email Address", placeholder: "Email Address" },
  { name: "contact", label: "Contact No.", placeholder: "Contact No." },
  { 
    name: "profile", 
    label: "Profile", 
    type: "select", 
    placeholder: "Select a profile", 
    options: [
      { label: "Frontend Developer", value: "frontend" },
      { label: "Backend Developer", value: "backend" },
      { label: "Designer", value: "designer" },
    ] 
  },
  { name: "cv", label: "Attach CV", type: "file", accept: ".pdf,.doc,.docx" },
  { name: "passportImage", label: "Attach Passport size Image", type: "file", accept: "image/*" },
  { name: "message", label: "Message", placeholder: "Message", type: "textarea" },
];


export default function Career() {
  return (
    <main className='w-full mx-auto bg-primary pt-20'>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={CarrerheaderTitles} />
        <Navbar />
      </div>
      <section className="py-20">
        <Careerhero jobOpenings={jobOpenings}  />
      </section>
    </main>
  );
}