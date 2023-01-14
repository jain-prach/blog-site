import path from "path";
import { join } from "path";
import fs from "fs"; /* file system */
import matter from "gray-matter";
import { Blog } from "@/interfaces/Blog";

const getDir = (path: string) => join(process.cwd(), path); /* get Directory process.cwd = returns the name of the current working directory */
const BLOG_DIR = getDir("/src/content/blog");
const getFileNames = (dir: string): string[] => { 
    return fs.readdirSync(dir);
}/* helper function */

const getBlogFileNames = () => {
    return getFileNames(BLOG_DIR); /* src/ */
}

/* getting blog content */
const getItemInPath = (filePath: string) => {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const {data, content} = matter(fileContent);
    return {...data, content} as Blog;
}

/* helper function to create slug */
const getBlog = (name: string) => {
    const blog = getItemInPath(join(BLOG_DIR, name));
    blog.slug = name.replace(/\.md$/,"");
    return blog;
}

const getBlogBySlug = (slug: string) => {
    const fileName = slug + ".md";
    return getBlog(fileName);
}
const getBlogs = (): Blog[]=> {
    const names = getBlogFileNames();

    const items = names.map(getBlog);
    return items;
}

export {
    getBlogFileNames,
    getBlogs,
    getBlogBySlug,
}