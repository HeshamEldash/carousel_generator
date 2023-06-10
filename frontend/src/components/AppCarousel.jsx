import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";

function AppCarousel({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Carousel     sx={{ width: isMobile ? window.innerWidth : "40rem" }}  navButtonsAlwaysVisible={!isMobile} swipe={false}   autoPlay={false}  >{children}</Carousel>;
}

export default AppCarousel;
