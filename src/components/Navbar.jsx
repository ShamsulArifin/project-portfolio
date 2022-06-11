import { Box, Breadcrumbs, Button, Stack, Typography } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <Box
      sx={{
        backgroundColor: "#FEE2C5",
        // borderRadius: "0 0 10px 10px",
        // boxShadow: "5",
      }}
    >
      <Stack direction="row" spacing={100}>
        <Stack>
          <Button>
            <Typography
              sx={{
                fontFamily: "Nunito",
                fontSize: 25,
                fontStyle: "normal",
                fontWeight: "700",
                color: "#371B58",
                paddingLeft: 2,
              }}
            >
              Shamsul Arifin
            </Typography>
          </Button>
        </Stack>
        <Stack direction="row">
          <Breadcrumbs aria-label="breadcrumb">
            <Button>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontSize: 25,
                  fontStyle: "normal",
                  fontWeight: "700",
                  color: "#371B58",
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
                  color: "#371B58",
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
                  color: "#371B58",
                }}
              >
                Tutorials
              </Typography>
            </Button>
            <Button>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontSize: 25,
                  fontStyle: "normal",
                  fontWeight: "700",
                  color: "#371B58",
                }}
              >
                Resources
              </Typography>
            </Button>
            <Button>
              <Typography
                sx={{
                  fontFamily: "Nunito",
                  fontSize: 25,
                  fontStyle: "normal",
                  fontWeight: "700",
                  color: "#371B58",
                }}
              >
                Contact
              </Typography>
            </Button>
          </Breadcrumbs>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navbar;
