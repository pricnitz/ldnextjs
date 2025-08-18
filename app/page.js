import Image from "next/image";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/homecomponents/Hero";
import Whatwedo from "./components/homecomponents/Whatwedo";
import Allservices from "./components/homecomponents/Allservices";
import Successstory from "./components/homecomponents/Successstory";
import Coreteam from "./components/homecomponents/Coreteam";
import History from "./components/homecomponents/History";
import Testimonial from "./components/homecomponents/Testimonial";
import { HomeheaderTitles, Whatwedodata, Allservicesdata, successStoriesdata, teamMembersdata, historyData, testimonialsdata, homePageSEO } from './data.jsx';

// SEO Metadata for the Home page
export const metadata = homePageSEO;


export default function Home() {
  return (
    <main className='w-full'>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={HomeheaderTitles} />
        <Navbar />
      </div>
      <section id="home">
           <Hero  />
      </section>
      <section id="services">
        <Whatwedo data={Whatwedodata} />
      </section>
      <Allservices data={Allservicesdata} />
      <div className="bg-cover bg-top h-auto w-full" style={{ backgroundImage: `url('/assets/banners/1.jpeg')` }}>
        <Successstory data={successStoriesdata} />
      </div>
      <section id="team">
        <Coreteam data={teamMembersdata} />
      </section>
      <section id="about">
        <History data={historyData} />
      </section>
      <Testimonial data={testimonialsdata} />
    </main>
  );
}