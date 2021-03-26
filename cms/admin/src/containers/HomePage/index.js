import React from 'react';

import logo from '../../assets/images/logo_strapi.png';

export default function AdminHomePage() {
	return (
		<div style={{ padding: '2rem 0' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignContent: 'center',
					flexDirection: 'column',

					height: '100%',
					width: '100%',
					textAlign: 'center',
					margin: '4rem',
				}}>
				<h1>DSC KIIT ADMIN PANEL</h1>
				<hr />
				<img
					src={logo}
					alt="DSC KIIT LOGO"
					style={{
						display: 'block',
						marginLeft: '47.5%',
						width: '50px',
						height: '50px',
					}}
				/>
				<div style={{ marginTop: '2rem' }}>
					<h3>
						We are currently looking for suggestions to put <em>something</em> here
					</h3>
					<a
						href="https://github.com/DSC-KIIT/dsckiit-website-2.0/issues/95"
						target="_blank"
						rel="noopener noreferrer">
						<h4>You can help us by putting your suggestions here</h4>
					</a>
				</div>
			</div>
		</div>
	);
}
