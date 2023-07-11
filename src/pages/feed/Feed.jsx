import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Card from "shared/components/cards";
import { Box } from "@mui/material";
import { storeContext } from "components/provider/Provider";
import FilterCard from "shared/components/cards/filterCard";
import ad5 from "assets/clothes/ad5.png";
import ad4 from "assets/clothes/ad4.png";
import ad2 from "assets/clothes/ad2.png";
import ad1 from "assets/clothes/ad1.png";
import babyClothes from "assets/clothes/babyClothes.webp";
import oliveShirt from "assets/clothes/oliveShirt.png";
import whiteShirt from "assets/clothes/whiteShirt.png";
import whiteSneakers from "assets/clothes/whiteSneakers.png";
import brownDress from "assets/clothes/brownDress.png";
import AdCard from "shared/components/cards/AdCard";
import newBalance from "assets/clothes/newBalance.png";
import { useNavigate } from "react-router-dom";

const Feed = () => {
  const { state } = useContext(storeContext);
  const navigate = useNavigate();

  return (
    <Box
      height="100%"
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
              <AdCard
                image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81oxOPd5fs0QYKq8lbAFPE56pxdeiSQjhmp_8GqgMGSFhQUes_mZaU85MSnDsIVpKYt1ORUnXSmOoEoMuyAWglBTeo_aSw=s1600"
                buttonClick={() => navigate("/couture-by-hana")}
              />
            </Grid>
            <Grid item xs={8}>
              <AdCard
                image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81pX29NGJ2lM9jsFb2GXXf7Mi85EtcXwN1KO1NDV3EU2hHyWJ28au6FQ8h7FhIOgigeMuzXFSC8dO7DByjKPpe_ZennXPA=s1600"
                buttonClick={() => navigate("/urban-heart")}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={8}>
              <Card image={babyClothes} priceEuro="30" />
            </Grid>
            <Grid item xs={4}>
              <AdCard
                image="https://lh3.googleusercontent.com/drive-viewer/AFGJ81rqJfoUaxO2hrHgWu3_-Y5F6vpQsT9UWj4QnfCuqOAWboyfujg8Lp0h7AgVk6nEz__tHE3dw2A8eUy_yGjjPBHDrOTksA=s1600"
                buttonClick={() => navigate("/mommy-&-me")}
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
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={8}>
              <AdCard image={ad2} />
            </Grid>
            <Grid item xs={4}>
              <Card
                image={whiteShirt}
                priceEuro="24"
                priceCents="95"
                preloved
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} width="100%" flexWrap="nowrap">
          <Grid container height="100%" sx={{ flexWrap: "nowrap" }}>
            <Grid item xs={4}>
              <AdCard image={ad5} />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
              <Card priceEuro="99" priceCents="99" preloved />
              <Card image={newBalance} preloved />
            </Grid>
            <Grid item xs={4}>
              <Card image={oliveShirt} priceEuro="44" priceCents="99" />
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
        <Grid item xs={8} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={4} display="flex" flexDirection="column">
              <Card image={brownDress} priceEuro="85" />
            </Grid>
            <Grid item xs={8}>
              <AdCard image={ad1} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={8}>
              <Card image={babyClothes} priceEuro="30" />
            </Grid>
            <Grid item xs={4}>
              <Card image={whiteSneakers} priceEuro="40" />
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
        <Grid item xs={4} width="100%" flexWrap="nowrap">
          <Grid container height="100%">
            <Grid item xs={8}>
              <AdCard image={ad2} />
            </Grid>
            <Grid item xs={4}>
              <Card image={whiteShirt} priceEuro="24" priceCents="95" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8} width="100%" flexWrap="nowrap">
          <Grid container height="100%" sx={{ flexWrap: "nowrap" }}>
            <Grid item xs={4}>
              <AdCard image={ad5} />
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
              <AdCard image={ad4} />
              <Card image={newBalance} />
            </Grid>
            <Grid item xs={4}>
              <Card image={oliveShirt} priceEuro="44" priceCents="99" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Feed;
