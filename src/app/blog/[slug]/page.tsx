import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";

const getBlogPosts = () => {
  const directory = process.cwd() + "/src/posts/";
  const files = fs.readdirSync(directory);

  const contents = files.map((file) => {
    const path = `${directory}/${file}`;
    const blog = fs.readFileSync(path);
    const markdown = matter(blog);
    return [file.replace(/\.[^/.]+$/, ""), markdown];
  });

  return Object.fromEntries(contents);
};

const convertMarkdownToHtml = async (content: string) =>
  (
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypePrettyCode)
      .use(rehypeStringify)
      .process(content)
  ).toString();

const Page = async ({ params }: { params: { slug: string } }) => {
  const article = await getBlogPosts();

  if (article.hasOwnProperty(params.slug)) {
    const { content, data } = article[params.slug];
    const markdown = await convertMarkdownToHtml(content);

    return (
      <div
        className={"my-8 flex w-full items-start justify-center font-poppins"}
      >
        <title>{`Blog | ${data.title}`}</title>
        <div className="prose min-h-screen">
          <article dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
    );
  } else {
    throw new Error("Error");
  }
};

export default Page;
