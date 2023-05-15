import {
  AirlineSeatFlat,
  Apps,
  AutoAwesome,
  Blinds,
  Book,
  Brightness1,
  BurstMode,
  Home,
  NewReleases,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import React from "react";

const Sidebar = () => {
  const data = [
    {
      link: "#",
      text: "Home",
      icon: <Home />,
    },
    {
      link: "#",
      text: "Section 2",
      icon: <AutoAwesome />,
    },
    {
      link: "#",
      text: "Section 3",
      icon: <NewReleases />,
    },
    {
      link: "#",
      text: "Section 4",
      icon: <AirlineSeatFlat />,
    },
    {
      link: "#",
      text: "Section 5",
      icon: <Apps />,
    },
    {
      link: "#",
      text: "Section 6",
      icon: <Brightness1 />,
    },
    {
      link: "#",
      text: "Section 7",
      icon: <BurstMode />,
    },
    {
      link: "#",
      text: "Section 8",
      icon: <Blinds />,
    },
    {
      link: "#",
      text: "documentation",
      icon: <Book />,
    },
  ];

  return (
    <Box sx={{ bgcolor: "black", display: { xs: "none", sm: "block" } }}>
      <Box sx={{paddingTop:'15px', paddingLeft:'70px', display:'flex'}}>
       <DriveFileRenameOutlineOutlinedIcon sx={{ color: "white" }} />
        <Typography sx={{ color: "white" }}>Name</Typography>
      </Box>
      <Grid>
        <Grid>
          <Box>
            <List>
              {data.map((item) => (
                <ListItem sx={{'&:hover': {
                  bgcolor: 'grey',
                },}} disablePadding key={Math.random}>
                  <ListItemButton component="a" href={item.link}>
                    <ListItemIcon sx={{color:'white'}}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} sx={{ color: "white" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Box
            sx={{ "& button": { m: 1 }, position: "relative", top: "80px" }}
          >
            <Button variant="outlined">$0.90</Button>
            <Button variant="contained">Buy $XYZ</Button>
          </Box>
          <Box
            sx={{
              "& button": { m: 1 },
              position: "relative",
              top: "90px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Button>
              <LanguageIcon />
            </Button>
            <Brightness4OutlinedIcon sx={{ color: "white" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Sidebar;
