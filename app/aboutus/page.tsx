"use client";
import Container from "@/components/Container";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Zoom from "react-reveal/Zoom";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <p className='text-center element text-[#000814] text-[64px] font-semibold mb-[51px] mobile:mb-8 mt-[129px] mobile:mt-14 px-[130px] mobile:text-[26px] mobile:px-0  '>
        {t("aboutTitle")}
      </p>
      <p className='text-center element text-[#000814] text-[32px] px-[80px] mb-[109px] mobile:text-[20px] mobile:px-0 mobile:mb-10'>
        {t("aboutText")}
      </p>
      <Zoom>
        <div className='flex items-center justify-between mb-[119px] mobile:mb-10 mobile:flex-col mobile:items-start'>
          <div className='flex justify-between w-[45%] mobile:w-full mobile:items-center mobile:mb-4 mobile:justify-center'>
            <div className='flex items-center mobile:mr-5'>
              <p className='text-[48px] mobile:text-[24px] font-extrabold text-[#000814] mr-[5px]'>
                200+
              </p>
              <p className='font-extrabold mobile:text-[12px] text-[#000814] w-[110px] leading-[1.1]'>
                {t("projectsDone")}
              </p>
            </div>
            <div className='flex items-center'>
              <p className='text-[48px] mobile:text-[24px] font-extrabold text-[#000814] mr-[5px]'>
                10+
              </p>
              <p className='font-extrabold mobile:text-[12px] text-[#000814] w-[110px] leading-[1.1]'>
                {t("creativePeople")}
              </p>
            </div>
          </div>
          <div className='flex justify-between w-[45%] mobile:w-full mobile:justify-center'>
            <div className='flex items-center mobile:mr-10'>
              <p className='text-[48px] mobile:text-[24px] font-extrabold text-[#000814] mr-[5px]'>
                5+
              </p>
              <p className='font-extrabold mobile:text-[12px] text-[#000814] w-[110px] leading-[1.1]'>
                {t("yearsExperience")}
              </p>
            </div>
            <div className='flex items-center'>
              <p className='text-[48px] mobile:text-[24px] font-extrabold text-[#000814] mr-[5px]'>
                120+
              </p>
              <p className='font-extrabold mobile:text-[12px] text-[#000814] w-[110px] mobile:w-[95px] leading-[1.1]'>
                {t("satisfiedCustomers")}
              </p>
            </div>
          </div>
        </div>
      </Zoom>
      <p className='text-center text-[#000814] text-[64px] mobile:text-[32px] font-semibold'>
        {t("weWorked")}
      </p>
      <p className='text-center text-[#5390D9] text-[64px] mobile:text-[32px] font-semibold'>
        {t("industryLeading")}
      </p>
      <p className='text-center text-[#000814] text-[64px] mobile:text-[32px] font-semibold mb-[108px] mobile:mb-[82px]'>
        {t("brands")}
      </p>
      <div className='flex justify-around items-center mb-[98px] mobile:flex-col'>
        <Zoom>
          <Image
            src={"/images/brand1.png"}
            alt='brand'
            width={282}
            height={79}
            className='mobile:mb-[99px] mobile:w-[179px] mobile:h-[51px]'
          />
        </Zoom>
        <Zoom>
          <Image
            src={"/images/brand2.png"}
            alt='brand'
            width={93}
            height={92}
            className='mobile:mb-[99px] mobile:w-[59px] mobile:h-[59px]'
          />
        </Zoom>
        <Zoom>
          <Image
            src={"/images/brand3.png"}
            alt='brand'
            width={210}
            height={104}
            className='mobile:w-[150px] mobile:h-[74px]'
          />
        </Zoom>
      </div>
      <div className='flex justify-around items-center pl-10 mobile:pl-0 mobile:flex-col mb-[117px] mobile:mb-10'>
        <Zoom>
          <Image
            src={"/images/brand4.png"}
            alt='brand'
            width={283}
            height={69}
            className='mobile:mb-[99px] mobile:w-[161px] mobile:h-[39px]'
          />
        </Zoom>
        <Zoom>
          <Image
            src={"/images/brand5.png"}
            alt='brand'
            width={193}
            height={121}
            className='mobile:mb-[99px] mobile:w-[141px] mobile:h-[89px]'
          />
        </Zoom>
        <Zoom>
          <Image
            src={"/images/brand6.png"}
            alt='brand'
            width={251}
            height={76}
            className='mobile:w-[201px] mobile:h-[60px]'
          />
        </Zoom>
      </div>
      <Zoom left>
        <p className='text-center text-[#000814] text-[32px] px-[80px] mb-[158px] leading-[1.3] mobile:text-base mobile:px-0 mobile:mb-10'>
          {t("footerText")}
        </p>
      </Zoom>
    </Container>
  );
};

export default AboutUs;
