import React, { useContext, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "shared/components/cards";
import { Avatar, Box, Paper, Popper, Typography } from "@mui/material";
import { storeContext } from "components/provider/Provider";
import FilterCard from "shared/components/cards/filterCard";
import AdCard from "shared/components/cards/AdCard";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

const Store1 = () => {
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
            src="https://cdn.midjourney.com/76c17883-9f8c-4ced-b093-3ee4941b471b/0_3.png"
            sx={{
              width: "60px",
              height: "60px",
              overflow: "hidden",
              "& img": {
                objectFit: "cover",
                width: "160%",
                height: "160%",
                marginBottom: "-10%",
              },
            }}
          />
          <Typography sx={{ p: 2 }} variant="h5">
            Urban Heart
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
          }}
        >
          <Grid item xs={8} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4} display="flex" flexDirection="column">
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rr3hxMCE8-swjLNidyWl64ma8E8YP7uQMAlMqDd_ooWla8Xrv9pg5AvTrIMn7Lbvl3Jgnoe46UcnoN1wS2-Bg8dOZi3A=s1600"
                  priceEuro="20"
                />
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oVUF5NOUymRBmJaFGnJWcfwyjP0NAs9cPq1L3Pd4x9IM0dQP-oeEKCa7T12jVgeThyewrVTl5i5B9Q3lpbunKARc9Y=s1600"
                  priceEuro="23"
                />
              </Grid>
              <Grid item xs={8}>
                <AdCard
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pX29NGJ2lM9jsFb2GXXf7Mi85EtcXwN1KO1NDV3EU2hHyWJ28au6FQ8h7FhIOgigeMuzXFSC8dO7DByjKPpe_ZennXPA=s1600"
                  buttonText="Urban Heart"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qoQz9NjwnB3Ou6NIbaU6oWdrxsDmHwjDEZ_iIDDo0wsbtS9Wl9FU_-S8jTWAyeJ6JG_2P-NUfAQrgD4z3XnapdwFib=s1600"
                  priceEuro="15"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pON9fCBADuHcH1FIHIpvhPOBOAe6_-EuCVaQ5WZlt8LR-P8XcS1WyBCCrn5-Rr57t7h5QQC-guRTyYniaT_Is5Zvqxpw=s1600"
                  priceEuro="10"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qs0b9QzCl0JLzjnyUcv3_wPLY8rxKnF1j1g9vi7LLPkU-Ng_vo5nKWoyGMTeVNXITFZEv9sPqpIUyY6EqEvKdYxV9xsA=s1600"
                  priceEuro="20"
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
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pXC-QBa16NlU9dHjgiq2zYHvl0iPAo3C8GANIWqcZTDas1Psqm6heoirL5NxkkQVwRIfwf3tphzAcXHRgVDI68qrUa=s1600"
                  priceEuro="30"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81r_2FDrDdvCXUABHq90BV0D91mEmx45L2u53ILdcS47BZUT-rKxdc3e00WCtq9Kb_j9DVsycJUNrZfqQNuhTWmFtXT7mA=s1600"
                  priceEuro="28"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qFvQVel2yxcgQ0jjiDAYtJipe4UOJVyWR-OlIJu8yaTgwpx33mZFoWdzscnjOXGE_Xxxr6JuWFkBApfbJ6kYnsHWsq=s1600"
                  priceEuro="25"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81q4CIZTICBnR3OrHsAaU1xpL4Iq0TMHnWVO6Nh8sN9NmAdFPVHfsv7olcZ31FUOM5hXyi0yQICw8D0CqsJv_56MYbfoxQ=s1600"
                  priceEuro="69"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81o8BBWdNLnddKCSNUKOFZ2MjVWHcpMKIqRGK0TYlZiN1kWCF6MJ7KPg0qKNtiU3iQf825z2iRVxodz4ASXMDKjJT6gjiw=s1600"
                  priceEuro="95"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qz5rfH8aYXN8vu6iJM1HS9Clb-Idpvf6xxvFffepewQH1o0_2qiZEQrBg6U2sRpXLwMrPVdnSllZywZbXZ1jWgIGg0vQ=s1600"
                  priceEuro="64"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Store1;
