import React, { useContext, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "shared/components/cards";
import { Avatar, Box, Paper, Popper, Typography } from "@mui/material";
import { storeContext } from "components/provider/Provider";
import FilterCard from "shared/components/cards/filterCard";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const Store2 = () => {
  const { state } = useContext(storeContext);
  const mainBox = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (mainBox.current) {
      setOpen(true);
    }
  }, [mainBox]);

  return (
    <>
      <Popper open={open} anchorEl={mainBox.current} placement="left-start">
        <Paper
          sx={{
            borderRadius: "15px",
            marginTop: "10px",
            marginRight: "15px",
            padding: "12px",
            maxWidth: "35vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Avatar
            src="https://cdn.midjourney.com/ef09e453-b37e-4a4f-b143-bf1395996778/0_2.png"
            sx={{
              width: "60px",
              height: "60px",
              overflow: "hidden",
              "& img": {
                objectFit: "cover",
                width: "120%",
                height: "120%",
              },
            }}
          />
          <Typography sx={{ p: 2 }} variant="h5">
            Couture by HANA
          </Typography>
          <Typography sx={{ p: 0 }} variant="body1">
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarHalfRoundedIcon color="primary" />
          </Typography>
        </Paper>
      </Popper>
      <Box
        height="100%"
        ref={mainBox}
        margin="auto auto 0px auto"
        sx={{
          aspectRatio: "4/3",
          maxWidth: "100%",
          overflow: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          className={state.feed.filterOpen && "showing"}
          sx={{
            transition: "height 0.5s, opacity 0.3s",
            height: 0,
            opacity: 0,
            "& *": {
              height: 0,
              transition: "height, 0.3s",
            },
            "&.showing": {
              height: "33%",
              opacity: 1,
              transition: "height, 0.5s",
              "& *": {
                height: "100%",
              },
            },
          }}
        >
          <Grid item xs={4} width="100%" height="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={12}>
                <FilterCard />
              </Grid>
            </Grid>
          </Grid>
        </Box>
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
          <Grid item xs={8} width="100%" flexWrap="nowrap">
            <Grid container height="100%" sx={{ flexWrap: "nowrap" }}>
              <Grid item xs={4}>
                <Card image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oxOPd5fs0QYKq8lbAFPE56pxdeiSQjhmp_8GqgMGSFhQUes_mZaU85MSnDsIVpKYt1ORUnXSmOoEoMuyAWglBTeo_aSw=s1600" />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81p0TJO0C_c8zBrx4vNuCZI1pP38JAlWvrg95a52iJhIAizC38dbvwIzXm2linj4yf-lVTmM4s6MFshu2tI4W-b5ZbrP8Q=s1600"
                  priceEuro="67"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81reoUUcpaRwcORJ49t2bMfckjv6SsU-9u9YGNqlQAq5S2kgD-YbdRlWNeywtrx8VoITxZbof6UYzXRx6LPgvzvcHERmNg=s1600"
                  priceEuro="94"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rPkQPj5QZnQEL1sDXra9WcTi98duRQZJJeNEUzGQnu4Vm5obNSz5LRpJQ-k0l6Whdoe99b1wI_Mt4j8pYQD1ghjbw_eA=s1600"
                  priceEuro="23"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o2u_VwkjLnQ9vWI3lE5UfepBspi2qt4XsP7VnM9Aj203NITuJitpfimnu4Y5Ap0W4aytS1q5dDCYDhe1krP83O6jhYSw=s1600"
                  priceEuro="40"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pSDfdcugJ2YJENF6aa-v0O9jQKQOdyA7zAmnitx9nxkzl_eAAjdZ1iVcCtPpsfd-z86_Qpvvrb-S4jyyu7CkvjIIElnQ=s1600"
                  priceEuro="29"
                />
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
            flexWrap: "nowrap",
          }}
        >
          <Grid item xs={8} width="100%" flexWrap="nowrap">
            <Grid container height="100%" sx={{ flexWrap: "nowrap" }}>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81osp6I_njJpNAWsQlQ65oH_7GjSi6aDrnZeAxTshJrYhMBa0LkWLzxtiaGqoPeluHmv36mmzzMhB_03TmgvB-Od7rPN=s1600"
                  priceEuro="102"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oiuK5DbguHV1eDPf61UqDB-fAGp2Rf9XXgXvvjNt-veY8G5nYi7Fgm-q3bCjUFt8zw8HXAKGsgwQYJr0VJOzuUVSawKQ=s1600"
                  priceEuro="83"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o9z09XI7DRKd3jKScjgDJfRHBVpxjdb9w5ZoW_CFBMXwo5wJioMyheRp49ybAKcqc9Cv8NSrGLWiYEEVl1jSRWqB9zhw=s1600"
                  priceEuro="85"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pDgF9E1PBYTzk6olhROeurCwkEpoA6zN2xtJOR4m_mzrSnoteGz83tBO2-Ng0yj9-AjRrj-gxcDQBg-7BQBy0gloTv=s1600"
                  priceEuro="25"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81phu_Ho3mHieTN2dJy51YXiGIR74B0XiW0ZFSQimJGCEpTZCF46kPzTUb5zQnhLNxWaBv3UyDO-ZazQ-lgaKyB-KXKS6g=s1600"
                  priceEuro="20"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81orRF8cHTb8BHFzs1So1iZVHP4jifyszOvDdQ-72zmoVcqrKy1XdhMFV5BIoL-qxgMKzO13F4VJdXlmuJ-OzpxLkFnWfA=s1600"
                  priceEuro="49"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Store2;
