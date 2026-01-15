import { useState } from "react";
import {
	Box,
	TextField,
	Button,
	Typography,
	MenuItem,
	Select,
	FormControl,
	InputLabel,
	InputAdornment,
} from "@mui/material";
import { formStyles } from "~/utils/styles";

export default function ProfilesForm() {
	const [formData, setFormData] = useState({
		businessName: "",
		businessEmail: "",
		lastName: "",
		businessAddress: "",
		phoneCode: "234",
		phoneNumber: "",
	});

	const handleChange = (field: string) => (event: any) => {
		setFormData({
			...formData,
			[field]: event.target.value,
		});
	};

	const handleSave = () => {
		console.log("Saving:", formData);
	};

	const handleCancel = () => {
		console.log("Cancelled");
	};

	return (
		<Box
			component={"form"}
			sx={{
				maxWidth: "600px",
				padding: "2rem",
				backgroundColor: "#FFFFFF",
			}}
		>
			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="businessName"
					sx={{
						fontSize: "1rem",
						fontWeight: 500,
						color: "#1F2937",
						marginBottom: "0.5rem",
					}}
				>
					Business name
				</Typography>
				<TextField
					name="businessName"
					fullWidth
					value={formData.businessName}
					onChange={handleChange("businessName")}
					placeholder="Enter business name"
					sx={{ ...formStyles.textField }}
				/>
			</Box>

			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="businessEmail"
					sx={{
						fontSize: "1rem",
						fontWeight: 500,
						color: "#1F2937",
						marginBottom: "0.5rem",
					}}
				>
					Business email address
				</Typography>
				<TextField
					fullWidth
					name="businessEmail"
					value={formData.businessEmail}
					onChange={handleChange("businessEmail")}
					placeholder="Enter email address"
					sx={formStyles.textField}
				/>
			</Box>

			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="lastName"
					sx={{
						fontSize: "1rem",
						fontWeight: 500,
						color: "#1F2937",
						marginBottom: "0.5rem",
					}}
				>
					Last name
				</Typography>
				<TextField
					fullWidth
					name="lastName"
					value={formData.lastName}
					onChange={handleChange("lastName")}
					placeholder="Enter last name"
					sx={formStyles.textField}
				/>
			</Box>

			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="businessAddress"
					sx={{
						fontSize: "1rem",
						fontWeight: 500,
						color: "#1F2937",
						marginBottom: "0.5rem",
					}}
				>
					Business Address
				</Typography>
				<TextField
					fullWidth
					name="businessAddress"
					value={formData.businessAddress}
					onChange={handleChange("businessAddress")}
					placeholder="Enter business address"
					sx={formStyles.textField}
				/>
			</Box>

			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					sx={{
						fontSize: "1rem",
						fontWeight: 500,
						color: "#1F2937",
						marginBottom: "0.5rem",
					}}
				>
					Business Phone number
				</Typography>
				<Box sx={{ display: "flex", gap: "0.5rem" }}>
					<TextField
						fullWidth
						value={formData.phoneNumber}
						onChange={handleChange("phoneNumber")}
						placeholder="Enter phone number"
						sx={{
							flex: 1,
							...formStyles.textField,
						}}
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment position="start">
										<Select
											value={formData.phoneCode}
											onChange={handleChange("phoneCode")}
											sx={{
												width: "100px",
												borderRadius: "8px",
												backgroundColor: "#F9FAFB",
												...formStyles.textField,
												"& .MuiOutlinedInput-notchedOutline": {
													border: "none",
												},
												"& .MuiSelect-select": { border: "none" },
											}}
										>
											<MenuItem value="234">234</MenuItem>
											<MenuItem value="1">1</MenuItem>
											<MenuItem value="44">44</MenuItem>
											<MenuItem value="91">91</MenuItem>
										</Select>
									</InputAdornment>
								),
							},
						}}
					/>
				</Box>
			</Box>

			<Box sx={{ display: "flex", gap: "1rem" }}>
				<Button
					variant="contained"
					onClick={handleSave}
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
					Save Changes
				</Button>
				<Button
					variant="outlined"
					onClick={handleCancel}
					sx={{
						backgroundColor: "#F3F4F6",
						color: "#1F2937",
						textTransform: "none",
						padding: "0.75rem 2rem",
						borderRadius: "8px",
						fontSize: "1rem",
						fontWeight: 500,
						border: "none",
						"&:hover": {
							backgroundColor: "#E5E7EB",
							border: "none",
						},
					}}
				>
					Cancel
				</Button>
			</Box>
		</Box>
	);
}
