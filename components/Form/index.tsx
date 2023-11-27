"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Zoom from "react-reveal/Zoom";

const Form = () => {
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
    <Zoom>
      <form
        ref={form}
        onSubmit={sendEmail}
        className='mb-[169px] mobile:mb-14 mobile:-mt-10'
      >
        <div className='flex justify-between items-center mb-[65px] mobile:mb-5 mobile:flex-col mobile:w-full'>
          <p className='text-[#023047] font-semibold text-[85px] mobile:text-[28px] w-[607px] mobile:w-auto mobile:mb-5 leading-[1.2]'>
            {t("formText")}
          </p>
          <div className='mobile:w-full'>
            <input
              id='name'
              name='user_name'
              type='text'
              placeholder={t("name")}
              className='rounded-[30px] pl-[38px] mobile:pl-4 mobile:w-full mobile:h-[50px] mobile:text-base outline-none placeholder:text-white w-[667px] text-[20px] mb-5 text-white font-bold h-[69px] bg-[#5390D9]'
            />
            <div className='mb-5 mobile:flex mobile:flex-col'>
              <input
                id='phonenumber'
                name='user_phonenumber'
                type='tel'
                placeholder={t("phoneNumber")}
                className='rounded-[30px] mobile:mb-5 pl-[38px] mobile:pl-4 mobile:w-full mobile:h-[50px] mobile:text-base placeholder:text-white outline-none w-[274px] mr-3 text-[20px] text-white font-bold h-[69px] bg-[#5390D9]'
              />
              <input
                id='email'
                name='user_email'
                type='email'
                placeholder='EMAIL'
                className='rounded-[30px] pl-[38px] mobile:pl-4 mobile:w-full mobile:h-[50px] mobile:text-base placeholder:text-white outline-none w-[381px] text-[20px] text-white font-bold h-[69px] bg-[#5390D9]'
              />
            </div>
            <textarea
              id='message'
              name='message'
              placeholder={t("yourMessage")}
              className='outline-none w-full placeholder:text-white pr-5 text-[20px] text-white font-bold bg-[#5390D9] h-[200px] resize-none pl-[38px] pt-[23px] mobile:pl-4 mobile:pt-4 mobile:text-base rounded-[30px]'
            />
          </div>
        </div>
        <div className='flex justify-end relative'>
          <button
            type='submit'
            className='w-[327px] mobile:h-14 mobile:text-base mobile:w-[200px] h-[102.7px] rounded-[35px] bg-[#023047] pl-[29px] text-white text-[29px] font-bold text-start uppercase'
          >
            {t("contactUs")}
          </button>
          <Image
            src={"/icons/arrow.svg"}
            width={53}
            height={0}
            alt='arrow'
            className='absolute top-[45px] right-[50px] mobile:top-[22px] mobile:right-5 mobile:w-10'
          />
        </div>
      </form>
    </Zoom>
  );
};

export default Form;
