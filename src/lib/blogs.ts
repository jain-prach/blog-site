import path from "path";
import { join } from "path";
import fs from "fs"; /* file system */

const getDir = (path: string) => join(process.cwd(), path); /* get Directory process.cwd = returns the name of the current working directory */

const getFileNames = (dir: string): string[] => { 
    return fs.readdirSync(dir);
}/* helper function */

const getBlogFileNames = () => {
    return getFileNames(getDir("/src/content/blog")); /* src/ */
}

export {
    getBlogFileNames,
}