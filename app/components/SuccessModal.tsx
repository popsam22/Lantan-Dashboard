import { Close, Launch } from "@mui/icons-material";
import {
	Box,
	Button,
	Divider,
	InputAdornment,
	Modal,
	TextField,
	Typography,
} from "@mui/material";
import { formStyles } from "~/utils/styles";

interface SuccessModalProps {
	openModal: boolean;
	closeModal: () => void;
}
export default function SuccessModal({
	openModal,
	closeModal,
}: SuccessModalProps) {
	return (
		<Modal disableAutoFocus={false} open={openModal} onClose={closeModal}>
			<Box
				sx={{
					top: "5rem",
					width: "40%",
					margin: "auto",
					backgroundColor: "#FFF",
					borderRadius: "1rem",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "1rem",
					position: "relative",
				}}
			>
				<Box component={"button"} onClick={closeModal}>
					<Close
						sx={{
							position: "absolute",
							top: "20px",
							right: "20px",
							color: "#1F1F1F",
							fontSize: "2rem",
						}}
					/>
				</Box>
				<Box sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "2rem",
					gap: "1rem",
				}}>
					<img src="/web.png" alt="An image of the Web" width={200} />
					<Typography
						sx={{ color: "#3D3D3D", fontSize: "1.5rem", fontWeight: 600 }}
					>
						Website Created Successfully
					</Typography>
					<Typography
						sx={{ color: "#7A7A7A", fontSize: "0.875rem", textAlign: "center" }}
					>
						Your website link has been created, if you haven’t created listings,
						proceed to add apartments
					</Typography>
					<TextField
						fullWidth
						value={"https://peaktower.lantan.property"}
						placeholder="exapmle"
						sx={formStyles.textField}
						slotProps={{
							input: {
								endAdornment: (
									<InputAdornment position="end">
										<Box
											sx={{
												display: "flex",
												alignItems: "center",
												gap: "0.25rem",
												cursor: "pointer",
											}}
										>
											<Typography sx={{ color: "#075AAA" }}>
												Open link
											</Typography>
											<Launch sx={{ color: "#075AAA" }} />
										</Box>
									</InputAdornment>
								),
							},
						}}
					/>
				</Box>

				<Divider flexItem sx={{ borderColor: "#E6E6E6", width: "100%" }} />
				<Box
					sx={{
						display: "flex",
            width: '100%',
						gap: "1rem",
						marginY: "1rem",
						justifyContent: "flex-end",
            padding: "1rem 2rem",

					}}
				>
					<Button
						variant="outlined"
						onClick={closeModal}
						sx={{
							backgroundColor: "#FFF",
							color: "#1F2937",
							textTransform: "none",
							padding: "0.75rem 2rem",
							borderRadius: "8px",
							fontSize: "1rem",
							fontWeight: 500,
							border: "1px solid #00142E",
							"&:hover": {
								backgroundColor: "#00142E",
                color: '#fff'
							},
						}}
					>
						Done
					</Button>
					<Button
						variant="contained"
						sx={{
							backgroundColor: "#00142E",
							color: "#FFFFFF",
							textTransform: "none",
							padding: "0.75rem 2rem",
							borderRadius: "8px",
							fontSize: "1rem",
							fontWeight: 500,
							"&:hover": {
								backgroundColor: "#002855",
							},
						}}
					>
						Copy Link
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}
