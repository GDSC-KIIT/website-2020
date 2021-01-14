import { screen, waitFor, render } from '@testing-library/react';

import Questions from '@/playground/components/allQuestions';

describe('when user is not logged in', () => {
	it('shows not logged', async () => {
		const { getByTestId } = render(<Questions />);

		expect(getByTestId('loader')).toBeInTheDocument();
		await waitFor(() => {
			screen.getByTestId('not-loggedin');
		});
	});
});
