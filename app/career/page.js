import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Careerhero from "../components/careercomponents/Careerhero";
import Link from "next/link";

import { HomeheaderTitles, Whatwedodata, Allservicesdata, successStoriesdata, teamMembersdata, historyData, testimonialsdata, homePageSEO } from '../data.jsx';

// SEO Metadata for the Home page
export const metadata = homePageSEO;


export default function Career() {
  return (
    <main className='w-full mx-auto bg-primary pt-20'>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={HomeheaderTitles} />
        <Navbar />
      </div>
      <section className="py-20">
        <Careerhero />
      </section>
    </main>
  );
}