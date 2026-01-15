import { Box } from "@mui/material";
import { Outlet } from "react-router";
import MenuBar from "~/components/menuBar";
import SideNav from "~/components/sidenav";

export default function DashboardLayout() {
	return (
		<div>
			<Box sx={{ display: "flex", background: '#fff' }}>
				<SideNav />
				<Box sx={{ width: "80%" }}>
					<MenuBar />
					<Box
						sx={{
              margin: '1rem',
							height: "85vh",
							background: "#FCFCFD",
							border: "1px solid #E8E8E8",
              borderRadius: '2rem',
              color: '#2E2E2E',
							overflowY: 'scroll'
						}}
					>
						<Outlet />
					</Box>
				</Box>
			</Box>
		</div>
	);
}
