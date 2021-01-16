import type { AxiosStatic } from 'axios';

const mockAxios: AxiosStatic = jest.genMockFromModule('axios');

mockAxios.create = jest.fn(() => mockAxios);

export default mockAxios;
