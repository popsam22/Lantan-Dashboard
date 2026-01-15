import { Box, Typography, Button } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NotFount() {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '2rem',
        backgroundColor: '#FAFAFA',
      }}
    >
      <Box
        sx={{
          textAlign: 'center',
          maxWidth: '500px',
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            padding: '1.5rem',
            borderRadius: '50%',
            backgroundColor: '#F1F6FE',
            marginBottom: '1.5rem',
          }}
        >
          <ConstructionIcon
            sx={{
              fontSize: '3rem',
              color: '#00142E',
            }}
          />
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 600,
            color: '#00142E',
            marginBottom: '1rem',
          }}
        >
          Page not Found
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '1rem',
            color: '#6B7280',
            marginBottom: '2rem',
            lineHeight: 1.6,
          }}
        >Please try again later or return to the previous page.
        </Typography>

        {/* Action Button */}
        <Button
          variant="contained"
          startIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
          sx={{
            backgroundColor: '#00142E',
            color: '#FFFFFF',
            textTransform: 'none',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#002855',
            },
          }}
        >
          Go Back
        </Button>
      </Box>
    </Box>
  );
}