import {
	Avatar,
	Box,
	Button,
	Divider,
	Icon,
	Link,
	Select,
	Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BarChartIcon from "@mui/icons-material/BarChart";
import {
	Home,
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
	LogoutOutlined,
	Payment,
	SettingsOutlined,
	Wallet,
} from "@mui/icons-material";
import LinkItem from "./LinkItem";

export default function SideNav() {
	return (
		<Box
			sx={{
				width: "20%",
				height: "100vh",
				backgroundColor: "#FAFAFA",
				padding: "1rem",
				overflowY: "hidden",
				display: "flex",
				flexDirection: "column",
				gap: "1rem",
			}}
		>
			<Box
				sx={{
					borderRadius: "6px",
					padding: "1rem",
					background: "linear-gradient(to right, #075AAA, #56A3ED)",
				}}
			>
				<Box sx={{ marginBottom: "1rem" }}>
					<img src="/logo.png" alt="Logo" />
				</Box>
				<Box
					sx={{
						background: "#fff",
						padding: "0.5rem",
						color: "#000",
						fontSize: "0.75rem",
						fontWeight: "700",
						borderRadius: "4px",
						width: "fit-content",
					}}
				>
					FACILTY MANAGEMENT
				</Box>
				<Select
					fullWidth
					sx={{
						marginTop: "0.5rem",
						paddingY: "0.5rem",
						"& .MuiSelect-select": {
							color: "#fff",
							textAlign: "left",
							padding: 0,
						},
						".MuiOutlinedInput-notchedOutline": {
							border: "0px",
						},
						"& .MuiSelect-icon": {
							color: "#fff",
							fontSize: 22,
							right: 12,
						},
					}}
					IconComponent={KeyboardArrowDownRounded}
					defaultValue="Valmont Technologies"
				>
					<option value="Valmont Technologies">Valmont Technologies</option>
					<option value="analytics">Analytics</option>
					<option value="settings">Settings</option>
				</Select>
				<Typography
					sx={{ fontWeight: 500, fontSize: "0.875rem", color: "#E6EEF6" }}
				>
					Business ID: 123456789{" "}
					<ContentCopyIcon sx={{ fontSize: "0.75rem" }} />
				</Typography>
			</Box>
			<Button
				variant="contained"
				sx={{
					background: "linear-gradient(to right, #075AAA, #56A3ED)",
					borderRadius: "8px",
					textTransform: "none",
					padding: "0.5rem 0.75rem",
					display: "flex",
					gap: "0.5rem",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<CalendarMonthIcon /> Create a reservation
			</Button>
			<Box>
				<Box sx={{ overflowY: "scroll", paddingY: "1rem", maxHeight: '55vh' }}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							paddingY: "1rem",
						}}
					>
						<LinkItem
							href="/dashboard/overview"
							label="Overview"
							LinkIcon={BarChartIcon}
						/>
						<LinkItem
							href="/dashboard/listing"
							label="Listing Management"
							LinkIcon={Home}
							navChildren={[
								{
									href: "/dashboard/listing/create",
									label: "Add Listings",
									// LinkIcon: Home,
								},
								{
									href: "/dashboard/listing",
									label: "Listings",
									// LinkIcon: Home,
								},
							]}
						/>
						<LinkItem
							href="/dashboard/calendar"
							label="Calendar"
							LinkIcon={CalendarMonthIcon}
						/>
						<LinkItem
							href="/dashboard/payout"
							label="Agent Payout"
							LinkIcon={BarChartIcon}
						/>
						<LinkItem
							href="/dashboard/reservation"
							label="Reservation"
							LinkIcon={CalendarMonthIcon}
						/>
					</Box>
					<Box>
						<Typography
							sx={{
								fontSize: "0.875rem",
								color: "#5C5C5C",
								paddingBottom: "0.875rem",
							}}
						>
							ACCOUNT
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
							<LinkItem href="/wallet" label="Wallet" LinkIcon={Wallet} />
							<LinkItem href="/transfer" label="Transfer" LinkIcon={Home} />
							<LinkItem href="/payin" label="Pay in" LinkIcon={Payment} />
						</Box>
					</Box>
					<Box
						sx={{
							marginTop: "2rem",
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
						}}
					>
						<LinkItem
							href="/dashboard/discount"
							label="Discount & Promos"
							LinkIcon={Home}
						/>
						<LinkItem href="/dashboard/activity" label="Activity Logs" LinkIcon={Home} />
						<LinkItem
							href="/dashboard/settings"
							label="Settings"
							LinkIcon={SettingsOutlined}
						/>
					</Box>
				</Box>

				<Box sx={{ paddingX: "0.5rem", color: "#000" }}>
					<Divider sx={{ borderColor: "#4D698D" }} />
				</Box>
				<Box
					sx={{
						paddingY: "1rem",
						display: "flex",
						flexDirection: "row",
						gap: "1rem",
						alignItems: "center",
					}}
				>
					<Avatar
						sx={{ bgcolor: "#F1F6FE", color: "#00142E", fontSize: "1rem" }}
					>
						OO
					</Avatar>
					<Box>
						<Typography
							sx={{ color: "#3D3D3D", fontSize: "0.875rem", fontWeight: 400 }}
						>
							Owolu Opeyemi
						</Typography>
						<Typography
							sx={{ color: "#3D3D3D", fontSize: "0.875rem", fontWeight: 400 }}
						>
							facility@lantan.co
						</Typography>
					</Box>
					<Box ml="auto">
						<LogoutOutlined fontSize="small" sx={{ color: "#000" }} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
