import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {
  return (
    <div >
        
      <Box background="tomato" width="100%" padding="4" color="white">
        This is the Box
      </Box>
      <Outlet />
    </div>
  );
};

export default LandingLayout;
