import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Serviceshero from "../components/servicescomponents/Serviceshero";
import SectionBlock from "../components/servicescomponents/SectionBlock";
import FeatureList from "../components/servicescomponents/FeatureList";
import ProcessSteps from "../components/servicescomponents/ProcessSteps";

import { HomeheaderTitles, contentWritingData } from "../data.jsx";

export default function index() {
  const data = contentWritingData; 
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={HomeheaderTitles} />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-30">
        <div className="max-w-6xl mx-auto px-4">
          <Serviceshero data={data} />
        </div>
      </section>

      {/* Dynamic Sections */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        {data.sectionOne && (
          <SectionBlock
            title={data.sectionOne.title}
            description={data.sectionOne.description}
            features={data.sectionOne.features}

          />
        )}

        {data.sectionTwo && (
          <FeatureList
            title={data.sectionTwo.title}
            description={data.sectionTwo.description}
            items={data.sectionOne.features}
            conclusion={data.sectionTwo.conclusion}
          />
        )}

        {data.sectionThree && (
          <ProcessSteps
            title={data.sectionThree.title}
            steps={data.sectionThree.steps}
            conclusion={data.sectionThree.conclusion}
          />
        )}
      </section>
    </main>
  );
}
