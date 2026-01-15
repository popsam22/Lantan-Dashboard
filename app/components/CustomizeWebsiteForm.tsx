import {
	Box,
	Button,
	Card,
	InputAdornment,
	Popover,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { formStyles } from "~/utils/styles";
import { HexColorPicker } from "react-colorful";
import { listings, websiteTemplates } from "~/utils/mock-data";
import { ArrowForward, Web } from "@mui/icons-material";
import SuccessModal from "./SuccessModal";

export default function CustomizeWebsiteForm() {
	const [formData, setFormData] = useState({
		websiteAddress: "exapmle",
		primaryColor: "#218912",
		secondaryColor: "#218912",
		listingType: "booking",
		template: "catharis",
	});

	const [primaryColorAnchor, setPrimaryColorAnchor] =
		useState<null | HTMLElement>(null);
	const [secondaryColorAnchor, setSecondaryColorAnchor] =
		useState<null | HTMLElement>(null);
	const [selectedListing, setSelectedListing] = useState(0);
	const [websiteTemplate, setWebsiteTemplate] = useState("leonar");
	const [openModal, setOpenModal] = useState(false)

	const handleColorChange = (field: string, color: string) => {
		setFormData({ ...formData, [field]: color });
	};

	const handleListingChange = (value: number) => {
		setSelectedListing(value);
	};

	const handleTemplateChange = (name: string) => {
		setWebsiteTemplate(name);
	};

	const handlePublish = () => {
		console.log("Publishing:", formData);
		setOpenModal(true)
	};

	const handleCancel = () => {
		console.log("Cancelled");
	};

	return (
		<Box
			component={"form"}
			sx={{
				padding: "1rem",
				background: "#fff",
				borderRadius: "20px",
				width: "100%",
			}}
		>
			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="webAddress"
					sx={formStyles.label}
				>
					Prefered Website Adress
				</Typography>
				<TextField
					fullWidth
					value={formData.websiteAddress}
					onChange={(e) =>
						setFormData({ ...formData, websiteAddress: e.target.value })
					}
					placeholder="exapmle"
					sx={formStyles.textField}
					slotProps={{
						input: {
							startAdornment: (
								<InputAdornment position="start">
									<Typography sx={{ color: "#6B7280" }}>https://</Typography>
								</InputAdornment>
							),
							endAdornment: (
								<InputAdornment position="end">
									<Typography sx={{ color: "#6B7280" }}>
										.lantan.property
									</Typography>
								</InputAdornment>
							),
						},
					}}
				/>
			</Box>
			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="primaryColor"
					sx={formStyles.label}
				>
					Primary Brand Color
				</Typography>
				<Box
					sx={formStyles.colorInput}
					onClick={(e) => setPrimaryColorAnchor(e.currentTarget)}
				>
					<Box
						sx={{
							width: "25px",
							height: "25px",
							backgroundColor: formData.primaryColor,
						}}
					/>
					<Typography>{formData.primaryColor}</Typography>
				</Box>
				<Popover
					open={Boolean(primaryColorAnchor)}
					anchorEl={primaryColorAnchor}
					onClose={() => setPrimaryColorAnchor(null)}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
				>
					<Box sx={{ padding: "1rem" }}>
						<HexColorPicker
							color={formData.primaryColor}
							onChange={(color) => handleColorChange("primaryColor", color)}
						/>
					</Box>
				</Popover>
			</Box>
			<Box sx={{ marginBottom: "2rem" }}>
				<Typography
					component="label"
					htmlFor="secondaryColor"
					sx={formStyles.label}
				>
					Secondary Brand Color
				</Typography>
				<Box
					sx={formStyles.colorInput}
					onClick={(e) => setSecondaryColorAnchor(e.currentTarget)}
				>
					<Box
						sx={{
							width: "25px",
							height: "25px",
							backgroundColor: formData.secondaryColor,
						}}
					/>
					<Typography>{formData.secondaryColor}</Typography>
				</Box>
				<Popover
					open={Boolean(secondaryColorAnchor)}
					anchorEl={secondaryColorAnchor}
					onClose={() => setSecondaryColorAnchor(null)}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
				>
					<Box sx={{ padding: "1rem" }}>
						<HexColorPicker
							color={formData.secondaryColor}
							onChange={(color) => handleColorChange("secondaryColor", color)}
						/>
					</Box>
				</Popover>
			</Box>
			<Box>
				<Typography>Listing Type</Typography>
				<Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
					{listings.map((listing, index) => {
						return (
							<Card
								key={index}
								sx={{
									borderRadius: "12px",
									boxShadow: "none",
									border:
										listing.index === selectedListing
											? "1px solid #075AAA"
											: "1px solid #E5E7EB",
									my: "1rem",
									padding: "0.5rem 0.875rem",
									width: "30%",
									position: "relative",
								}}
								onClick={() => handleListingChange(index)}
							>
								<Box
									sx={{
										background:
											listing.index === selectedListing ? "#F1F6FE" : "#F5F5F5",
										minWidth: "54px",
										minHeight: "54px",
										borderRadius: "12px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									{listing.icon}
								</Box>
								<Box sx={{ padding: "0.5rem" }}>
									<Typography sx={{ fontWeight: "600", fontSize: "1rem" }}>
										{listing.title}
									</Typography>
									<Typography sx={{ color: "#475467", fontSize: "0.75rem" }}>
										{listing.subtitle}
									</Typography>
								</Box>
								<Box
									sx={{
										width: "25px",
										height: "25px",
										zIndex: 1,
										borderRadius: "50%",
										position: "absolute",
										top: "10px",
										right: "10px",
										border: "1px solid #EEF6FF",
									}}
								>
									{selectedListing === index && (
										<Box
											sx={{
												width: "15px",
												height: "15px",
												backgroundColor: "#075AAA",
												borderRadius: "50%",
												margin: "4px",
											}}
										/>
									)}
								</Box>
							</Card>
						);
					})}
				</Box>
				<Box sx={{ marginTop: "1rem" }}>
					<Typography>Website Template</Typography>
					<Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
						{websiteTemplates.map((template, index) => {
							return (
								<Card
									key={index}
									sx={{
										borderRadius: "12px",
										boxShadow: "none",
										border:
											template.title.toLowerCase() === websiteTemplate
												? "1px solid #075AAA"
												: "1px solid #E5E7EB",
										my: "1rem",
										padding: "0.5rem 0.875rem",
										width: "30%",
										position: "relative",
									}}
									onClick={() =>
										handleTemplateChange(template.title.toLowerCase())
									}
								>
									<Box
										sx={{
											background:
													template.title.toLowerCase() === websiteTemplate
														? " #E6EEF6"
														: "#F5F5F5",
											minWidth: "100px",
											minHeight: "100px",
											width: "100%",
											borderRadius: "12px",
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Web sx={{ width: "100%", color: "#E8E8E8" }} />
									</Box>
									<Box sx={{ padding: "0.5rem" }}>
										<Typography sx={{ fontWeight: "600", fontSize: "1rem" }}>
											{template.title}
										</Typography>
										<Typography sx={{ color: "#475467", fontSize: "0.75rem" }}>
											{template.subtitle}
										</Typography>
									</Box>
									<Box
										sx={{
											zIndex: 1,
											borderRadius: "12px",
											position: "absolute",
											top: "10px",
											right: "10px",
											border: "1px solid #EEF6FF",
											background: "#FCFCFC",
											display: "flex",
											gap: "0.5rem",
											padding: "0.5rem",
										}}
									>
										<Typography
											sx={{
												fontSize: "0.75rem",
												color:
													template.title.toLowerCase() === websiteTemplate
														? " #075AAA"
														: "#141414",
											}}
										>
											Preview
										</Typography>
										<ArrowForward
											sx={{
												fontSize: "1rem",
												color:
													template.title.toLowerCase() === websiteTemplate
														? " #075AAA"
														: "#141414",
											}}
										/>
									</Box>
								</Card>
							);
						})}
					</Box>
				</Box>
			</Box>
			<Box sx={{ display: "flex", gap: "1rem", marginTop: '2rem' }}>
				<Button
					variant="contained"
					onClick={handlePublish}
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
					Publish
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
			<SuccessModal openModal={openModal} closeModal={() => setOpenModal(false)}/>
		</Box>
	);
}
