"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import Zoom from "react-reveal/Zoom";

const Form = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });
  const form = useRef(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert(t("formSubmit"));
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.error("Failed to send email:", data.error);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className='mb-[169px] mobile:mb-14 mobile:-mt-10'
    >
      <Zoom>
        <div className='flex justify-between items-center mb-[65px] mobile:mb-5 mobile:flex-col mobile:w-full'>
          <p className='text-[#023047] font-semibold text-[85px] mobile:text-[28px] w-[607px] mobile:w-auto mobile:mb-5 leading-[1.2]'>
            {t("formText")}
          </p>
          <div className='mobile:w-full'>
            <div className='relative inline-block mobile:w-full'>
              <input
                value={formData.name}
                onChange={handleChange}
                id='name'
                name='name'
                type='text'
                className='rounded-[30px] pl-[80px] mobile:pl-[75px] mobile:w-full mobile:h-[50px] mobile:text-base outline-none placeholder:text-white w-[667px] text-[20px] mb-5 text-white font-bold h-[69px] bg-[#5390D9]'
              />
              <label
                htmlFor='name'
                className='absolute left-5 top-[22px] mobile:top-[14px] mobile:text-base font-semibold text-white text-[18px]'
              >
                {t("name")}:
              </label>
            </div>
            <div className='mb-5 mobile:flex mobile:flex-col'>
              <div className='relative inline-block mobile:w-full'>
                <input
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  id='phoneumber'
                  name='phoneNumber'
                  type='tel'
                  className='rounded-[30px] mobile:mb-5 pl-[110px] mobile:pl-[105px] mobile:w-full mobile:h-[50px] mobile:text-base placeholder:text-white outline-none w-[274px] mr-3 text-[18px] text-white font-bold h-[69px] bg-[#5390D9]'
                />
                <label
                  htmlFor='phonenumber'
                  className='absolute left-5 top-[22px] mobile:top-[14px] mobile:text-base font-semibold text-[18px] text-white'
                >
                  {t("phoneNumber")}:
                </label>
              </div>
              <div className='relative inline-block'>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  id='email'
                  name='email'
                  type='email'
                  className='rounded-[30px] pl-[80px] mobile:pl-[75px] mobile:w-full mobile:h-[50px] mobile:text-base placeholder:text-white outline-none w-[381px] text-[20px] text-white font-bold h-[69px] bg-[#5390D9]'
                />
                <label
                  htmlFor='email'
                  className='absolute left-5 mobile:text-base font-semibold text-white text-[18px] top-[54%] translate-y-[-50%]'
                >
                  EMAIL:
                </label>
              </div>
            </div>
            <div className='relative block'>
              <textarea
                value={formData.message}
                onChange={handleChange}
                id='message'
                name='message'
                className='outline-none w-full placeholder:text-white pr-5 mobile:pl-[140px] text-[20px] text-white font-bold bg-[#5390D9] h-[200px] resize-none pl-[145px] pt-[15px] mobile:pt-[9px] mobile:text-base rounded-[30px]'
              />
              <label
                htmlFor='message'
                className='absolute text-white font-semibold left-5 mobile:text-base mobile:top-[10px] mobile:left-[15px] top-5'
              >
                {t("yourMessage")}:
              </label>
            </div>
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
      </Zoom>
    </form>
  );
};

export default Form;
