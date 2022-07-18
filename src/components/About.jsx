import React from "react";
import mainPic from "../Assets/Images/imgMyGarden.jpg";
import Navbar from "./Navbar";
const About = () => {
  return (
    <>
      <Navbar />
      <div className=" w-screen md:h-screen  flex items-center justify-start">
        <div className="max-w-[1000px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <img src={mainPic} alt="" className="pt-28 w-[650px]" />
            <p className="text-xs text-end mr-6 font-thin">
              Photo by Christopher Hirsheimer
            </p>
          </div>
          <div className="text-start pl1">
            <p className="py-28 text-sm font-light sm:m-2">
              Deborah Madison is the award-winning author of fourteen cookbooks,
              including The New Vegetarian Cooking for Everyone and Vegetable
              Literacy. Her books have received four lames Beard Foundation Book
              Awards and five awards from the IACP; she was inducted into the
              James Beard Foundation Cookbook Hall of Fame in 2016 and the Who's
              Who of Food and Beverage in 2005. She lives in New Mexico. Thanks
              to her beloved cookbooks and groundbreaking work as the chef at
              Greens Restaurant in San Francisco, Deborah Madison, though not a
              vegetarian herself, has long been revered as this country's
              leading authority on vegetables. She profoundly changed the way
              generations of Americans think about cooking with vegetables,
              helping to transform "vegetarian" from : dirty word into a
              mainstream way of eating.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
