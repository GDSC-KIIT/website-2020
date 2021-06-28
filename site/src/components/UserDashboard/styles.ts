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
		c: {
			paddingTop: theme.spacing(5),
			paddingBottom: theme.spacing(5),
			paddingRight: theme.spacing(1),
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
			marginBottom: 30,
			width: 300,
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

export default useStyles;
