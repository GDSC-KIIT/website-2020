import { fetchDevtoBlogPosts, fetchMediumBlogPosts, IBlogPost } from '@/lib/staticData/blogPosts';
import Layout from '@/components/Layout';
import Posts from '@/components/Blog/index';

export async function getStaticProps() {
	const blogPosts = await Promise.all([
		fetchDevtoBlogPosts(),
		fetchMediumBlogPosts(),
	]).then((arr) => [...arr[0], ...arr[1]]);

	blogPosts
		.sort((blogPost) => {
			const a = new Date(blogPost.date).getDate();
			const b = new Date(blogPost.date).getDate();
			return a - b;
		})
		.forEach((bp) => {
			const d = new Date(bp.date);
			bp.date = `${d.getDay()} / ${d.getMonth()} / ${d.getFullYear()}`;
			return bp;
		});

	return {
		props: {
			blogPosts,
		},
		revalidate: 60,
	};
}

export default function Blog(props: { blogPosts: Array<IBlogPost> }) {
	return (
		<Layout pageName="Blogs">
			<Posts blogPosts={props.blogPosts} />
		</Layout>
	);
}
