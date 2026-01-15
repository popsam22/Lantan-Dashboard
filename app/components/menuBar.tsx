import {
	FlagOutlined,
	NavigateNext,
	NotificationsOutlined,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Breadcrumbs,
	Divider,
	Link,
	Typography,
} from "@mui/material";
import { useLocation } from "react-router";

export default function MenuBar() {
	const location = useLocation();
	const paths = location.pathname.split("/").filter(Boolean);
	return (
		<Box
			sx={{
				background: "#fff",
				padding: "1rem",
				width: "100%",
			}}
		>
			<Box
				sx={{
					width: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Breadcrumbs
					aria-label="navigation breadcrumb"
					separator={<NavigateNext fontSize="small" />}
				>
					{paths.map((path, index) => {
						const href = "/" + paths.slice(0, index + 1).join("/");
						const isLast = index === paths.length - 1;
						return isLast ? (
							<Box key={href} color="text.primary">
								{path.charAt(0).toUpperCase() + path.slice(1)}
							</Box>
						) : (
							<Link key={href} underline="hover" color="inherit" href={href}>
								{path.charAt(0).toUpperCase() + path.slice(1)}
							</Link>
						);
					})}
				</Breadcrumbs>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: "1rem",
						flexDirection: "row",
					}}
				>
					<Box
						sx={{
							border: "1px solid #14AE5C",
							background: "#ECFDF3",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							width: "120px",
							padding: "4px 8px",
							borderRadius: "1rem",
							marginTop: "8px",
						}}
					>
						<Typography
							sx={{
								color: "#14AE5C",
								fontSize: "0.875rem",
								fontWeight: 600,
							}}
						>
							Approved
						</Typography>
						<FlagOutlined sx={{ color: "#02542D" }} />
					</Box>
					<Box
						sx={{
							borderRadius: "50%",
							background: "#F5F5F5",
							padding: "0.5rem",
						}}
					>
						<NotificationsOutlined sx={{ color: "#000" }} />
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							gap: "1rem",
							alignItems: "center",
						}}
					>
						<Avatar
							sx={{
								background: "#F5F5F5",
								color: "#00142E",
								fontSize: "1rem",
							}}
						>
							OO
						</Avatar>
						<Divider orientation="vertical" flexItem />
						<Box>
							<Typography
								sx={{
									color: "#3D3D3D",
									fontSize: "0.875rem",
									fontWeight: 600,
								}}
							>
								Owolu Opeyemi
							</Typography>
							<Typography
								sx={{
									color: "#3D3D3D",
									fontSize: "0.875rem",
									fontWeight: 400,
								}}
							>
								Facility Manager
							</Typography>
						</Box>
					</Box>
				</Box>
			</Box>
			<Typography component="h2" sx={{color: '#2E2E2E', textTransform: 'capitalize', fontSize: '1.25rem'}}>{paths[paths.length - 1]}</Typography>
		</Box>
	);
}
