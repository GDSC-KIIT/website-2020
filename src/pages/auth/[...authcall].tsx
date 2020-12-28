import { useRouter } from 'next/router';

export default function AuthCallback() {
	const { query } = useRouter();

	return <div>{JSON.stringify(query)}</div>;
}
