import { NextPage } from 'next';
import { use } from 'react';
import { getBlogs } from "../lib/blogs";
import "./globals.css";

async function getInitialBlogs() {
  const blogs = getBlogs();
  return blogs;
}
const Page: NextPage = () => {
  const blogs = use(getInitialBlogs());
  return (
    <div>
      { blogs.map((blog, i) =>
        <div key={i}>
          {blog}
          <div className="h-10" /> {/* serves as a separator */}
        </div>
      )}
    </div>
  )
}

export default Page;