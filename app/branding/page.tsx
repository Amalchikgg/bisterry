"use client";
import Container from "@/components/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Form from "@/components/Form";
import Fade from "react-reveal/Fade";

const Branding = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <p className='text-[#5390D9] text-center element text-[96px] font-bold mb-[27px] mobile:text-[32px] mobile:mt-10 mt-[100px]'>
        Branding
      </p>
      <div className='flex justify-center mb-[81px] element mobile:mb-5'>
        <p className='text-center text-[#000814] text-[24px] mobile:text-[18px] w-[725px]'>
          {t("socmediaText")}
        </p>
      </div>
      <Fade left>
        <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
          <div className='absolute top-0 bg-[#000814] mobile:rounded-b-[0] h-[351px] mobile:h-[301px] mobile:p-[20px] px-[30px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
            <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
              {t("strategicBranding")}
            </p>
            <p className='text-[24px] text-white mobile:text-[16px]'>
              {t("branding1")}
            </p>
          </div>
          <Image
            src={"/images/branding1.png"}
            alt='socmedia'
            width={1332}
            height={331}
            className='rounded-[30px] mobile:rounded-none absolute bottom-0'
          />
        </div>
      </Fade>
      <Fade left>
        <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
          <div className='absolute top-0 bg-[#01388B] mobile:rounded-b-[0] h-[351px] mobile:h-[301px] mobile:p-[20px] px-[30px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
            <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
              {t("visualBranding")}
            </p>
            <p className='text-[24px] text-white mobile:text-[16px]'>
              {t("branding2")}
            </p>
          </div>
          <Image
            src={"/images/branding2.png"}
            alt='socmedia'
            width={1332}
            height={331}
            className='rounded-[30px] mobile:rounded-non absolute bottom-0'
          />
        </div>
      </Fade>
      <Fade left>
        <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
          <div className='absolute top-0 bg-[#0960E3] mobile:rounded-b-[0] h-[351px] mobile:h-[301px] mobile:p-[20px] px-[30px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
            <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
              {t("communicationBranding")}
            </p>
            <p className='text-[24px] text-white mobile:text-[16px]'>
              {t("branding3")}
            </p>
          </div>
          <Image
            src={"/images/branding3.png"}
            alt='socmedia'
            width={1332}
            height={331}
            className='rounded-[30px] mobile:rounded-non absolute bottom-0'
          />
        </div>
      </Fade>
      <Fade left>
        <div className='h-[430px] mb-[90px] relative mobile:h-[340px]'>
          <div className='absolute top-0 bg-[#5390D9] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] px-[30px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
            <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
              {t("userExperiance")}
            </p>
            <p className='text-[24px] text-white mobile:text-[16px]'>
              {t("branding4")}
            </p>
          </div>
          <Image
            src={"/images/branding4.png"}
            alt='socmedia'
            width={1332}
            height={331}
            className='rounded-[30px] mobile:rounded-non absolute bottom-0'
          />
        </div>
      </Fade>
      <Form />
    </Container>
  );
};

export default Branding;
