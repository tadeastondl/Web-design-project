import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/system";
import { forwardRef } from "react";

const Layout = forwardRef(function Layout(props, ref) {


  return (
    <>
      <Header ref={ref} />
      <Container maxWidth="xl" fixed>
       <Box sx={{minHeight: '92.89vh', }}> {props.children}
       </Box>
       </Container>
      <Footer/>
    </>
  );
}
)

export default Layout;
