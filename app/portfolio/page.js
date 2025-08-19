import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import { PortfolioCard } from "../components/ui/cards/Cards";
import { portfolioheaderTitles, portfolioData } from "../data.jsx"; 
import { portfolioPageSEO } from "../seo";


export const metadata = portfolioPageSEO;

export default function Index() {
  
  return (
    <main className="w-full mx-auto bg-primary pt-20">
      {/* Header + Navbar */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={portfolioheaderTitles} />
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="pt-30">
        <div className="max-w-6xl mx-auto px-4 gap-6">
          {portfolioData.map((item, index) => (
            <PortfolioCard 
              key={index} 
              images={item.images} 
              title={item.title} 
            />
          ))}
        </div>
      </section>
    </main>
  );
}
