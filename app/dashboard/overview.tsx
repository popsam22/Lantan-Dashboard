import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Grid,
	Typography,
} from "@mui/material";
import { format } from "date-fns";
import BookingsChart from "~/components/BookingsChart";
import OverviewCard from "~/components/OverviewCard";
import RevenueChart from "~/components/RevenueChart";
import { metrics, properties, units } from "~/utils/mock-data";

export default function Overview() {
	const today = format(new Date(), "EEEE, MMMM dd yyyy");

	const formattedUnits = units.map((u) => ({
		...u,
		subname: `N ${u.price}`,
		key: u.type,
		value: `${u.duration} Months`,
	}));
	const formattedProperties = properties.map((p) => ({
		...p,
		key: "Total booking",
		value: p.booking.toString(),
	}));

	return (
		<Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					borderBottom: "1px solid #E8E8E8",
					padding: "1rem",
				}}
			>
				<Box>
					<Typography
						sx={{ fontWeight: 400, fontSize: "0.75rem", color: "#2E2E2E" }}
					>
						{today}
					</Typography>
					<Typography sx={{ color: "#3D3D3D", fontSize: "1.25rem" }}>
						Welcome, Opeyemi
					</Typography>
				</Box>
				<Box sx={{ display: "flex", gap: "1rem" }}>
					<Button
						variant="outlined"
						sx={{ color: "#000", borderColor: "#000", borderRadius: "0.5rem" }}
					>
						Overview
					</Button>
					<Button
						variant="outlined"
						disabled
						sx={{ color: "#000", borderColor: "#000", borderRadius: "0.5rem" }}
					>
						Properties
					</Button>
					<Button
						variant="outlined"
						disabled
						sx={{ color: "#000", borderColor: "#000", borderRadius: "0.5rem" }}
					>
						Units
					</Button>
				</Box>
			</Box>
			<Box sx={{ padding: "1rem" }}>
				<Typography
					sx={{ fontWeight: 400, fontSize: "0.75rem", color: "#2E2E2E" }}
				>
					Here’s a quick overview of key performance metrics
				</Typography>
				<Grid container spacing={2}>
					{metrics.map((metric, index) => (
						<Grid
							size={3}
							key={index}
							sx={{
								background: "#fff",
								border: "1px solid #E8E8E8",
								borderRadius: "0.5rem",
								padding: "1rem",
								marginTop: "1rem",
								display: "flex",
								flexDirection: "column",
								gap: "0.5rem",
							}}
						>
							<Typography sx={{ fontSize: "0.75rem" }}>
								{metric.title}
							</Typography>
							<Typography sx={{ fontSize: "1.5rem", fontWeight: 500 }}>
								{metric.value}
							</Typography>
							<Box
								sx={{
									display: "flex",
									alignItems: "center",
									gap: "0.5rem",
									background:
										metric.changeType === "increase"
											? "#27AE6017"
											: "#EB575717",
									width: "fit-content",
									padding: "0.25rem 0.5rem",
									borderRadius: "0.5rem",
								}}
							>
								{metric.changeType === "increase" ? (
									<ArrowUpward sx={{ color: "#14AE5C", fontSize: "1rem" }} />
								) : (
									<ArrowDownward sx={{ color: "#EB5757", fontSize: "1rem" }} />
								)}
								<Typography
									sx={{
										color:
											metric.changeType === "increase" ? "#14AE5C" : "#EB5757",
									}}
								>
									{metric.percentage}
								</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
				<Box>
					<BookingsChart />
					<RevenueChart />
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "row",
						gap: "1rem",
						marginTop: "1rem",
					}}
				>
					<OverviewCard title="Most rented unit" data={formattedUnits} />
					<OverviewCard
						title="Top Performing Property"
						data={formattedProperties}
					/>
				</Box>
			</Box>
		</Box>
	);
}
