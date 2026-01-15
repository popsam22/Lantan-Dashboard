export const formStyles = {
	textField: {
		"& .MuiOutlinedInput-root": {
			borderRadius: "8px",
			backgroundColor: "#F9FAFB",
			"& fieldset": {
				borderColor: "#E5E7EB",
			},
			"&:hover fieldset": {
				borderColor: "#D1D5DB",
			},
			"&.Mui-focused fieldset": {
				borderColor: "#3B82F6",
			},
		},
	},
	label: {
		fontSize: "1rem",
		fontWeight: 500,
		color: "#1F2937",
		marginBottom: "0.5rem",
	},
  colorInput: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    backgroundColor: '#FFFFFF',
    cursor: 'pointer',
    '&:hover': {
      borderColor: '#3B82F6',
    },
  },
};
