import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const BasicCard = React.forwardRef(function BasicCard(props, ref) {


  return (
    <Card
      className={`${props.className}`}
      ref={ref}
      sx={Object.assign(
        {
          flexDirection: "row",
          display: "flex",
          marginBottom: "8em", 
          minWidth: 400,
          maxWidth: 800,
          position: "relative",
          backgroundColor: "#F8ECC9",
        },
        props.style
      )}
    >
      <div style={{ flexDirection: "column", display: "flex", minHeight: 400 }}>
        <CardContent>
          <Typography sx={{ fontSize: 36  }} gutterBottom >
            {props.title}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography sx={{ fontSize: 20, maxWidth: 700 }}>
            {props.text}
          </Typography>
        </CardContent>
      </div>
      <CardContent sx={{
        display: {
          xs: 'none',
          sm: 'block'
        }
      }}>
        <img src="./src/info-icon--6.png" style={{display: 'flex', opacity: 0.6  }} />
      </CardContent>
    </Card>
  );
})

export default BasicCard;
