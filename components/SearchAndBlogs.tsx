"use client";

import { roboto } from "@/lib/font";
import Link from "next/link";
import { useState } from "react";

export default function SearchAndBlogs({
  blogs,
  blogFrontMatter,
}: {
  blogs: string[];
  blogFrontMatter: Record<string, string>[];
}) {
  const [search, setSearch] = useState<string>("");
  return (
    <>
      <input
        className="md:text-base text-sm w-full px-4 py-2 rounded bg-gray-800 animate-fadeLeft700 focus:outline-gray-700 focus:outline focus:outline-2"
        placeholder={
          "Search through " +
          blogFrontMatter.length +
          " blog" +
          (blogFrontMatter.length > 1 ? "s" : "")
        }
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className="flex flex-col items-center gap-4 flex-1 animate-fadeLeft700">
        {blogFrontMatter
          .filter((blog) =>
            blog.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((blog, i, a) => {
            return (
              <li
                key={i}
                className={
                  "flex flex-col items-start gap-2 pb-4 w-full " +
                  (i >= 0 && i < blogFrontMatter.length - 1 && a[i + 1]
                    ? " border-b border-gray-700"
                    : "")
                }
              >
                <div className="flex md:flex-row flex-col md:items-center items-start gap-2 w-full justify-between">
                  <Link
                    href={"/blog/" + blogs[i]}
                    className="hover:text-sky-300 md:text-lg text-base transition-colors"
                  >
                    {blog.title}
                  </Link>
                  <p
                    className={
                      roboto.className +
                      " text-sky-200 text-opacity-55 md:text-base text-sm"
                    }
                  >
                    {blog.date}
                  </p>
                </div>
                <p className="text-sky-200 text-opacity-75 md:text-base text-sm">
                  {blog.summary}
                </p>
              </li>
            );
          })}
      </ul>
    </>
  );
}
