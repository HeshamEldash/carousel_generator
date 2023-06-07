import React from "react";
import Carousel from "react-material-ui-carousel";

function AppCarousel({ children }) {
  return <Carousel sx={{width:"40rem"}}   navButtonsAlwaysVisible={true} swipe={false}   autoPlay={false}  >{children}</Carousel>;
}

export default AppCarousel;
