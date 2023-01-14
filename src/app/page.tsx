import { NextPage } from 'next';
import { use } from 'react';
import "./globals.css";
import { getBlogs } from "../lib/blogs";

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
          <div>{blog.title}</div> {/*no longer a simple string content but an actual object*/}
          <div>{blog.description}</div>
          <div className="h-10" /> {/* serves as a separator */}
        </div>
      )}
    </div>
  )
}

export default Page;