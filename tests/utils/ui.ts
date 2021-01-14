import type { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ServerStyleSheets } from '@material-ui/core';

export const ssrRender = (Component: ReactElement, options: RenderOptions) => {
	const MUSheets = new ServerStyleSheets();
	const MUComponent = MUSheets.collect(Component);
	return render(MUComponent, { ...options, hydrate: true });
};
