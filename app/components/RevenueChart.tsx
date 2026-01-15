import { KeyboardArrowDownRounded } from "@mui/icons-material";
import {
	Box,
	Card,
	CardContent,
	CardHeader,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import { bookingData } from "~/utils/mock-data";

const RevenueChart = () => {
	return (
		<Box>
			<Card
				sx={{
					borderRadius: "12px",
					boxShadow: "none",
					border: "1px solid #E5E7EB",
					marginY: "1rem",
				}}
			>
				<CardHeader
					title={
						<Typography fontWeight={600} fontSize={14}>
							Total Revenue
						</Typography>
					}
					action={
						<Select
							size="small"
							defaultValue="30"
							IconComponent={KeyboardArrowDownRounded}
							sx={{
								fontSize: 13,
								"& .MuiOutlinedInput-notchedOutline": { border: "none" },
							}}
						>
							<MenuItem value="all">All time</MenuItem>
							<MenuItem value="30">Last 30 days</MenuItem>
							<MenuItem value="7">Last 7 days</MenuItem>
						</Select>
					}
				/>
				<CardContent>
					<ResponsiveContainer width="100%" height={400}>
						<BarChart
							data={bookingData}
							margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
						>
							<CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
							<XAxis
								dataKey="month"
								tick={{ fill: "#666" }}
								tickLine={{ stroke: "#666" }}
							/>
							<Tooltip
								formatter={(value) => `${value?.toLocaleString()}`}
								contentStyle={{
									backgroundColor: "#fff",
									border: "1px solid #ccc",
									borderRadius: "8px",
								}}
							/>
							<Legend />
							<Bar
								dataKey="value"
								fill="#01295C"
								radius={[8, 8, 0, 0]}
								name="Month"
							/>
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</Box>
	);
};

export default RevenueChart;
