import React from "react";
import { Card, CardContent } from "@mui/material";
import { Landing } from "./components/Landing";
import "./components/common.css";
import { grey } from "@mui/material/colors";

function App() {
  return (
    <Card sx={{ bgcolor: "grey" }}>
      <CardContent>
        <Landing />
      </CardContent>
    </Card>
  );
}

export default App;
