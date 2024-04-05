import React from 'react'
import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";



const header = () => {
     const navigate = useNavigate();
  return (
    <>
    <div className="bg-white-A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-auto w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-center justify-between ml-[164px] mr-[181px] my-[15px] w-[76%]">
            <div className="header-row ">
              <Img
                className="h-[50px]"
                src=""
                alt="LOGO"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex flex-row sm:hidden items-start justify-between pl-[7px] pt-[7px] w-2/5">
              <div className="flex flex-col gap-2.5 items-center justify-start ml-[18px]">
                <Text
                  className="text-lg text-red-401"
                  size="txtSourceSansProBold18"
                >
                  Home
                </Text>
                <div className="bg-red-401 h-1.5 rounded-[50%] w-1.5"></div>
              </div>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/")}
              >
                page
              </Text>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/")}
              >
                page
              </Text>
              <Text
                className="common-pointer text-black-900 text-lg"
                size="txtSourceSansProBold18Black900"
                onClick={() => navigate("/")}
              >
                page
              </Text>
            </div>
          </div>
        </header>
    </div>
    </>
  )
}

export default header