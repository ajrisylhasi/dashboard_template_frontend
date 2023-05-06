import { Chip, styled } from "@mui/material";
import theme from "theme";

const FilterChip = styled(Chip)(() => ({
	justifyContent: "flex-start",
	border: `solid 3px ${theme.palette.primary.light}`,
	backgroundColor: "#fff",
	maxHeight: "31px",
	transition: "all 0.5s",
	"& .MuiChip-icon": {
		fill: theme.palette.primary.light,
		paddingLeft: "0px",
		marginLeft: "4px",
		paddingRight: "2px"
	},
	'&.selected:hover': {
		backgroundColor: "#fff",
		color: theme.palette.primary.light,
		border: `solid 3px ${theme.palette.primary.light}`,
		"& .MuiChip-label": {
			fill: theme.palette.primary.light,
		},
	},
	"&:hover, &.selected": {
		backgroundColor: theme.palette.primary.light,
		color: "#fff",
		border: `solid 3px transparent`,
		"& .MuiChip-icon": {
			fill: "#fff",
		}
	},
	color: theme.palette.primary.light,
	"& .MuiChip-label": {
		paddingLeft: "6px",
		paddingRight: "6px"
	},
}));

export default FilterChip;