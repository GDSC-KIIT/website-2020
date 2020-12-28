type backendUrls =
	| 'http://localhost:9000/auth/google/callback?access_token='
	| 'http://localhost:9000/users/me';

interface IBackendUrls {
	[key: string]: backendUrls;
}

export const backendUrls: IBackendUrls = {
	auth_callback: 'http://localhost:9000/auth/google/callback?access_token=',
	user_info: 'http://localhost:9000/users/me',
};
