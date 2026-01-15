import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	Radio,
	RadioGroup,
	Tab,
	Tabs,
} from "@mui/material";
import { a11yProps, TabPanel } from "./TabPanel";
import React from "react";
import ProfilesForm from "./ProfileForm";
import { Square } from "@mui/icons-material";

export default function BusinessPreference() {
	const [tabValue, setTabValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};
	return (
		<Box
			sx={{
				padding: "1rem",
				background: "#fff",
				borderRadius: "20px",
				width: "100%",
			}}
		>
			<Box sx={{ padding: "0px" }}>
				<Tabs
					variant="scrollable"
					value={tabValue}
					onChange={handleChange}
					aria-label="Business Preference Tabs"
				>
					<Tab
						sx={{
							color: "#5C5C5C",
							textTransform: "none",
							"&.Mui-selected": {
								color: "#00142E",
								paddingX: 0,
							},
						}}
						label={"Profile Info"}
						{...a11yProps(0)}
					/>
					<Tab
						sx={{
							color: "#5C5C5C",
							textTransform: "none",
							"&.Mui-selected": {
								color: "#00142E",
								paddingX: 0,
							},
						}}
						label={"Authentication"}
						{...a11yProps(1)}
					/>
				</Tabs>
			</Box>

			<TabPanel value={tabValue} index={0}>
				<Box sx={{ display: "flex", gap: "4rem" }}>
					<ProfilesForm />
					<Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
						<img src="/business-logo.png" alt="business logo" />
						<Button
							variant="contained"
							sx={{
								backgroundColor: "#F5F5F5",
								color: "#00142E",
								textTransform: "none",
								padding: "0.75rem 2rem",
                marginTop: "1rem",
								borderRadius: "8px",
								fontSize: "0.75rem",
								fontWeight: 600,
								"&:hover": { backgroundColor: "#002855" },
							}}
						>
							Upload Business Logo
						</Button>

						<Box sx={{ marginTop: "3rem" }}>
							<FormControl>
								<FormLabel id="preferred-earnings-method-label" sx={{color:'#00142E', fontWeight:600, marginBottom:'1rem'}}>
									Your preferred earnings method?
								</FormLabel>
								<RadioGroup
									aria-labelledby="preferred-earnings-method-label"
									defaultValue="bank account"
									name="radio-buttons-group"
								>
									<FormControlLabel
										value="bank account"
										control={
											<Square sx={{ color: "#075AAA", borderRadius: "4px" }} />
										}
										label="Settle to my bank account"
									/>
									<FormControlLabel
										value="payout balance"
										control={
											<Square sx={{ color: "#075AAA", borderRadius: "4px" }} />
										}
										label="Settle to my payout balance"
									/>
								</RadioGroup>
							</FormControl>
						</Box>
					</Box>
				</Box>
			</TabPanel>
			<TabPanel value={tabValue} index={1}>
				Authentication
			</TabPanel>
		</Box>
	);
}
