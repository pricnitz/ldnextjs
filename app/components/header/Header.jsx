import Marquee from "react-fast-marquee"; 

export default function Header({ data }) {
  const title = data.title || "We are a professional Web Development & Digital Marketing Company in Bhopal.";

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Marquee 
        className='max-w-4xl mx-auto p-1' 
        pauseOnHover={true} 
        speed={50}
        gradient={false}
      >
        <h1 className='whitespace-nowrap text-para'>
          {title}
        </h1>
      </Marquee>
    </div>
  );
}