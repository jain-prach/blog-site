import { NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { getBlogs } from "../../../lib/blogs";

interface Params extends ParsedUrlQuery {
    slug: string;
}
type Props = {
    params: Params;
}
const BlogDetail: NextPage<Props> = ({params}) => {
    return (
        <div>
            Generic Page - {params.slug}
        </div>
    )
}

export function generateStaticParams() {
    const blogs = getBlogs();

    return blogs.map(blog => ({
        slug: blog.slug
    }))
}
export default BlogDetail;