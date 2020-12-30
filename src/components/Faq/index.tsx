import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '80%',
			margin: 'auto',
		},
		heading: {
			fontSize: theme.typography.pxToRem(15),
			flexBasis: '50.33%',
			flexShrink: 0,
		},
	})
);

export default function ControlledAccordions() {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState<string | false>(false);

	const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return (
		<div className={classes.root}>
			<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1bh-content"
					id="panel1bh-header">
					<Typography className={classes.heading}>How can I become a member?</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						A student can become a member of DSC if he/she abides the recruitment
						procedure perfectly.
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel2bh-content"
					id="panel2bh-header">
					<Typography className={classes.heading}>
						How can I hear about the events that you will do in future?
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						You can follow our social media pages for hear future events.
					</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
}
