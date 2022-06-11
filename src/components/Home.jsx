import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import mydp from "../static/images/avatar/mydp.jpg";

function Home() {
  return (
    <div>
      <Box>
        <Stack direction="row" spacing={5} sx={{ marginTop: 10 }}>
          <Stack>
            <Avatar
              alt="Shamsul Arifin"
              src={mydp}
              sx={{ height: 400, width: 400 }}
            />
            {/* <img src={mydp2} alt="Shamsul Arifin" /> */}
          </Stack>
          <Stack>
            <Typography
              sx={{
                fontFamily: "Kalam",
                fontSize: 40,
                fontStyle: "normal",
                fontWeight: "400",
                color: "#371B58",
                marginBottom: 10,
              }}
            >
              Ullamco deserunt fugiat dolore dolore deserunt elit duis
              reprehenderit aliqua. Ullamco do ut eiusmod aliquip enim Lorem
              aute nostrud laborum fugiat veniam reprehenderit officia esse.
              Aute tempor cupidatat velit irure. Excepteur aute laboris labore
              enim ut velit officia anim mollit sunt esse dolore. Ad
              exercitation anim eiusmod labore quis nisi velit. Ad aliqua enim
              pariatur est eu qui laborum proident eiusmod. Lorem quis eu
              laborum irure ad exercitation dolor irure irure pariatur qui minim
              exercitation.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
}

export default Home;
