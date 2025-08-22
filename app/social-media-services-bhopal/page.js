import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Serviceshero from "../components/servicescomponents/Serviceshero";
import SectionBlock from "../components/servicescomponents/SectionBlock";
import FeatureList from "../components/servicescomponents/FeatureList";
import ProcessSteps from "../components/servicescomponents/ProcessSteps";
import Cardsectiontwo from "../components/servicescomponents/Cardsectiontwo";
import Containersection from "../components/servicescomponents/Containersection";
import FAQSection from "../components/servicescomponents/Faqsection";

import { smmheaderTitles, smmData } from "../data.jsx";
import { smmPageSEO } from "../seo";

export const metadata = smmPageSEO;

export default function index() {
  const data = smmData;
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={smmheaderTitles} />
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

      <section className="max-w-6xl mx-auto px-4 pb-20">
        {data.sectionfour && (
          <Cardsectiontwo
            title={data.sectionfour.title}
            highlight={data.sectionfour.highlight}
            cards={data.sectionfour.features}
            conclusion={data.sectionfour.conclusion}
          />
        )}
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        {data.sectionfive && (
          <Containersection
            title={data.sectionfive.title}
            highlight={data.sectionfive.highlight}
            description={data.sectionfive.description}
            conclusion={data.sectionfive.conclusion}
          />
        )}
      </section>
      <section className="max-w-6xl mx-auto px-4 pb-10">
        {data.faqsection && (
          <FAQSection
            title={data.faqsection.title}
            highlight={data.faqsection.highlight}
            faqs={data.faqsection.faqs}
            conclusion={data.faqsection.conclusion}
          />
        )}
      </section>

    </main>
  );
}
