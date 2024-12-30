"use server";

import { listBlogs, readBlog } from "@/lib/blog";

export default async function getBlogs() {
  const blogs = await listBlogs();
  const blogFrontMatter = await Promise.all(
    blogs.map((blog) => readBlog(blog).then((blog) => blog.frontMatter))
  );

  return { blogs, blogFrontMatter };
}
