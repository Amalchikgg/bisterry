"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import emailjs from "@emailjs/browser";
import Zoom from "react-reveal/Zoom";
import LinkScroll from "../Link";
import FooterQuotes from "../FooterQuotes";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const [activeComment, $activeComment] = useState(0);
  const quotes = [
    {
      id: 0,
      text: t("quotes1"),
      logo: "/icons/logoFooter1.svg",
      name: t("javohir"),
      worker: t("webDesigner"),
    },
    {
      id: 1,
      text: t("quotes2"),
      logo: "/icons/avatar.svg",
      name: t("amir"),
      worker: "CEO Bisterry",
    },
    {
      id: 2,
      text: t("quotes3"),
      logo: "/icons/logoFooter2.svg",
      name: t("angelina"),
      worker: t("targetologist"),
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      $activeComment((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [quotes.length]);

  return (
    <footer className='bg-[#000814] pt-[90px] pb-[50px] px-[54px] mobile:px-[18px] mobile:pt-[40px] rounded-[30px_30px_0px_0px]'>
      <Container>
        {quotes.map((data) => (
          <FooterQuotes
            key={data.id}
            logo={data.logo}
            text={data.text}
            name={data.name}
            worker={data.worker}
            id={data.id}
            index={activeComment}
          />
        ))}
        <Zoom>
          <div className='rounded-[30px] px-[53px] mobile:px-0 bg-[#023047] pt-[111px] mobile:pt-9 mobile:pb-12 pb-[81px]'>
            <p className='text-white text-center font-bold text-[64px] mb-[45px] mobile:hidden'>
              {t("anyQuestions")}
            </p>
            <div className='items-center hidden mobile:flex justify-center mb-[42px]'>
              <Image
                src={"/icons/logo.svg"}
                alt='logo'
                width={40}
                height={58}
                className='mr-[10px] mobile:w-[26px] mobile:h-[38px]'
              />
              <Image
                src={"/icons/logoText.svg"}
                alt='logo'
                width={178}
                height={43}
                className='mobile:w-[99px] mobile:h-[24px]'
              />
            </div>
            <p className='text-center mobile:block hidden text-white text-[20px] mb-[34px] font-semibold px-10'>
              {t("marketingAgency")}
            </p>
            <form
              ref={form}
              className='flex items-center justify-center mb-[91px] mobile:mb-[63px] mobile:flex-col'
            >
              <input
                id='email'
                name='user_email'
                type='email'
                placeholder={t("enterEmail")}
                className='h-20 w-[616px] mobile:w-[300px] mobile:h-[46px] mobile:mr-0 mobile:mb-4 rounded-[50px] bg-white text-[20px] text-[#232323] pl-[33px] mr-6'
              />
              <button
                type='submit'
                className='h-20 w-[283px] mobile:w-[300px] mobile:h-[34px] mobile:bg-[#5390D9] mobile:text-[14px] mobile:text-white rounded-[50px] bg-white text-[#000814] font-bold text-[30px]'
              >
                {t("joinUs")}
              </button>
            </form>
            <div className='h-[5px] bg-white mb-[68px] mobile:hidden' />
            <div className='flex justify-between mobile:justify-center'>
              <div className='-mt-1 mobile:hidden'>
                <p className='text-[30px] text-white font-extrabold mb-5'>
                  BISTERRY
                </p>
                <p className='text-white font-semibold text-[20px] max-w-[232px] mb-11'>
                  {t("marketingAgency")}
                </p>
                <p className='font-[300] text-white w-[221px]'>
                  {t("innovativeAdvertising")}
                </p>
              </div>
              <div className='mobile:hidden'>
                <p className='text-[24px] text-white font-bold mb-[41px]'>
                  {t("home")}
                </p>
                <Link
                  href={"/aboutus"}
                  className='text-[20px] block font-semibold text-white mb-[13px]'
                >
                  {t("aboutUs")}
                </Link>
                <LinkScroll
                  title={t("ourNiches")}
                  link='niches'
                  className='text-[20px] block font-semibold text-white mb-[13px]'
                />
                <LinkScroll
                  title={t("services")}
                  link='services'
                  className='text-[20px] font-semibold text-white'
                />
              </div>
              <div className='mobile:hidden'>
                <p className='text-[24px] text-white font-bold mb-[41px]'>
                  {t("support")}
                </p>
                <p className='text-[20px] font-semibold text-white mb-[13px]'>
                  FAQ
                </p>
                <p className='text-[20px] font-semibold w-[151px] text-white mb-[13px]'>
                  {t("privacyPolicy")}
                </p>
                <p className='text-[20px] font-semibold text-white'>
                  {t("termSerivce")}
                </p>
              </div>
              <div>
                <p className='text-white font-bold text-[24px] mb-[35px]'>
                  {t("socialMedia")}
                </p>
                <div className='flex items-center justify-center'>
                  <Link href={"https://t.me/bisterry"}>
                    <Image
                      src={"/icons/telegram.svg"}
                      alt='telegram'
                      width={35}
                      height={35}
                      className='mr-[23px]'
                    />
                  </Link>
                  <Link href={"https://www.instagram.com/bisterry_agency/"}>
                    <Image
                      src={"/icons/instagram.svg"}
                      alt='instagram'
                      width={35}
                      height={35}
                      className='mr-[23px]'
                    />
                  </Link>
                  <Link href={"https://wa.me/447729654560"}>
                    <Image
                      src={"/icons/whatsapp.svg"}
                      alt='whatsapp'
                      width={35}
                      height={35}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </Container>
    </footer>
  );
};

export default Footer;
