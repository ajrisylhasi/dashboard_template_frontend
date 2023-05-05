import React from "react";
import Grid from "@mui/material/Grid";
import Card from "shared/components/cards";
import { Box } from "@mui/material";

const Feed = () => {
  console.log("test")

  return (
    <Box height="90%" 
        margin="auto" 
        sx={{
          aspectRatio: '1/1', 
          maxWidth: "100%", 
          overflow: "scroll", 
          scrollbarWidth: "none"
        }}>
      <Grid
        container
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          overflow: "hidden",
          flexWrap: "nowrap",
        }}
      >
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={8}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} width="100%" flexWrap="nowrap">
          <Grid container height="100%" sx={{flexWrap: "nowrap"}}>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4} sx={{display: "flex", flexDirection: "column"}}>
              <Card />
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        height="100%"
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{
          overflow: "hidden",
        }}
      >
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
            <Grid item xs={4}>
              <Card />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Feed;
