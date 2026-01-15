import {
	Avatar,
	Box,
	Card,
	CardContent,
	CardHeader,
	Divider,
	Typography,
} from "@mui/material";
import { units } from "~/utils/mock-data";

interface OverviewCardProps {
	title: string;
	data: {
		id?: string;
		name: string;
		subname?: string;
		key: string;
		value: string;
	}[];
}
export default function OverviewCard({ title, data }: OverviewCardProps) {
	function getAbbreviation(name: string): string {
		return name
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase())
			.join("");
	}
	return (
		<Card
			sx={{
				borderRadius: "12px",
				boxShadow: "none",
				border: "1px solid #E5E7EB",
				my: "1rem",
				width: "100%",
			}}
		>
			<CardHeader
				title={
					<Typography fontWeight={500} fontSize={14}>
						{title}
					</Typography>
				}
			/>
			<CardContent
				sx={{
					border: "1px solid #E5E7EB",
					margin: "0.5rem",
					borderRadius: "12px",
				}}
			>
				<Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
					{data.map((_d, index) => (
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "row",
								gap: "1rem",
								padding: "0.5rem",
								borderBottom:
									index < units.length - 1 ? "1px solid #F5F5F5" : "0px",
							}}
						>
							<Avatar
								sx={{
									bgcolor: "#F1F6FE",
									color: "#00142E",
									fontSize: "1rem",
									fontWeight: 500,
								}}
							>
								{getAbbreviation(_d.name)}
							</Avatar>
							<Box>
								<Typography
									sx={{
										color: "#3D3D3D",
										fontSize: "0.875rem",
										fontWeight: 400,
									}}
								>
									{_d.name} {_d.id && `| ${_d.id}`}
								</Typography>
								{_d.subname && (
									<Typography
										sx={{
											color: "#A3A3A3",
											fontSize: "0.875rem",
											fontWeight: 400,
										}}
									>
										{_d.subname}
									</Typography>
								)}
							</Box>
							<Box sx={{ marginLeft: "auto" }}>
								<Typography
									sx={{
										color: "#A3A3A3",
										fontSize: "0.875rem",
										fontWeight: 400,
									}}
								>
									{_d.key}
								</Typography>
								<Typography
									sx={{
										color: "#3D3D3D",
										fontSize: "0.875rem",
										fontWeight: 400,
									}}
								>
									{_d.value}
								</Typography>
							</Box>
						</Box>
					))}
				</Box>
			</CardContent>
		</Card>
	);
}
