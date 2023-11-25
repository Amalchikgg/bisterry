"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const { t } = useTranslation();
  const form = useRef(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_svoweo6",
          "template_es356zw",
          form.current,
          "WtqcTZIikxV6CV2Qj"
        )
        .then(
          (result) => {
            console.log(result.text);
            e.target.reset();
            alert(t("formSubmit"));
          },
          (error) => {
            console.log(error.text);
            console.log("error");
            alert(error.text);
          }
        );
    }
  };
  return (
    <footer className='bg-[#000814] pt-[90px] pb-[50px] px-[54px] mobile:px-[18px] mobile:pt-[40px] rounded-[30px_30px_0px_0px]'>
      <Container>
        <div className='ml-[136px] mb-[60px] mobile:ml-0'>
          <p className='text-white text-[57px] mb-[100px] leading-[1.3] mobile:text-[24px] mobile:mb-[27px]'>
            {t("footerText1")}
          </p>
          <div className='flex items-center mobile:flex-col mobile:items-start'>
            <Image
              src={"/images/avatar.png"}
              alt='avatar'
              width={120}
              height={120}
              className='mr-[22px] mobile:hidden'
            />
            <p className='text-white text-[32px] mobile:text-[24px] font-bold leading-[1.1]'>
              Amir Mirmakhmudov
              <br />{" "}
              <span className='font-normal text-[20px] mobile:hidden'>
                CEO Bisterry
              </span>
            </p>
            <p className='mobile:block hidden text-[20px] mt-[10px] text-white'>
              CEO Bisterry
            </p>
          </div>
        </div>
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
            onSubmit={sendEmail}
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
              <p className='text-[20px] font-semibold text-white mb-[13px]'>
                {t("aboutUs")}
              </p>
              <p className='text-[20px] font-semibold text-white mb-[13px]'>
                {t("ourAreas")}
              </p>
              <p className='text-[20px] font-semibold text-white'>
                {t("services")}
              </p>
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
                <Image
                  src={"/icons/telegram.svg"}
                  alt='telegram'
                  width={35}
                  height={35}
                  className='mr-[23px]'
                />
                <Image
                  src={"/icons/instagram.svg"}
                  alt='instagram'
                  width={35}
                  height={35}
                  className='mr-[23px]'
                />
                <Image
                  src={"/icons/whatsapp.svg"}
                  alt='whatsapp'
                  width={35}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
