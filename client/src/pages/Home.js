import { Box, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import Jumbotron from "../components/cards/Jumbotron";
import BestSellers from "../components/home/BestSellers";
import CategoryCard from "../components/home/CategoryCard";
import NewArrivals from "../components/home/NewArrivals";
import Background from "../components/images/background.png";
import Footer from "../components/nav/Footer";
import Banner from "./Banner";
const Home = () => {
  const [category, setCategory] = useState();
  return (
    <>
      <Box style={{width: "100%", margin: "auto"}}>
      <Box style={{width: "100%" , margin: "auto", zIndex: 1}}>
        <img style={{width: "100%", height: 700}} src={Background}/>
        <Box style={{position: "absolute", zIndex: 100, marginTop: -600, marginLeft: 200}}>
          <Typography style={{color: "#FFFFFF", fontSize: 50}}>Shopping And</Typography>
          <Typography style={{color: "#FFFFFF", fontSize: 50}}>Department Store</Typography>
          <Button style={{height: 50, borderRadius: 40, width: 140, color: "#FFFFFF", background: "#0088FF", marginLeft: 100}} onClick={() => {window.location.href = "/shop"}}>Learn More</Button>
          </Box>
      </Box>
      <div className="jumbotron text-danger h1 font-weight-bold text-center" style={{zIndex: 100}}>
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>
      </Box>

      <Banner handleCategory={(category) => {setCategory(category)}}/>
      <CategoryCard handleCategory={(category) => {setCategory(category)}} />
      <NewArrivals category={category}/>

      <BestSellers />
      
      <Footer />
    </>
  );
};

export default Home;
