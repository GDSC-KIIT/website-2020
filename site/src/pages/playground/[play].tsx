import dynamic from 'next/dynamic';

const Question = dynamic(() => import('../../playground/views/question'), { ssr: false });

export default function Quiz() {
	return (
		<>
			<Question />
		</>
	);
}
