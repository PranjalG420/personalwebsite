import Container from "@/components/Container";
import { listBlogs, readBlog } from "@/lib/blog";
import Link from "next/link";

export default async function Blog() {
  const blogs = await listBlogs();

  const blogFrontMatter = await Promise.all(
    blogs.map(
      async (blog) => await readBlog(blog).then((blog) => blog.frontMatter)
    )
  );

  return (
    <Container>
      <h1 className="md:text-4xl text-2xl font-semibold">Blogs</h1>
      <ul className="flex flex-col items-center gap-4 flex-1">
        {blogFrontMatter.map((blog, i) => {
          return (
            <li key={i} className="flex flex-col items-start gap-1 w-full">
              <Link
                href={"/blog/" + blogs[i]}
                className="hover:underline md:text-lg"
              >
                {blog.title}
              </Link>
              <p className="text-neutral-400 md:text-base text-sm">
                {blog.date}
              </p>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
