import React from "react";
import { Grid } from "@mui/material";
import { Square } from "./Math/Square";
import { Cube } from "./Math/Cube";
import { Power } from "./Math/Power";
import { Names } from "./Math/Names";
import { Ages } from "./Math/Ages";
export const Math = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Square />
        </Grid>
        <Grid item xs={3}>
          <Cube />
        </Grid>
        <Grid item xs={6}>
          <Power />
        </Grid>
        <Grid item xs={12}>
          <Names />
        </Grid>
        <Grid item xs={12}>
          <Ages />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
