import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Paper } from "@mui/material";

import AppBar from "../components/AppBar";
import Hero from "../components/Hero";
import Weapons from "../components/Weapons";

const Home = () => {
  return (
    <>
      <CssBaseline />
      <AppBar />
      <Hero />
      <Paper style={{ margin: "50px", padding: "10px" }}>
        <Weapons />
      </Paper>
    </>
  );
};

export default Home;
