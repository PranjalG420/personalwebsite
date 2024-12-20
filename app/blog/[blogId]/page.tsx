import Container from "@/components/Container";
import { listBlogs, readBlog } from "@/lib/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export default async function Blog({ params }: any) {
  const { blogId } = await params;
  const blogs = await listBlogs();
  const isBlog = blogs.includes(blogId);
  if (!isBlog) return notFound();

  const markdown = await readBlog(blogId);

  return (
    <Container>
      <div className="flex flex-1 flex-col gap-8 w-full h-full">
        <div className="flex flex-col w-full gap-2">
          <h1 className="md:text-2xl text-xl font-semibold">
            {markdown.frontMatter.title}
          </h1>
          <h1 className="text-neutral-400 md:text-base text-sm">
            {markdown.frontMatter.date}
          </h1>
        </div>
        <div
          className={
            "w-full prose dark:prose-invert prose-code:before:hidden prose-code:after:hidden " +
            "md:prose-ol:text-base prose-ol:font-regular prose-li:marker:text-white prose-ol:text-white " +
            "prose-p:text-white md:prose-p:text-base prose-p:text-sm prose-a:no-underline prose-ul:text-white md:max-w-full " +
            "md:prose-ul:text-base prose-ul:text-sm md:prose-ol:text-base prose-ol:text-sm " +
            "prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-sm prose-code:font-regular " +
            "prose-p:text-base md:prose-h3:text-lg prose-h3:text-base prose-table:overflow-x-scroll " +
            "md:prose-h1:text-2xl prose-h1:text-xl prose-h1:font-semibold " +
            "md:prose-h2:text-xl prose-h2:text-lg prose-h2:font-semibold " +
            "prose-pre:p-2 prose-pre:bg-neutral-900 prose-pre:rounded-sm"
          }
        >
          <MDXRemote
            source={markdown.source}
            options={{
              parseFrontmatter: true,
            }}
          />
        </div>
      </div>
    </Container>
  );
}
