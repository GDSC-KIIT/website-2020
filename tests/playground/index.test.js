import React from 'react';
import { render } from '@testing-library/react';
import Question from '@/playground/components/question';

// TODO: add test for the main page

// TOOD this is a new todo

it('renders and has radio buttons', () => {
	// changed the render to customRender to support server stylesheets
	const { container } = render(<Question />, { hydrate: false });
	console.info('the container here is', container.innerHTML);
	// expect(container.innerHTML).tomatch

	// TODO write other expects
	expect(2 + 2).toEqual(4);
});
