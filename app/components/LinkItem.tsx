import {
	KeyboardArrowDownRounded,
	KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { Box, Link } from "@mui/material";
import type React from "react";
import { useState } from "react";
import { useLocation } from "react-router";

interface ILinkItem {
	href: string;
	label: string;
	LinkIcon?: React.ComponentType<any>;
}
export default function LinkItem({
	href,
	label,
	LinkIcon,
	navChildren,
}: {
	href: string;
	label: string;
	navChildren?: ILinkItem[];
	LinkIcon: React.ComponentType<any>;
}) {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const paths = location.pathname.split("/").filter(Boolean);
	const link = href.split("/");

	const active = paths[paths.length-1] == link[link.length-1];
	return (
		<Link href={href} underline="none">
			<Box
				sx={{
					fontSize: "0.875em",
					color: "#2E2E2E",
					background: active ? "#E8E8E8" : "transparent",
					fontWeight: active ? 600 : 400,
					display: "flex",
					alignItems: "center",
					gap: "1rem",
					borderRight: active ? "5px solid #075AAA" : "0",
					padding: "0.5rem",
				}}
			>
				<LinkIcon
					sx={{
						fontSize: "1rem",
						marginRight: "0.25rem",
						color: " #2E2E2E",
						fontWeight: active ? 600 : 400,
					}}
				/>
				{label}
				{navChildren && (
					<Box
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
							setIsOpen(!isOpen);
						}}
						sx={{ cursor: "pointer", alignSelf: "end" }}
					>
						{isOpen ? (
							<KeyboardArrowUpRounded
								sx={{ marginLeft: "auto", fontSize: "1rem", color: "#2E2E2E" }}
							/>
						) : (
							<KeyboardArrowDownRounded
								sx={{ marginLeft: "auto", fontSize: "1rem", color: "#2E2E2E" }}
							/>
						)}
					</Box>
				)}
			</Box>
			{isOpen && (
				<Box
					sx={{
						paddingLeft: "2rem",
						display: "flex",
						flexDirection: "column",
						paddingY: "0.875rem",
						gap: "1rem",
					}}
				>
					{navChildren?.map((child) => (
						<Link
							key={child.href}
							href={child.href}
							underline="none"
							sx={{
								fontSize: "0.875em",
								color: "#2E2E2E",
								display: "flex",
								alignItems: "center",
								gap: "1rem",
							}}
						>
							{child.LinkIcon && (
								<child.LinkIcon
									sx={{
										fontSize: "0.75rem",
										marginRight: "0.25rem",
										color: " #5C5C5C",
									}}
								/>
							)}

							{child.label}
						</Link>
					))}
				</Box>
			)}
		</Link>
	);
}
