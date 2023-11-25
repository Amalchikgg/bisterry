import React from "react";
import Image from "next/image";
import styles from "./style.module.scss";

interface Props {
  stars: string;
  text: string;
  name: string;
  id: number;
  index: number;
}

const Comment = ({ name, id, index, stars, text }: Props) => {
  return (
    id === index && (
      <div className={`flex items-center flex-col ${styles.animate}`}>
        <Image
          src={stars}
          alt='stars'
          width={146}
          height={29}
          className='mb-9 mobile:mb-[30px]'
        />
        <p className='text-center text-[28px] mobile:text-base text-[#000814] mb-9 mobile:mb-[25px]'>
          {text}
        </p>
        <p className='text-[32px] mobile:text-[24px] mobile:font-bold font-semibold text-[#5390D9]'>
          {name}
        </p>
      </div>
    )
  );
};

export default Comment;
