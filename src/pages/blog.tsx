import type { BlogPostType } from '@/types/index';
import fetchBlogPosts from '@/lib/staticData/blogPosts';
import Layout from '@/components/Layout';
import Posts from '@/components/Blog';

export async function getStaticProps() {
	const blogPosts = await fetchBlogPosts();

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
