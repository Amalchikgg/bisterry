import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface Props {
  text: string;
  title: string;
  image: string;
  id: number;
  index: number;
  rightAnimation: boolean;
}

const Slider = ({ index, text, title, id, image, rightAnimation }: Props) => {
  return (
    <>
      {index === id && (
        <div
          className={`flex justify-between mb-[150px] mobile:mb-10 mobile:flex-col mobile:items-center ${
            rightAnimation ? styles.animate_right : styles.animate
          }`}
        >
          <div className='mt-[35px] mobile:mt-0'>
            <p className='text-[64px] font-semibold mobile:font-bold text-[#000814] mb-9 mobile:mb-[25px] mobile:text-[24px] mobile:text-center'>
              {title}
            </p>
            <p className='text-[#000814] text-[32px] mobile:text-base max-w-[593px] mobile:text-center mobile:mb-[25px] leading-[1.3]'>
              {text}
            </p>
          </div>
          <Image
            src={image}
            alt='slide'
            width={667}
            height={522}
            className='mobile:w-[340px] mobile:h-[211px]'
          />
        </div>
      )}
    </>
  );
};

export default Slider;
