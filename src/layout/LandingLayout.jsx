import { Button } from "../components/ui/button";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
} from "../components/ui/menu";
import { Box, Link } from "@chakra-ui/react";
import React from "react";
const LandingLayout = () => {
  return (
    <div>
      <Box background="tomato" width="100%" padding="4" color="white">
      <Link href="...">Click here</Link>
      <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Open Menu
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="rename">Rename</MenuItem>
        <MenuItem value="export">Export</MenuItem>
        <MenuItem
          value="delete"
          color="fg.error"
          _hover={{ bg: "bg.error", color: "fg.error" }}
        >
          Delete...
        </MenuItem>
      </MenuContent>
    </MenuRoot>
      </Box>
    </div>
  );
};

export default LandingLayout;
