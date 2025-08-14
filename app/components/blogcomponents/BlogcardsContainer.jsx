import React from "react";
import { Buttonfill } from "../ui/buttons/Buttons";
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
  const EXCERPT_LIMIT = 200;

  return (
    <div className="w-full mx-auto bg-primary">
      <div className="max-w-6xl mx-auto py-10 md:py-20 md:px-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((post) => {
          // ✅ Generate slug from title
          const slug = post.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

          return (
            <div
              key={slug}
              className="bg-secondary rounded overflow-hidden shadow-sm hover:shadow-md transition-transform duration-200 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <h3 className="text-lg font-raleway text-white">
                  {truncateByChars(post.title, TITLE_LIMIT)}
                </h3>

                {/* {post.content &&
                  post.content.length > 0 &&
                  post.content[0].text && (
                    <p className="text-sm text-para">
                      {truncateByChars(post.content[0].text, EXCERPT_LIMIT)}
                    </p>
                  )} */}

                <div className="mt-2">
              
                    <Link
                      href={`/blog/${slug}`}
                    >
                      <Buttonfill>
                        Read More →
                      </Buttonfill>
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
