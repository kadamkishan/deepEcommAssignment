import React from "react";
import "./App.css";
import img1 from "./assets/1st.png";
import img2 from "./assets/2nd.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (

  
    <div className="w-3/4 m-auto">


      
      <div className="mt-20 overflow-visible">
        <Slider {...settings}>
          <div className="m-auto">
            <img className="w-full" src={img1} alt="Image 1" />
          </div>
          <div>
            <img className="w-full"  src={img2} alt="Image 2" />
          </div>
          <div>
            <img className="w-full" src={img1} alt="Image 3" />
          </div>
          <div>
            <img className="w-full" src={img2} alt="Image 4" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default App;
