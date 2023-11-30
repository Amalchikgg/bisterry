"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./style.module.scss";

interface Props {
  logo: string;
  text: string;
  name: string;
  worker: string;
  id: number;
  index: number;
}

const FooterQuotes = ({ text, logo, name, worker, id, index }: Props) => {
  const { t } = useTranslation();
  return (
    id === index && (
      <div className={`ml-[136px] mb-[60px] mobile:ml-0 ${styles.animate}`}>
        <p className='text-white text-[57px] mb-[100px] leading-[1.3] mobile:text-[24px] mobile:mb-[27px]'>
          {text}
        </p>
        <div className='flex items-center mobile:flex-col mobile:items-start'>
          <Image
            src={logo}
            alt='avatar'
            width={120}
            height={120}
            className='mr-[22px] mobile:hidden'
          />
          <p className='text-white text-[32px] mobile:text-[24px] font-bold leading-[1.1]'>
            {name}
            <br />{" "}
            <span className='font-normal text-[20px] mobile:hidden'>
              {worker}
            </span>
          </p>
          <p className='mobile:block hidden text-[20px] mt-[10px] text-white'>
            {worker}
          </p>
        </div>
      </div>
    )
  );
};

export default FooterQuotes;
