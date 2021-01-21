import { Container, Grid, Box, Avatar, Typography, Paper, ButtonBase } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			height: '100vh',
		},
		container: {
			height: '100%',
			padding: '0.2rem',
			backgroundColor: 'white',
			borderRadius: 20,
			marginTop: 30,
			marginBottom: 30,

			boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
		},
		header: {
			height: '35%',
			borderRadius: '20px 20px 0px 0px',
		},
		img: {
			width: '100%',
			height: '100%',
			borderRadius: '20px 20px 0px 0px',
		},
		large: {
			width: theme.spacing(9),
			height: theme.spacing(9),
			border: '4px solid white',
		},
		box: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: '-45px',
		},
		content: {
			textAlign: 'center',
			marginBottom: '25px',
		},
		name: {
			textAlign: 'center',
			fontWeight: 500,
		},
		location: {
			fontSize: '14px',
			fontWeight: 500,
		},
		badge: {
			flexGrow: 1,
		},
		paper: {
			padding: theme.spacing(2),
			marginLeft: 10,
			marginBottom: 30,
			maxWidth: 500,
		},
		image: {
			width: 128,
			height: 128,
		},
		imge: {
			margin: 'auto',
			display: 'block',
			maxWidth: '100%',
			maxHeight: '100%',
		},
	})
);

export default function Dashboard() {
	const classes = useStyles();

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
						Name : username
					</Typography>
					<Typography variant="subtitle1" className={classes.name}>
						Email:- username@gmail.com
					</Typography>
					<Typography
						variant="h6"
						gutterBottom
						className={classes.location}
						color={'textSecondary'}>
						joined at
					</Typography>
				</Box>
				<Grid container item xs={12}>
					<Grid item xs={6}>
						<Typography variant="body2" className={classes.name} color="textSecondary">
							Total Points
						</Typography>
						<Typography variant="h6" className={classes.name}>
							980
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Typography variant="body2" className={classes.name} color="textSecondary">
							Final Points
						</Typography>
						<Typography variant="h6" className={classes.name}>
							980
						</Typography>
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
									<Typography variant="body2" color="textSecondary">
										Points:100
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
