import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Careerhero from "../components/careercomponents/Careerhero";
import Link from "next/link";

import { CarrerheaderTitles, jobOpenings } from '../data.jsx';
import { careerPageSEO } from "../seo";

// SEO Metadata for the Career page
export const metadata = careerPageSEO;




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