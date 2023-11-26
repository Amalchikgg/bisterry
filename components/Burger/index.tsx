"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";

const Burger = () => {
  const [active, $active] = useState(false);
  const [open, $open] = useState(false);
  const { t, i18n } = useTranslation();
  const pathname = usePathname();
  const links = [
    {
      title: "Social Media Management",
      link: "/socialmedia",
    },
    {
      title: "Target Advertisement",
      link: "/digitalmarketing",
    },
    {
      title: "Branding",
      link: "/branding",
    },
    {
      title: "Seo Optimization",
      link: "/seo",
    },
    {
      title: "Email Marketing",
      link: "/email",
    },
    {
      title: "Crypto & Trading Platforms",
      link: "/cryptocurrency",
    },
  ];

  console.log(pathname === links[0].link);

  const changeLanguage = (language: string) => () => {
    i18n.changeLanguage(language);
  };
  const handleOpen = () => {
    $open(!open);
  };
  const handleActive = () => {
    $active(!active);
  };
  return (
    <>
      <Image
        src={"/icons/hamburger.svg"}
        alt='hamburger'
        width={24}
        height={24}
        className='hidden mobile:block mr-5'
        onClick={handleActive}
      />
      <div className={`menu ${active && "active"}  h-[100vh] pt-11 px-[30px]`}>
        <div className='relative flex items-center justify-center mb-[76px]'>
          <button type='submit' className='absolute left-2'>
            <Image
              src={"/icons/close.svg"}
              alt='close'
              width={35}
              height={35}
              className='mr-[26px]'
              onClick={handleActive}
            />
          </button>
          <Link href={"/"} onClick={handleActive} className='flex items-center'>
            <Image src={"/icons/logo.svg"} alt='logo' width={26} height={38} />
            <Image
              src={"/icons/logoText.svg"}
              alt='logo'
              width={89}
              height={24}
              className='ml-2'
            />
          </Link>
        </div>
        <Link
          onClick={handleActive}
          href={"/aboutus"}
          className='text-[24px] text-white font-bold mb-6 block'
        >
          {t("aboutUs")}
        </Link>
        <div className='flex items-center mb-6' onClick={handleOpen}>
          <p className='text-[24px] text-white font-bold mr-3'>
            {t("services")}
          </p>
          <Image
            src={"/icons/arrowDown.svg"}
            alt='arrow'
            width={20}
            height={20}
          />
        </div>

        <div
          className={`flex flex-col ${
            open ? styles.dropdown_open : styles.transition_dropdown
          }`}
        >
          {links.map(({ title, link }) => (
            <Link
              onClick={handleActive}
              href={link}
              key={link}
              className={`text-[#AAAAAA] font-semibold text-[24px] ${
                !open && "hidden"
              } mb-6 hover:text-[#5390D9] ${
                pathname.includes(`${link}`) && "!text-[#5390D9]"
              }`}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className='flex flex-col mb-10'>
          <p
            onClick={changeLanguage("ru")}
            className='text-[24px] text-white font-[900] mb-[32px] cursor-pointer'
          >
            RU
          </p>
          <p
            onClick={changeLanguage("en")}
            className='text-[24px] text-white font-[900] cursor-pointer'
          >
            ENG
          </p>
        </div>
      </div>
    </>
  );
};

export default Burger;
