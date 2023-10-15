import React, { useState, useEffect } from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import axios from "axios";

export const Names = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:5020/names");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid item xs={3}>
              <Button variant="outlined" fullWidth color="success">
                {item}
              </Button>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};
