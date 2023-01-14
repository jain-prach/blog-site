import path from "path";
import { join } from "path";
import fs from "fs"; /* file system */

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
    return fileContent;
}
const getBlogs = () => {
    const names = getBlogFileNames();

    const items = names.map(name => getItemInPath(join(BLOG_DIR, name)));
    return items;
}
export {
    getBlogFileNames,
    getBlogs,
}