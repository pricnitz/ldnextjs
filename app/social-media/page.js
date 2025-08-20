// FILE: app/on-page-seo-vs-off-page-seo/page.jsx

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/app/components/navbar/Navbar'; // Assuming component paths
import Header from '@/app/components/header/Header';
import { blogPostsdata } from '../data';

const { title , image, content} = blogPostsdata[4];

function renderContent(content) {
  return content.map((block, idx) => {
    switch (block.type) {
      case "paragraph":
        return <p key={idx} className="mb-4 text-para" dangerouslySetInnerHTML={{ __html: block.text }} />;
      case "heading":
        const HeadingTag = `h${block.level}`;
        return <HeadingTag key={idx} className="mt-6 mb-2 font-bold font-raleway text-white" dangerouslySetInnerHTML={{ __html: block.text }} />;
      case "list":
        return (
          <ul key={idx} className="list-disc pl-6 mb-4 text-para">
            {block.items.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: item.text }} />
            ))}
          </ul>
        );
      case "table":
        return (
          <table key={idx} className="border border-gray-300 my-4 w-full border-collapse text-para">
            <thead>
              <tr>
                {block.headers.map((header, i) => (
                  <th key={i} className="border border-gray-300 p-2 text-white">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-gray-300 p-2" dangerouslySetInnerHTML={{ __html: cell }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  });
}


export default function OnPageSeoPage() {
    return (
        <main className='w-full mx-auto bg-primary pt-20'>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={title} />
        <Navbar />
      </div>
      <div className='max-w-6xl mx-auto py-10 md:py-20 md:px-10 px-4'>
        <div className="grid md:grid-cols-3 md:gap-4 grid-cols-1 gap-2">
          {/* Main Blog */}
          <div className="col-span-2">
            <Image src={image} alt={title} width={800} height={400} className="rounded-lg mb-6 object-cover"/>
            <h1 className="lg:text-3xl md:text-2xl text-xl mb-4 text-white text-raleway">{title}</h1>
            {renderContent(content)}
          </div>

          <div className="col-span-1">
            <div className="p-4 rounded-lg bg-secondary px-4">
              <h2 className="text-xl font-bold text-white mb-4">Related Blogs</h2>
              <ul className="space-y-4">
                   {blogPostsdata
                  .filter((post) => post.title !== title) // Exclude the current post
                  .slice(0, 5) // Limit to 5 related posts
                  .map((relatedPost) => (
                    <li key={relatedPost.id || relatedPost.title} className="flex flex-col">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={200}
                        className="w-full h-auto object-cover rounded mb-2"
                      />
                      <Link
                        href={relatedPost.link}
                        className="text-para hover:text-white"
                      >
                        {relatedPost.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    );
}