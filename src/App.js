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

    <div>

      <h3 className="p-10 ml-8 absolute text-[100px] opacity-10" >
        <span className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"             stroke-width="1.5" stroke="currentColor" class="w-6 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>

        </span>
        Review Inbox</h3>
    
  
    <div className="relative flex min-h-screen ">
      <div className=" text-cyan-100 w-64  m-auto">
      {/* className="shadow" */}

      {/* left bar */}

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
            <span className="text-sm text-black font-bold">Coffee? <span className="opacity-50">. Marisa Lu</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-40 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Feedback<span className="opacity-50">. Lindsey</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-40 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Post-grad plans<span className="opacity-50">. Evenlyn</span></span>
          </a> 

          <a href="" className="flex items-center py-3 px-4 space-x-2 opacity-30 hover:bg-[#dadadc] rounded-lg text-sm hover:text-black hover:font-bold hover:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <span className="text-sm text-black font-bold">Lunch Plan <span className="opacity-50">. Dennis</span></span>
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
     

     {/* content */}
    
    <div className="w-3/4 m-auto">
      
      <div className="mt-20 overflow-visible">
        <Slider {...settings}>
          <div className="w-full  bg-white rounded-xl">

            <div className="">
              <div className="bg-[#dadadc] rounded-lg">
                <a href="" className="flex items-center py-3 px-4 space-x-2  hover:bg-[#dadadc] rounded-lg text-sm text-black hover:font-bold hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="black" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <span className="text-sm text-black font-bold">Coffee? <span className="opacity-50">. Marisa Lu</span></span>
                </a> 
              </div>

              <div className="py-3 px-4">
                <div className="text-2xl">
                  Marisa LU
                </div>

                <div className="text-2xl font-bold mt-2">
                  Coffee?
                </div>

                <div className="mt-5">
                  Hey Jason,
                </div>

                <div className="mt-4">
                  Was Wondering if you'd be intreseted in meeting my team at philz coffee at 11 AM Today. No pressure if you can't make it , although you guy would really get along !
                </div>

                <div className="mt-4">
                  Marisa
                </div>

                <div className="flex gap-x-2 mt-7 font-semibold opacity-40">
                  <div className="bg-[#e7dadd] rounded-lg p-2">Reply</div>
                  <div className="bg-[#e7dadd] rounded-lg p-2">Forward</div>
                  <div className="bg-[#e7dadd] rounded-lg p-2">Delete</div>
                </div>
              </div>
            </div>
            {/* <img className="" src={img1} alt="Image 1" /> */}
          </div>

          <div className="w-full  bg-white rounded-xl">

            <div >
              <div className="bg-[#dadadc] rounded-lg">
                  <a href="" className="flex items-center py-3 px-4 space-x-2  hover:bg-[#dadadc] rounded-lg text-sm text-black hover:font-bold hover:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                  <span className="text-sm text-black font-bold">Philz Coffee? <span className="opacity-50">. Location</span></span>
                </a> 
              </div>

              <div className="h-[140px] m-auto " >

                <div className="p-2 ">
                  <img className="h-[200px] w-full" src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" alt="images232"/>

                </div>
              </div>
              <div className="py-3 px-4">


                <div className="text-2xl font-bold mt-16">
                  Philz Coffee
                </div>

                <div className="mt-5 text-lg font-semibold opacity-60">
                  Custom-blended java in casual setting.
                </div>


                <div className="mt-4">
                  <div className="font-semibold opacity-40">
                    20865 Stevens Creek Blvd
                    <br></br>
                    Cupertino,CA 95014
                  </div>
                  
                </div>

                <div className="flex gap-x-2 mt-7 font-semibold opacity-60">
                  <div className="bg-[#e7dadd] rounded-lg p-2">
                    <span></span>
                    Get direction</div>
                  <div className="bg-[#e7dadd] rounded-lg p-2">See Details</div>
                  <div className="bg-[#e7dadd] rounded-lg p-2">Find more cafes nearby</div>
                </div>
              </div>
            </div>
            {/* <img className="" src={img1} alt="Image 1" /> */}
          </div>
          <div>
            <img className="w-full"  src={img2} alt="Image 2" />
          </div>
          <div>
            <img className="w-[480px]" src={img1} alt="Image 3" />
          </div>
          
        </Slider>
      </div>
    </div>
    </div>

    </div>
  );
}



export default App;
