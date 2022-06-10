import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#371B58",
        // borderRadius: "0 0 10px 10px",
        // boxShadow: "5",
      }}
    >
      <Button>
        <Avatar alt="Shamsul Arifin" src="/static/mydp.jpg" />
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: "700",
            color: "#EEB76B",
          }}
        >
          Me
        </Typography>
      </Button>
      <Button>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: "700",
            color: "#EEB76B",
          }}
        >
          Portfolio
        </Typography>
      </Button>
      <Button>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: "700",
            color: "#EEB76B",
          }}
        >
          Blogs
        </Typography>
      </Button>
      <Button>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: 25,
            fontStyle: "normal",
            fontWeight: "700",
            color: "#EEB76B",
          }}
        >
          Tutorials
        </Typography>
      </Button>
    </Box>
  );
}

export default Navbar;
