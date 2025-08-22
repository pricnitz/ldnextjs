import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { digitalmarketingcompanyraisentitle, digitalMarketingCompanyRaisen } from "../data";
import Herothree from "../components/othercomponents/Herothree";
import Cardssection from "../components/servicescomponents/Cardssection";
import Containersection from "../components/servicescomponents/Containersection";
import FAQSection from "../components/servicescomponents/Faqsection";
import { digitalmarketingcompanyraisenseo } from "../seo";

export const metadata = digitalmarketingcompanyraisenseo;

export default function Page() {
    const data = digitalMarketingCompanyRaisen;

    return (
        <main className="w-full mx-auto bg-primary pt-20">
            {/* Header + Navbar */}
            <div className="fixed inset-x-0 top-0 z-50">
                <Header data={digitalmarketingcompanyraisentitle} />
                <Navbar />
            </div>

            {/* Hero Section */}
            <section className="pt-30">
                <div className="max-w-6xl mx-auto px-4">
                    <Herothree
                        count={data.count}
                        title={data.title}
                        highlight={data.highlight}
                        description={data.description}
                        subHighlight={data.subHighlight}
                    />
                </div>
            </section>

            {/* Cards Section */}
            <section className="max-w-6xl mx-auto px-4 pb-10">
                {data.sectiontwo && (
                    <Cardssection
                        title={data.sectiontwo.title}
                        highlight={data.sectiontwo.highlight}
                        cards={data.sectiontwo.benefitcards}
                        conclusion={data.sectiontwo.conclusion}
                    />
                )}
            </section>

            <section className="max-w-6xl mx-auto px-4 pb-16">
                {/* Section Title */}
                <h3 className="text-red-600 md:text-2xl text-xl font-raleway text-center mb-10">
                    Why Raisen Businesses Trust Us
                </h3>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        "✓ Raisen-based account managers",
                        "✓ 78% client retention rate",
                        "✓ Hindi/English reporting",
                        "✓ Affordable packages for small towns"
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="border bg-secondry shadow-sm rounded p-6 text-center text-para font-medium transition-transform duration-300 hover:scale-105 hover:shadow-md"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-4 pb-10">
                {data.sectionthree && (
                    <Containersection
                        title={data.sectionthree.title}
                        highlight={data.sectionthree.highlight}
                        description={data.sectionthree.description}
                        features={data.sectionthree.features}
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
