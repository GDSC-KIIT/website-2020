import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

import { getUserScore } from '@/lib/dynamicData/userScore';
import useUser from '@/hooks/useUser';
import { getSeasonScore } from '@/lib/dynamicData/seasonScore';
import { getAllBadges } from '@/lib/dynamicData/badges';

import { Container, Grid, Box, Avatar, Typography, Paper, ButtonBase } from '@material-ui/core';
import useStyles from './styles';

export default function Dashboard() {
	const classes = useStyles();

	const { user } = useUser();
	const [userScore, setUserScore] = useState<number | null>(null);

	useEffect(() => {
		if (user && user.score) {
			getUserScore(user.score).then((scoreData) => {
				if (scoreData) setUserScore(scoreData.currentPoints);
			});
		}
	}, [user]);

	const { data: seasonScore } = useSWR('season_score', getSeasonScore, {
		refreshInterval: 120 * 1000,
	});

	const { data: badges } = useSWR('all_badges', getAllBadges, { refreshInterval: 60 * 1000 });

	const profile = useMemo(() => {
		if (user) {
			const joinedOn = user.created_at && new Date(user.created_at).toDateString();
			const username = user.username.toUpperCase();
			return {
				username,
				joinedOn,
				email: user.email,
			};
		}
		return null;
	}, [user]);

	// TODO: the users badges are not displayed (strapi-error)
	//  labels: bug
	//  **This is an error with strapi**
	//  The `users/me` endpoint does not give the badge but the `users/1` endpoint does
	//  this `/1` endpoint should not be used since it exposes the **other** users data
	const badgesDisplay = useMemo(() => {
		if (badges) {
			return badges.map((badge) => (
				<div className={classes.badge} key={badge.id}>
					<Paper className={classes.paper}>
						<Grid container spacing={2}>
							<Grid item>
								<ButtonBase className={classes.image}>
									<img
										className={classes.imge}
										alt={badge.name}
										src={badge.image}
										loading="lazy"
									/>
								</ButtonBase>
							</Grid>
							<Grid item xs={12} sm container>
								<Grid item xs container direction="column" spacing={2}>
									<Grid item xs>
										<Typography gutterBottom variant="subtitle1">
											{badge.name.toUpperCase()}
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Paper>
				</div>
			));
		}
		return null;
	}, [badges]);

	return (
		<div>
			<Container maxWidth="sm" className={classes.container}>
				<Box className={classes.header}>
					<img
						src="https://www.hiretheyouth.org/wp-content/uploads/2019/04/Developer-Student-Clubs-1024x257.png"
						className={classes.img}
						alt="coverImage"></img>
				</Box>
				<Box className={classes.box}>
					<Avatar className={classes.large}>U</Avatar>
				</Box>
				<Box className={classes.content}>
					<Typography variant="h6" className={classes.name}>
						{profile?.username}
					</Typography>
					<Typography variant="subtitle1" className={classes.name}>
						{profile?.email}
					</Typography>
					<Typography
						variant="h6"
						gutterBottom
						className={classes.location}
						color={'textSecondary'}>
						Joined on <strong>{profile?.joinedOn}</strong>
					</Typography>
				</Box>
				<Grid container item xs={12}>
					<Grid item xs={6}>
						{userScore ? (
							<>
								<Typography
									variant="body2"
									className={classes.name}
									color="textSecondary">
									Your Points
								</Typography>
								<Typography variant="h6" className={classes.name}>
									{userScore}
								</Typography>
							</>
						) : null}
					</Grid>
					<Grid item xs={6}>
						{seasonScore ? (
							<>
								<Typography
									variant="body2"
									className={classes.name}
									color="textSecondary">
									Season Points
								</Typography>
								<Typography variant="h6" className={classes.name}>
									{seasonScore}
								</Typography>
							</>
						) : null}
					</Grid>
				</Grid>
			</Container>
			<div
				style={{
					marginTop: 30,
				}}>
				<h1 style={{ fontFamily: 'serif', color: '#2f353a', textAlign: 'center' }}>
					BADGES
				</h1>
			</div>
			{badgesDisplay}
		</div>
	);
}
