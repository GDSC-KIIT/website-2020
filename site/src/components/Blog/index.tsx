import SingleBlogCard from './post';
import type { BlogPostType } from '@/types/index';

import { Grid } from '@material-ui/core';

export default function Blogs({ blogPosts }: IBlogsProps) {
	return (
		<Grid container spacing={1}>
			{blogPosts.map((post) => (
				<SingleBlogCard key={post.title + '-' + post.author} post={post} />
			))}
		</Grid>
	);
}
interface IBlogsProps {
	blogPosts: Array<BlogPostType>;
}
