import { useEffect, useMemo, useState } from 'react';

import { getUserScore } from '@/lib/dynamicData/userScore';
import useUser from '@/hooks/useUser';

import { Container, Grid, Box, Avatar, Typography, Paper, ButtonBase } from '@material-ui/core';
import useStyles from './styles';
import useSWR from 'swr';
import { getSeasonScore } from '@/lib/dynamicData/seasonScore';

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
			<div className={classes.badge}>
				<Paper className={classes.paper}>
					<Grid container spacing={2}>
						<Grid item>
							<ButtonBase className={classes.image}>
								<img
									className={classes.imge}
									alt="complex"
									src="https://th.bing.com/th/id/R35fa7e4bc8c69f5bc3674eaf1afc17cd?rik=5n92n83FVOGL%2fQ&riu=http%3a%2f%2fst2.depositphotos.com%2f4459125%2f7302%2fv%2f170%2fdepositphotos_73029813-stock-illustration-cartoon-gold-cup.jpg&ehk=GClqxdwgjLxLeAxYi3qrfByiSP8YD4XaKHRzyHkQ%2bAA%3d&risl=&pid=ImgRaw"
								/>
							</ButtonBase>
						</Grid>
						<Grid item xs={12} sm container>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Typography gutterBottom variant="subtitle1">
										GOLDEN BADGE
									</Typography>
									<Typography variant="body2" gutterBottom>
										In which qUIZ
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Paper>
			</div>
		</div>
	);
}
