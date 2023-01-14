import { NextPage } from 'next';
import { use } from 'react';
import { getBlogFileNames } from "../lib/blogs";

async function getBlogs() {
  const fileNames = getBlogFileNames();
  return fileNames;
}
const Page: NextPage = () => {
  const names = use(getBlogs());
  return (
    <div>
      {JSON.stringify(names)}
    </div>
  )
}

export default Page;