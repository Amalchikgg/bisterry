"use client";
import Container from "@/components/Container";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Form from "@/components/Form";

const Seo = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <p className='text-[#5390D9] text-center text-[96px] mobile:text-[32px] mobile:mt-10 font-bold mb-[27px] mt-[100px]'>
        SEO
        <span className='text-[#000814]'> Optimization</span>
      </p>
      <div className='flex justify-center mb-[81px] mobile:mb-5'>
        <p className='text-center text-[#000814] text-[24px] mobile:text-[18px] w-[725px]'>
          {t("socmediaText")}
        </p>
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#000814] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("keyword")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo1")}
          </p>
        </div>
        <Image
          src={"/images/seo1.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#01388B] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("onPage")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo2")}
          </p>
        </div>
        <Image
          src={"/images/seo2.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#0960E3] h-[351px] mobile:rounded-b-[0] mobile:h-[301px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("linkBuilding")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo3")}
          </p>
        </div>
        <Image
          src={"/images/seo3.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#5390D9] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("localSeo")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo4")}
          </p>
        </div>
        <Image
          src={"/images/seo4.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#000814] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("monitoring")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo5")}
          </p>
        </div>
        <Image
          src={"/images/seo5.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[27px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#01388B] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("algorithm")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo6")}
          </p>
        </div>
        <Image
          src={"/images/seo6.png"}
          alt='socmedia'
          width={1332}
          height={331}
          className='rounded-[30px] mobile:rounded-none absolute bottom-0'
        />
      </div>
      <div className='h-[430px] mb-[90px] relative mobile:h-[340px]'>
        <div className='absolute top-0 bg-[#0960E3] h-[351px] mobile:rounded-b-[0] mobile:h-[310px] mobile:p-[20px] pl-[60px] pt-[45px] pb-[54px] rounded-[30px] w-full z-20'>
          <p className='text-white text-[85px] font-semibold mb-7 mobile:text-[32px] mobile:mb-3 leading-[1]'>
            {t("reporting")}
          </p>
          <p className='text-[24px] text-white mobile:text-[16px]'>
            {t("seo7")}
          </p>
        </div>
        <Image
          src={"/images/seo7.png"}
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

export default Seo;
