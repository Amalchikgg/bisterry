"use client";
import Container from "@/components/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Form from "@/components/Form";

const SocialMedia = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <p className='text-[#5390D9] text-center mobile:text-[32px] text-[96px] font-bold mb-[27px] mt-[100px] mobile:mt-10'>
        Social Media <span className='text-[#000814]'>Management</span>
      </p>
      <div className='flex justify-center mb-[81px] mobile:mb-5'>
        <p className='text-center text-[#000814] text-[24px] mobile:text-[18px] mobile:w-auto w-[725px]'>
          {t("socmediaText")}
        </p>
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#000814] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] mobile:text-[32px] font-semibold mb-7 mobile:mb-3 leading-[1]'>
            {t("strategies")}
          </p>
          <p className='text-[24px] text-white mobile:text-[14px]'>
            {t("social1")}
          </p>
        </div>
        <Image
          src={"/images/socmedia1.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none  absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#01388B] mobile:rounded-b-[0] h-[351px] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] mobile:text-[32px] mobile:mb-3 font-semibold mb-7 leading-[1]'>
            {t("targetAdvertisement")}
          </p>
          <p className='text-[24px] text-white mobile:text-[14px]'>
            {t("social2")}
          </p>
        </div>
        <Image
          src={"/images/socmedia2.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[79px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#5390D9] mobile:rounded-b-[0] h-[351px] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("analysisReport")}
          </p>
          <p className='text-[24px] text-white mobile:text-[14px]'>
            {t("social3")}
          </p>
        </div>
        <Image
          src={"/images/socmedia3.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <Form />
    </Container>
  );
};

export default SocialMedia;
