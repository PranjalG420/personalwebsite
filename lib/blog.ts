"use server";

import { serialize } from "next-mdx-remote/serialize";
import fs from "node:fs/promises";
import path from "node:path";

export async function listBlogs(): Promise<string[]> {
  return fs
    .readdir(path.join(process.cwd(), "blogs"))
    .then((blogs) => blogs.map((blog) => blog.replace(/\.mdx$/, "")));
}

export async function readBlog(blogId: string) {
  return fs
    .readFile(path.join(process.cwd(), "blogs", `${blogId}.mdx`), "utf-8")
    .then(async (blog) => {
      return {
        source: blog,
        frontMatter: (
          await serialize<
            Record<string, any>,
            Record<
              string,
              string
            >
          >(blog, { parseFrontmatter: true })
        ).frontmatter,
      };
    });
}
