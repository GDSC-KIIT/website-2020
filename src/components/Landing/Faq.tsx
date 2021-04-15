import React from 'react';
import {
	makeStyles,
	Theme,
	createStyles,
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import Searchable from '../Searchable';

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
					<Searchable name="frequently asked">
						<Typography className={classes.heading}>
							How can I become a member?
						</Typography>
					</Searchable>
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
					<Searchable name="frequently asked">
						<Typography className={classes.heading}>
							How can I hear about the events that you will do in future?
						</Typography>
					</Searchable>
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
