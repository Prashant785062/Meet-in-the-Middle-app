import { Link } from "react-router-dom";
import NotesIcon from "@mui/icons-material/Notes";
import Alert from "@mui/material/Alert";
import { Box, Typography } from "@mui/material"; 

export default function ProductsDropdown() {
  return (

    <Box 
      className="bg-white  shadow-2xl z-50" 
      sx={{ 
        width: 450, // Fixed width for a professional mega menu look
        borderRadius: 2, 
        border: '1px solid',
        borderColor: 'grey.300', // Subtle border
        p: 2, 
      }}
    >
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: 2, 
          p: 1 
        }}
      >
        
        <Link
          to="/notes"
          className="flex flex-col items-start p-3 rounded-lg no-underline transition duration-200"
          style={{ 
            backgroundColor: 'rgba(109, 40, 217, 0.1)', 
            border: '1px solid #6D28D9' 
          }}
        >
          <NotesIcon sx={{ color: 'primary.main', fontSize: 30, mb: 1 }} />
          <Typography 
            variant="subtitle1" 
            sx={{ fontWeight: 'bold', color: 'text.primary' }}
          >
            Quick Notes
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Coordinate and store short-term meeting notes.
          </Typography>
        </Link>

        <Box sx={{ gridColumn: 'span 2', mt: 1 }}>
          <Alert severity="info" variant="outlined">
            More products will be added after WebRTC and Socket integration. Stay tuned for further updates!
          </Alert>
        </Box>
      </Box>
    </Box>
  );
}