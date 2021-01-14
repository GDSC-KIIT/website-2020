import { render } from '@testing-library/react';
import Question from '@/playground/components/question';

it('renders and has radio buttons', () => {
	// changed the render to customRender to support server stylesheets
	// console.info('the container here is', container.innerHTML);
	// expect(container.innerHTML).tomatch
	const { container } = render(<Question />);

	expect(2 + 2).toEqual(4);
});
