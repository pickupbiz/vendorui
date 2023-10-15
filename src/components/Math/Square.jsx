import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

export const Square = () => {
  const [num, setNum] = useState(0);
  const [ans, setAns] = useState(0);

  const handleSubmit = async () => {
    const reqUrl = `http://localhost:5020/sqr?num=${num}`;
    const result = await axios.get(reqUrl);
    setAns(result.data);
  };
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField
              type="number"
              onChange={(e) => setNum(e.target.value)}
              variant="outlined"
              label="Enter Number"
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              onClick={handleSubmit}
              sx={{ height: 55 }}
              variant="contained"
              fullWidth
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="h3">
              {ans}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
