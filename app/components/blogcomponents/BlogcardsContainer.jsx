import React from "react";
import { Buttonfill } from "../ui/buttons/Buttons";
import Image from "next/image";
import Link from "next/link";


function truncateByChars(str, maxChars) {
  if (!str) return "";
  if (str.length <= maxChars) return str;
  const sliced = str.slice(0, maxChars);
  const lastSpace = sliced.lastIndexOf(" ");
  return (lastSpace > 0 ? sliced.slice(0, lastSpace) : sliced).trim() + "…";
}

export default function BlogcardsContainer({ data }) {
  const TITLE_LIMIT = 40;

  return (
    <div className="w-full mx-auto bg-primary">
      <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post , index) => {
          return (
            <div
              key={index}
              className="bg-secondary rounded overflow-hidden shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            >
  
              <div className="aspect-[16/9] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-raleway text-white min-h-15">
                  {truncateByChars(post.title, TITLE_LIMIT)}
                </h3>

                <div className="mt-2 align-bottom">
                  <Link href={`/${post.link}`}>
                    <Buttonfill>Read More →</Buttonfill>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
