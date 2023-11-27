"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

interface Props {
  text: string;
  title: string;
  link: string;
  index: number;
  className?: string;
}

const Accordion = ({ text, title, link, index, className }: Props) => {
  const { t } = useTranslation();
  const [active, $active] = useState(false);

  const handleActive = () => {
    $active(!active);
  };
  return (
    <Zoom>
      <div
        className={`mb-[50px] mobile:mb-4 mobile:border-b-[2px] border-[#000814] mobile:pb-4 ${className}`}
      >
        <div onClick={handleActive} className='flex items-center mobile:block'>
          <p
            className={`text-[#000814] ${
              active && "!text-[#5390D9]"
            } text-[40px] mobile:text-[24px] mobile:font-medium mobile:text-center`}
          >
            {title}
          </p>
          <div className='h-[1px] flex-grow mx-[33px] bg-[#000814] mobile:hidden' />
          <p className={`text-[#000814] text-[40px] mr-7 mobile:hidden`}>
            0{index}
          </p>
          <Image
            src={"/icons/arrowBlack.svg"}
            alt='arrow'
            width={14}
            height={0}
            className={`cursor-pointer mobile:hidden ${
              active ? styles.rotateArrowActive : styles.rotateArrow
            }`}
            onClick={handleActive}
          />
        </div>
        <div
          className={`flex items-center mt-[26px] mobile:mt-0 mobile:flex-col ${
            styles.accordion_content
          } ${active && styles.open}`}
        >
          <p className='max-w-[665px] mr-[230px] mobile:mr-0 mobile:mb-6 mobile:text-[14px] text-[20px] text-[#000814]'>
            {text}
          </p>
          <Link
            href={link}
            className='w-[320px] mobile:w-[325px] mobile:h-[37px] h-[61px] bg-[#5390D9] rounded-[20px] flex items-center justify-center'
          >
            <p className='text-white text-[20px] mobile:text-[14px] font-extrabold'>
              {t("startProject")}
            </p>
          </Link>
        </div>
      </div>
    </Zoom>
  );
};

export default Accordion;
