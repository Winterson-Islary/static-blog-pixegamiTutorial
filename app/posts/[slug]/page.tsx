import fs from 'fs';
import Markdown from 'markdown-to-jsx'; // Since our posts are a Markdown file.
import matter from 'gray-matter';
import { getPostMetadata } from '@/components/getPostMetadata';

// GETting Individual Post Contents
const getPostContents = (slug: string) => {
	const folder = "posts/";
	const file = `${folder}${slug}.md`;
	const content = fs.readFileSync(file, "utf8");
	const matterResult = matter(content);
	return matterResult;
};
export const generateStaticParams = async () => {
	const posts = getPostMetadata();
	return posts.map((post) => ({slug: post.slug}));
}
const PostPage = (props: any) => {
	const slug = props.params.slug;
	const post = getPostContents(slug);
	return (
		<div>
			<h1 className='text-2xl text-black-300 text-center pb-1 text-bold'> {post.data.title} </h1>
			<article className="prose lg:prose-xl">
				<Markdown>
					{post.content}
				</Markdown>
			</article>
			
		</div>
	)
};

export default PostPage;