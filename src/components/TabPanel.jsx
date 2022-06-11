import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Home from "./Home";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab
            label="Shamsul Arifin"
            {...a11yProps(0)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
              marginRight: 123,
            }}
          />
          <Tab
            label="Portfolio"
            {...a11yProps(1)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
            }}
          />
          <Tab
            label="Blogs"
            {...a11yProps(2)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
            }}
          />
          <Tab
            label="Tutorials"
            {...a11yProps(3)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
            }}
          />
          <Tab
            label="Resources"
            {...a11yProps(4)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
            }}
          />
          <Tab
            label="Contact"
            {...a11yProps(5)}
            sx={{
              fontFamily: "Nunito",
              fontSize: 20,
              fontStyle: "normal",
              fontWeight: "700",
              color: "#371B58",
            }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
          <Home />
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
