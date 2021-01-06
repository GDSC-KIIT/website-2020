import type { NextApiRequest, NextApiResponse } from 'next';

import { parseCookies } from 'nookies';

interface ICookies {
	auth_token?: string;
}

export const config = {
	api: {
		externalResolver: true,
	},
};

export default function (req: NextApiRequest, res: NextApiResponse) {
	const { auth_token }: ICookies = parseCookies({ req });
	res.status(200).json({ auth_token });
}
