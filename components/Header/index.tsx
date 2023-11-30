"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import "@/localization/index";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./style.module.scss";
import Burger from "../Burger";
import Zoom from "react-reveal/Zoom";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, $open] = useState(false);
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
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleChangeLanguage = (lng: string) => () => {
    i18n.changeLanguage(lng);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      $open(false);
    }
  };

  const handleOpen = () => {
    $open(!open);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <header className='bg-[#023047] py-5'>
      <Container>
        <div className='flex items-center justify-between mobile:justify-center relative'>
          <div className='absolute left-2'>
            <Burger />
          </div>
          <Link href={"/"} className='flex items-center '>
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
          </Link>
          <div className='flex items-center gap-x-[30px] mobile:hidden'>
            <Link
              href={"/aboutus"}
              className='text-[20px] text-white font-semibold'
            >
              {t("aboutUs")}
            </Link>
            <div
              className={`flex items-center cursor-pointer relative`}
              ref={dropdownRef}
              onClick={handleOpen}
            >
              <p className='text-[20px] text-white font-semibold mr-4'>
                {t("ourServices")}
              </p>
              <Image
                src={"/icons/arrowDown.svg"}
                alt='arrow'
                width={15}
                height={0}
              />

              <div
                className={`bg-[#023047] ${styles.transition_dropdown} ${
                  open ? styles.dropdown_open : ""
                } rounded-[15px] z-50 absolute top-[65px] right-[-60px] p-[10px] flex flex-col w-[300px]`}
              >
                {links.map(({ title, link }) => (
                  <Link
                    href={link}
                    key={link}
                    className={`text-white font-semibold text-[20px] mb-3 hover:text-[#5390D9] ${
                      pathname.includes(link) && "!text-[#5390D9]"
                    }`}
                  >
                    {title}
                  </Link>
                ))}
              </div>
            </div>
            <p
              className='text-[20px] text-white font-extrabold cursor-pointer'
              onClick={handleChangeLanguage("ru")}
            >
              RU
            </p>
            <p
              className='text-[20px] text-white font-extrabold cursor-pointer'
              onClick={handleChangeLanguage("en")}
            >
              ENG
            </p>
            <Link href={"/contacts"}>
              <button className='bg-[#5390D9] rounded-[30px] h-[46px] text-[20px] text-white font-extrabold w-[240px]'>
                {t("contactUs")}
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
