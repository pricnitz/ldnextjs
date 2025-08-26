import React from 'react'
import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import FAQSection from '../components/servicescomponents/Faqsection'
import { faqdata , faqtitle} from '../data'
import { faqpage } from '../seo'

export const metadata = faqpage;

export default function page() {
    const data = faqdata;
    return (
        <main className="w-full mx-auto bg-primary pt-30">
            {/* Header + Navbar */}
            <div className="fixed inset-x-0 top-0 z-50">
                <Header data={faqtitle} />
                <Navbar />
            </div>
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
    )
}
