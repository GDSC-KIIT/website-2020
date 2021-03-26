import type { BlogPostType } from '@/types/index';
import { fetchDevtoBlogPosts, fetchMediumBlogPosts } from '@/lib/staticData/blogPosts';
import Layout from '@/components/Layout';
import Posts from '@/components/Blog';

export async function getStaticProps() {
	const blogPostsData = await Promise.all([
		fetchMediumBlogPosts(),
		fetchDevtoBlogPosts(),
	]).then((arr) => [...arr[0], ...arr[1]]);

	const blogPosts: BlogPostType[] = blogPostsData
		.sort((a, b) => {
			if (a.date < b.date) return 1;
			else if (a.date > b.date) return -1;
			return 0;
		})
		.map((bp) => ({
			...bp,
			date: `${bp.date.getDate()} / ${bp.date.getMonth() + 1} / ${bp.date.getFullYear()}`,
		}));

	return {
		props: {
			blogPosts,
		},
		revalidate: 60,
	};
}

export default function BlogsPage(props: { blogPosts: Array<BlogPostType> }) {
	return (
		<Layout pageName="Blogs">
			<Posts blogPosts={props.blogPosts} />
		</Layout>
	);
}
