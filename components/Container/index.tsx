import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='max-w-[1330px] w-full m-[0px_auto] px-[5px] mobile:max-w-[744px]'>
      {children}
    </div>
  );
};

export default Container;
