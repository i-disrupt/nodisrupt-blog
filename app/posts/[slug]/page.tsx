import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter";
import getPostMetadata from '../../../components/GetPostMetadata';

const getPostContent = (slug: string) => {
    const folder = 'posts/';
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
}

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default function PostPage(props: any) {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="w-screen">
            <h1 className='text-5xl font-bold w-full text-center'>
                {post.data.title}
            </h1>
            <p className="text-xl w-full text-center my-4">
                Posted on {post.data.longDate} - {post.data.time} minute read
            </p>
            <div className="w-full flex justify-center">
                <article className="prose lg:prose-md">
                    <Markdown>
                        {post.content}
                    </Markdown>
                </article>
            </div>
            
        </div>
    )
}