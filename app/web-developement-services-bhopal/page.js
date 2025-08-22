import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Serviceshero from "../components/servicescomponents/Serviceshero";
import SectionBlock from "../components/servicescomponents/SectionBlock";
import FeatureList from "../components/servicescomponents/FeatureList";
import ProcessSteps from "../components/servicescomponents/ProcessSteps";
import FAQSection from "../components/servicescomponents/Faqsection";

import { webDevelopmenheaderTitles, webDevelopmentData } from "../data.jsx";
import { webDevelopmentPageSEO } from "../seo";

export const metadata = webDevelopmentPageSEO

export default function index() {
  const data = webDevelopmentData; 
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={webDevelopmenheaderTitles} />
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
            items={data.sectionTwo.features}
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
