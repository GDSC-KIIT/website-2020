/**
 * @file It is recommeded to use from and put any page links here.
 * *It will avoid mistakes and link can be changed from here itself.*
 */

enum externalName {
	blogs = 'blogs',
	profile = 'profile',
	team = 'team',
	mentors = 'mentors',
	projects = 'projects',
	playground = 'playground',
	home = 'home',
	logOut = 'logOut',
	contactUs = 'contactUs',
}

export const internalUrls: Record<externalName, string> = {
	playground: '/playground',
	blogs: '/blog',
	profile: '/dashboard',
	home: '/',
	mentors: '/mentors',
	projects: '/projects',
	team: '/team',
	logOut: '/auth/logout',
	contactUs: '#contact',
};
