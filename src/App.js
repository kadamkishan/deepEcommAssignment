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
    
  
    <div className="relative flex min-h-screen ">
      <div className=" text-cyan-100 w-64  m-auto">
      {/* className="shadow" */}

        <div className="p-8  items-center ">
 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-50 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <span className="text-black font-bold">New Flow?</span>
          </a> 


          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-40 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Coffee? <span className="opacity-50">.Marisa Lu</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-40 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Feedback<span className="opacity-50">.Lindsey</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-40 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Post-grad plans<span className="opacity-50">Evenlyn</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-30 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Lunch Plan <span className="opacity-50">.Dennis</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-25 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>

            <span className="text-sm text-black font-bold">Victoria wang?</span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-20 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>

            <span className="text-sm text-black font-bold">Advait Kalakkad</span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-20 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
          </svg>

            <span className="text-sm text-black font-bold">Danny Trinh</span>
          </a> 
          
        </div>
        
      </div>
     
    
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
            <img className="w-full" src={img2} alt="Image " />
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
}

export default App;
