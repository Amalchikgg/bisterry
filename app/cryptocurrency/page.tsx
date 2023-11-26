"use client";
import Container from "@/components/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Form from "@/components/Form";

const Cryptocurrency = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <p className='text-[#5390D9] text-center text-[96px] font-bold mb-[27px] mt-[100px] mobile:text-[32px] mobile:mt-10'>
        Crypto & <span className='text-[#000814]'>Trading</span>
      </p>
      <div className='flex justify-center mb-[81px] mobile:mb-5'>
        <p className='text-center text-[#000814] text-[24px] w-[725px] mobile:text-[18px]'>
          {t("socmediaText")}
        </p>
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#000814] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[64px] font-semibold mb-7 mobile:text-[26px] mobile:mb-3 leading-[1]'>
            {t("cryptocurrencyTitle1")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("cryptocurrencyText1")}
          </p>
        </div>
        <Image
          src={"/images/crypto1.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#01388B] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[64px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("cryptocurrencyTitle2")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px] pr-20 mobile:pr-0'>
            {t("cryptocurrencyText2")}
          </p>
        </div>
        <Image
          src={"/images/crypto2.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#0960E3] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("cryptocurrencyTitle3")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("cryptocurrencyText3")}
          </p>
        </div>
        <Image
          src={"/images/crypto3.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#5390D9] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("cryptocurrencyTitle4")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("cryptocurrencyText4")}
          </p>
        </div>
        <Image
          src={"/images/crypto4.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[90px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#000814] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("cryptocurrencyTitle5")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("cryptocurrencyText5")}
          </p>
        </div>
        <Image
          src={"/images/crypto5.png"}
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

export default Cryptocurrency;
