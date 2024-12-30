import Navbar from "@/components/Navbar";
import { listBlogs, readBlog } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default async function Blog({ params }: any) {
  const { blogId } = await params;
  const blogs = await listBlogs();
  const isBlog = blogs.includes(blogId);
  if (!isBlog) return notFound();

  const markdown = await readBlog(blogId);

  return (
    <main className="flex flex-1 flex-col gap-8 w-full h-full py-14 max-w-3xl mx-auto px-4">
      <Navbar />
      <Link
        href="/blog"
        className="flex flex-row items-center gap-2 hover:text-sky-300 transition-colors"
      >
        <FiArrowLeft />
        Back to blogs
      </Link>
      <div className="flex flex-col w-full gap-2">
        <h1 className="md:text-2xl text-xl font-semibold">
          {markdown.frontMatter.title}
        </h1>
        <h1 className="text-sky-200 text-opacity-55 md:text-base text-sm">
          {markdown.frontMatter.date}
        </h1>
      </div>
      <div
        className={
          "w-full prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden " +
          "md:prose-ol:text-base prose-ol:font-regular prose-li:marker:text-sky-50 prose-ol:text-sky-50 " +
          "prose-p:text-sky-50 md:prose-p:text-base prose-p:text-sm prose-a:no-underline prose-ul:text-sky-50 md:max-w-full " +
          "md:prose-ul:text-base prose-ul:text-sm md:prose-ol:text-base prose-ol:text-sm " +
          "prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-regular " +
          "prose-p:text-base md:prose-h3:text-lg prose-h3:text-base prose-table:overflow-x-scroll " +
          "md:prose-h1:text-2xl prose-h1:text-xl prose-h1:font-semibold " +
          "md:prose-h2:text-xl prose-h2:text-lg prose-h2:font-semibold prose-h2:text-sky-50 " +
          "prose-strong:text-sky-50 prose-h3:text-sky-50 " +
          "prose-pre:p-2 prose-pre:bg-gray-900 prose-pre:rounded-sm"
        }
      >
        <MDXRemote
          source={markdown.source}
          options={{
            parseFrontmatter: true,
          }}
        />
      </div>
    </main>
  );
}
