import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";
import { Button, Img, Text } from "components";
import Footer from "components/Footer";
import Eventtable from "components/Eventtable";
import Header from "components/Header";
import Addevent from "components/Addevent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';





const HomepagePage = () => {
  // const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-auto w-full">
        <Header />
        <div className="flex flex-col items-start justify-start w-full">
          <div className="h-[646px] max-w-[1181px] mx-auto md:px-5 relative w-full">
            <div className="absolute bg-cyan-50 h-[646px] inset-[0] justify-center m-auto rounded-[35px] w-full"></div>
            <div className="absolute h-[473px] inset-y-[0] my-auto right-[0] w-[94%] md:w-full">
              <Img
                className="absolute h-[500px] inset-y-[0] my-auto object-cover right-[0] w-1/3 mr-10 flex rounded-3xl "
                src="https://t4.ftcdn.net/jpg/01/21/16/65/240_F_121166552_8OhRtCSmjbEzX6qMkK8jVecSGcvQe0Sc.jpg"
                alt="group665"
              />
              <div className="absolute flex flex-col items-start justify-start left-[0] rounded-[5px] top-[10%] w-[55%]">
                <Text
                  className="leading-[80.00px] md:text-5xl text-[75px] text-black-900 w-full"
                  size="txtSourceSansProBold75"
                >
                  <span className="text-black-900 font-sourcesanspro text-left font-bold">
                  Stay Ahead of the {" "}
                  </span>
                  <span className="text-red-401 font-sourcesanspro text-left font-bold">
                    Game
                  </span>
                </Text>
                <Text
                  className="leading-[35.00px] md:ml-[0] ml-[3px] mt-[25px] text-black-900_60 text-xl w-[73%] sm:w-full"
                  size="txtSourceSansProRegular20"
                >
                  Maximize your business with a variety of services and services
                  from us
                </Text>
                <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mt-[39px] rounded-[5px] w-[71%] md:w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] rounded-[5px] text-base text-center  hover:bg-black"
                    color="black_900"
                    size="sm"
                  >
                    Contact Us
                  </Button>
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[201px] rounded-[5px] text-base text-center  hover:bg-black"
                    color="black_900"
                    size="sm"
                    variant="outline"
                   onClick={handleModal}> <FontAwesomeIcon icon={faAdd} className="one mr-1"/> Add Event
                   </Button>
                  <Addevent isOpen={isModalOpen} onClose={handleModal} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1181px] mt-[100px] mx-auto md:px-5 w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtSourceSansProBold40"
              >
                Results:
              </Text>
            </div>
          </div>
          <div className="w-3/5 mt-10 mx-auto flex justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        className="py-2 px-4 rounded-lg focus:outline-none focus:ring-2  w-full"
      />
      <button
        className=" ml-5 py-2 px-4 bg-gray-300 border-none text-white rounded-r-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
       </div>
      </div>
          <Eventtable/>
          <Footer className="bg-gray-801 flex items-center justify-center mt-[120px] rounded-tr-[50px] w-full" />
          
    </>
  );
};

export default HomepagePage;
