import React, { useContext, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "shared/components/cards";
import { Avatar, Box, Paper, Popper, Typography } from "@mui/material";
import { storeContext } from "components/provider/Provider";
import FilterCard from "shared/components/cards/filterCard";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

const Store3 = () => {
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
            src="https://cdn.midjourney.com/dd8bcc7f-ab35-4a48-b512-80ab595602f6/0_0.png"
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
            Mommy & Me
          </Typography>
          <Typography sx={{ p: 0 }} variant="body1">
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
            <StarRoundedIcon color="primary" />
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
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rES--CfGAmI9lSSdISsbnPrm_BjJdChG54nI7AiZYjN6KJeAHsV8B7_7Gn-bmoTaiygjRsWhFKyv2S_qQrRzaC_XL-TA=s1600"
                  priceEuro="20"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pjZI_RW8Wtaa7eQ5v2ZYPvvGmLAx5S2iOrzfrOJsl73GqK2b1XsrEdLJ1aoc88aQX1jiGMy8dYR0xJbAl7Hg0-dRQn=s1600"
                  priceEuro="10"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pkdfGRlR1JNWztI3DgDHaCyyulTI7H4dsyI6YsSeInKAGQNsG0UtNcegWWApViPJ7fBwzDPli_iWJ6Zl_IEj8u2YeTcg=s1600"
                  priceEuro="40"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%">
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81phAlcozkhbsIZbq9lAnjx9Hu8u2lCxwMvoa1_ZWWqEPKKZ0EVyosevAE5ppF_KQ6zXgfBz3w1NXPBjrx8clT-PRUrGnw=s1600"
                  priceEuro="30"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81okD1yYZblg6ONY8dOgNyoUe-OPVLzkdEvBazwr56tCBwwf1QbxGU8erICaBh1u-I0s7HTPquwCUgjvKHkTFSdWRNIjFA=s1600"
                  priceEuro="70"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qyvh3-CTqCgiZ-NBCWZj2JDkxF1CdJ-XAowEr2bGiEo5z0cyZ5kgTvSY2Ij4dNImtBbGafJ4MiaLethyci2omzlUEgxg=s1600"
                  priceEuro="30"
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
            <Grid container height="100%">
              <Grid item xs={8}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81raXjVZWWC0Yo4cgxWdGQT6wgax8S-itIckSJut6nZa3mf2enPh0nQqkn83_RMyX521sMSlka4zLu55KjmjZotabcGMNQ=s1600"
                  priceEuro="30"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81ofKznECfT4RFkHQoCPT1GMGV3SDtdJiyoudgTK7gUd-3O0jzMzXeS6YdNWv6erXQKBzfp7B0jLh7W6jiu1GiQcsbjr=s1600"
                  priceEuro="12"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4} width="100%" flexWrap="nowrap">
            <Grid container height="100%" sx={{ flexWrap: "nowrap" }}>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81qySRkZvmcKmoKmWMQ-egwfPtk38zZiqLXz9m4FeibyBKiYQlHobJ0xRPiao_cB-ap0SXBUeLhnWIhMYEDnsJW2nU51Kg=s1600"
                  priceEuro="20"
                />
              </Grid>
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rqJfoUaxO2hrHgWu3_-Y5F6vpQsT9UWj4QnfCuqOAWboyfujg8Lp0h7AgVk6nEz__tHE3dw2A8eUy_yGjjPBHDrOTksA=s1600"
                  priceEuro="30"
                />
              </Grid>
              <Grid item xs={4}>
                <Card
                  image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rc6RP0jkxaxgB52Zn-IaLWvv5TlCb9FyvAMkOieu1FiZv41uPVt8u19yd23DDFKA9ma_8rv0ZIRsrgU8562QEOsQgc=s1600"
                  priceEuro="15"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Store3;
