const isProduction = process.env.NODE_ENV?.toUpperCase() === 'PRODUCTION';

export const baseURL = isProduction ? 'http://dsckiit.tech' : 'http://localhost:3333';

export const isDev = !isProduction;

export const isHeadless = isProduction;
