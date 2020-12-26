import { IBlogPost } from '@/lib/staticData/blogPosts';

export default function Posts({ blogPosts }: { blogPosts: Array<IBlogPost> }) {
	const posts = blogPosts.map((post) => (
		<div key={post.link}>
			{post.categories}
			<br />
			{post.image}
			<br />
			{post.author}
			<br />
			{post.title}
			<br />
			{post.link}
			<br />
			<br />
		</div>
	));
	return <>{posts}</>;
}
