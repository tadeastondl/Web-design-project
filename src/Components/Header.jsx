import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["O nás", "Kontaky", "Ceník", "Kariéra"];

const Header=React.forwardRef(function Header(props, ref) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };


  return (
    <AppBar position="static" style={{backgroundColor: '#D7A91D'}}>
        <Toolbar disableGutters>
          {/*   <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  */}
          <Typography
            ml='1em'
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1.5,
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pípy s.r.o.
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }} 
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, key) => (
                <MenuItem key={page} onClick= {()=> {handleScroll(ref[key]); handleCloseNavMenu()}}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/*   <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />  */}
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pípy s.r.o.
          </Typography>
          <Box sx={{ height: 64, flexGrow: 1, display: { xs: "none", md: "flex", alignItems: 'flex-end', } }}>
            {pages.map((page, key) => (
              <Button
                key={page}
                onClick={ () => {handleScroll(ref[key]) ;handleCloseNavMenu} }
                sx={{  color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
    </AppBar>
  );
})
export default Header;
