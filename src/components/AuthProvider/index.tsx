import { Typography } from '@material-ui/core';
import Link from 'next/link';
export function GoogleAuthLogin() {
	// TODO: Add styling
	return (
		<div>
			<Link href="http://localhost:9000/connect/google">
				<Typography variant="body2" style={{ cursor: 'pointer' }}>
					SignIn
				</Typography>
			</Link>
		</div>
	);
}
