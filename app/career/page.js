import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Careerhero from "../components/careercomponents/Careerhero";
import Link from "next/link";

import { HomeheaderTitles, careerPageSEO , jobOpenings } from '../data.jsx';

// SEO Metadata for the Career page
export const metadata = careerPageSEO;

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
        <Header data={HomeheaderTitles} />
        <Navbar />
      </div>
      <section className="py-20">
        <Careerhero jobOpenings={jobOpenings}  />
      </section>
    </main>
  );
}