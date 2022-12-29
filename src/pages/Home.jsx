import React from "react";
import { Paper } from "@mui/material";

import Hero from "../components/Hero";
import Weapons from "../components/Weapons";

const Home = () => {
  return (
    <>
      <Hero />
      <Paper style={{ margin: "50px", padding: "10px" }}>
        <Weapons />
      </Paper>
    </>
  );
};

export default Home;
