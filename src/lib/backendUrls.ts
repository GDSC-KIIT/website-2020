type backendUrls = 'http://localhost:9000/auth/google/callback?access_token=';

interface IBackendUrls {
	[key: string]: backendUrls;
}

export const backendUrls: IBackendUrls = {
	auth_callback: 'http://localhost:9000/auth/google/callback?access_token=',
};
