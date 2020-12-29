import { fetchDevtoBlogPosts, fetchMediumBlogPosts, IBlogPost } from '@/lib/staticData/blogPosts';
import Layout from '@/components/Layout';
import Posts from '@/components/Blog/posts';

export async function getStaticProps() {
	const blogPosts = await Promise.all([
		fetchDevtoBlogPosts(),
		fetchMediumBlogPosts(),
	]).then((arr) => [...arr[0], ...arr[1]]);
	// TODO: sort all by published date

	return {
		props: {
			blogPosts,
		},
	};
}

export default function Blog(props: { blogPosts: Array<IBlogPost> }) {
	return (
		<>
			<Layout pageName="Blogs">
				<Posts blogPosts={props.blogPosts} />
			</Layout>
		</>
	);
}
