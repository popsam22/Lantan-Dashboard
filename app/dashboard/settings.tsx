import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import BusinessPreference from "~/components/BusinessPreference";
import CustomizeWebsiteForm from "~/components/CustomizeWebsiteForm";
import { a11yProps, TabPanel } from "~/components/TabPanel";
import { settingsTabs } from "~/utils/mock-data";

export default function SettingsPage() {
	const [tabValue, setTabValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabValue(newValue);
	};
	return (
		<Box sx={{ padding: "1rem" }}>
			<Typography sx={{ padding: "2rem" }}>
				Manage your account settings and preferences
			</Typography>
			<Box
				sx={{
					padding: "1rem",
					background: "#fff",
					borderRadius: "20px",
					width: "100%",
					display: "flex",
				}}
			>
				<Box
					sx={{ background: "#FAFAFA", borderRadius: "12px", padding: "1rem", height: 'max-content' }}
				>
					<Tabs
						orientation="vertical"
						variant="scrollable"
						value={tabValue}
						onChange={handleChange}
						aria-label="Settings Tabs"
					>
						{settingsTabs.map((tab, index) => (
							<Tab
              key={index}
								sx={{
									alignItems: "flex-start",
									textTransform: "none",
									"&.Mui-selected": {
										color: "#2E2E2E",
										background: "#E8E8E8",
										borderRadius: "6px",
									},
									".MuiTabs-indicator": {
										width: "5px",
									},
								}}
								label={
									<Box>
										{tab.icon}
										<Typography component="span" sx={{ marginLeft: "0.5rem" }}>
											{tab.label}
										</Typography>
									</Box>
								}
								{...a11yProps(index)}
							/>
						))}
					</Tabs>
				</Box>

				<TabPanel value={tabValue} index={0}>
					<BusinessPreference />
				</TabPanel>
				<TabPanel value={tabValue} index={1}>
					<CustomizeWebsiteForm />
				</TabPanel>
				<TabPanel value={tabValue} index={2}>
					Item Three
				</TabPanel>
			</Box>
		</Box>
	);
}
