const isProduction = process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION';

export const baseURL = isProduction ? 'https://dsckiit.tech' : 'http://localhost:3333';

export const isDev = !isProduction;

export const isHeadless = isProduction;

export const searchablePages = ['/', '/team', '/mentors', '/blog'];

export const searchableDivSelector = 'div[data-search]';

export const searchableSpanSelector = 'span[data-search-span]';
