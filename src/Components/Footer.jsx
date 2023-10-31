import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D7A91D",
          width: "100%",
          padding: 1.5,
          textAlign: "center",
        }}
      >
        <Typography>Telefon</Typography>
        <Typography>Lokalita</Typography>
        <Typography>Oteviraci doba</Typography>
        <Typography>email</Typography>
      </Box>
    </>
  );
}

export default Footer;
