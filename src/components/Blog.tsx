import React from "react";
import Link from "next/link";
import matter from "gray-matter";
import fs from "fs";
import { compareDesc } from "date-fns";

// import { Metadata } from "next";

const getBlogPost = async () => {
  const directory = process.cwd() + "/src/posts/";
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const path = `${directory}/${file}`;
    const contents = fs.readFileSync(path);
    const markdown = matter(contents);

    return markdown.data;
  });
};
const Blog = async () => {
  const data = await getBlogPost();
  const Blogs = data.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  return (
    <>
      <div className=" flex flex-col items-center m-auto mt-[10%] w-10/12 h-screen">
        <title>Blogs</title>
        <p className="m-0 text-center text-3xl font-bold md:text-left">Blogs</p>
        <p className="my-3 w-full text-center md:w-3/4 md:text-left">
          Check out some rants into my decision making as a Developer and as ACM
          Presidnt blogs where I discuss various challenges, migrations,
          bottlenecks. This blogs captures how our I approach problems and
          innovate.
        </p>
        <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {Blogs.map(({ title, author, date, link }, index) => (
            <Link
              href={`/blog/${link}`}
              key={index}
              className="rounded-lg bg-blue-600 mb-8 p-4 py-4 text-white hover:cursor-pointer hover:opacity-80 no-underline"
            >
              <p className="flex justify-start text-sm text-white">
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <p className="mb-2 mt-1.5 text-xl font-semibold">{title}</p>
              <p className=" text-sm text-white">{author}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
