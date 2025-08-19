import Bloghero from '../components/blogcomponents/Bloghero';
import Header from '../components/header/Header';
import Navbar from '../components/navbar/Navbar';
import { BlogheaderTitles, Blogherodata, blogPostsdata } from './../data';
import BlogcardsContainer from '../components/blogcomponents/BlogcardsContainer';
import { blogPageSEO } from '../seo';

export const metadata = blogPageSEO;

export default function Blog() {
  return (
    <div className='w-full mx-auto bg-primary pt-20'>
      <div className="fixed inset-x-0 top-0 z-50">
        <Header data={BlogheaderTitles} />
        <Navbar />
      </div>
      <Bloghero data={Blogherodata} />
      <BlogcardsContainer data={blogPostsdata} />
    </div>
  );
}
