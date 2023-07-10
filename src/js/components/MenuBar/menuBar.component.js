import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import {
  AppBar,
  Tabs,
  Toolbar,
  Tab,
  Typography,
  Container,
  Grid,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const TabCustom = styled(Tab)`
  text-transform: none;
  font-family: "Playfair";
  font-size: 19px;
  font-weight: normal;
  color: black;
`;

export const MenuBarComponent = () => {
  const theme = useTheme();  
  const matches = useMediaQuery(theme.breakpoints.up('lg'));
  const [value, setValue] = useState(0);
  const [title, setTitle] = useState("Obroty");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setTitle(event.target.textContent);
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Grid container sx={getGridStyles(matches)}>
        <Box
          sx={getTitleWrapperStyles(matches)}
        >
          <Typography
            sx={getTitleStyles(matches)}
          >
            {title}
          </Typography>
        </Box>

        <Box sx={{ paddingTop: "40px", display: { xs: 'none', lg:'block' } }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="menu główne aplikacji"
            indicatorColor={"primary"}
            sx={{ marginRight: "auto", boxShadow: 0 }}
            textColor="primary"
          >
            <TabCustom label="Obrót" value={0} to="/" component={Link} />
            <TabCustom
              label="Kontrahenci"
              value={1}
              to="/clients"
              component={Link}
            />
            <TabCustom
              label="Kategorie towarów"
              value={2}
              to="/categories"
              component={Link}
            />
            <TabCustom
              label="Stawki podatku"
              value={3}
              to="/tax-rates"
              component={Link}
            />
            <TabCustom
              label="Operacje"
              value={4}
              to="/operations"
              component={Link}
            />
            <TabCustom
              label="Użytkownicy"
              value={5}
              to="/users"
              component={Link}
            />
          </Tabs>
        </Box>
        <Box sx={{display: { xs: 'block', lg:'none' } }}>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}><MenuIcon/>Menu</Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}>
                <MenuItem onClick={handleClose}>Obrót</MenuItem>
                <MenuItem onClick={handleClose}>Kontrahenci</MenuItem>
                <MenuItem onClick={handleClose}>Kategorie towarów</MenuItem>
                <MenuItem onClick={handleClose}>Stawki podatku</MenuItem>
                <MenuItem onClick={handleClose}>Operacje</MenuItem>
                <MenuItem onClick={handleClose}>Użytkownicy</MenuItem>
            </Menu>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

function getGridStyles(pageBreak) {
  if (pageBreak) {
    return {
      flexDirection: "row", padding: '0 20px',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    }
  }
  return {
    flexDirection: "row", 
    padding: '20px 20px',
    alignItems: 'center',
    justifyContent: 'space-between' 
  }

}

function getTitleWrapperStyles(pageBreak) {
  if (pageBreak) {
    return {
        padding: 0,
        margin: 0,
        display: "block",
        position: "relative",
        width: "80px",
        height: "250px",
      }
  }
   
  return  {
     width: 'auto',
     display: 'flex',
     alignItems: 'center'

  }

}

function getTitleStyles(pageBreak) {
    if (pageBreak) {
        return {
            textAlign: "right",
            display: "block",
            fontSize: "16px",
            fontFamily: "Playfair",
            fontWeight: "500",
            width: "250px",
            position: "absolute",
            transformOrigin: "0 0",
            transform: "rotate(270deg) translateX(-250px)",
            textTransform: "uppercase",
            "&::after": {
              content: '""',
              width: "50px",
              height: "5px",
              marginLeft: "2px",
              backgroundColor: "#aa9588",
              display: "inline-block",
            },
          }
    }

    return {
      textAlign: "left",
      display: "inline-block",
      fontSize: "16px",
      fontFamily: "Playfair",
      fontWeight: "500",
      position: "relative",
      textTransform: "uppercase",
      borderBottom: '5px solid #aa9588',
      transform: 'none'
    }
};