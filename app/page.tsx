"use client";
import Accordion from "@/components/Accordion";
import Comment from "@/components/Comment";
import Container from "@/components/Container";
import Slider from "@/components/Slider";
import i18n from "@/localization";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSwipeable } from "react-swipeable";

export default function Home() {
  const { t } = useTranslation();
  const [activeSlide, $activeSlide] = useState(1);
  const [rightAnimation, $rightAnimation] = useState(false);
  const [activeComment, $activeComment] = useState(0);
  const slider = [
    {
      title: t("sliderTitle1"),
      text: t("sliderText1"),
      image: "/images/slide1.png",
      id: 1,
    },
    {
      title: t("sliderTitle2"),
      text: t("sliderText2"),
      image: "/images/slide2.png",
      id: 2,
    },
    {
      title: t("sliderTitle3"),
      text: t("sliderText3"),
      image: "/images/slide3.png",
      id: 3,
    },
  ];
  const array = [
    {
      title: "SOCIAL MEDIA MANAGEMENT",
      text: t("serviceText1"),
      link: "/socialmedia",
    },
    {
      title: "TARGET ADVERTISEMENT",
      text: t("serviceText2"),
      link: "/digitalmarketing",
    },
    {
      title: "BRANDING",
      text: t("serviceText3"),
      link: "/branding",
    },
    {
      title: "SEO OPTIMIZATION",
      text: t("serviceText4"),
      link: "/seo",
    },
    {
      title: "EMAIL MARKETING",
      text: t("serviceText5"),
      link: "/email",
    },
    {
      title: "CRYPTOCURRENCY",
      text: t("serviceText6"),
      link: "/cryptocurrency",
    },
  ];
  const comments = [
    {
      id: 0,
      stars: "/icons/stars1.svg",
      text: t("feedbackText1"),
      name: t("feedbackName1"),
    },
    {
      id: 1,
      stars: "/icons/stars2.svg",
      text: t("feedbackText2"),
      name: t("feedbackName2"),
    },
    {
      id: 2,
      stars: "/icons/stars2.svg",
      text: t("feedbackText3"),
      name: t("feedbackName3"),
    },
  ];

  const handleSwipe = (direction: string) => {
    if (direction === "left" && activeSlide < slider.length) {
      $activeSlide(activeSlide + 1);
    } else if (direction === "right" && activeSlide > 1) {
      $activeSlide(activeSlide - 1);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
    trackMouse: true,
    trackTouch: true,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      $activeComment((prevIndex) => (prevIndex + 1) % comments.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [comments.length]);

  const handleNextSlide = () => {
    if (activeSlide !== slider.length) {
      $activeSlide(activeSlide + 1);
      $rightAnimation(false);
    }
  };
  const handlePrevSlide = () => {
    if (activeSlide !== 1) {
      $activeSlide(activeSlide - 1);
      $rightAnimation(true);
    }
  };
  return (
    <Container>
      <main>
        <section className='mt-[80px] mb-[46px] mobile:mb-4'>
          <p className='text-[#023047] text-center text-[60px] mobile:text-[32px] font-bold mb-5 mobile:mb-9'>
            {t("mainTitle")}{" "}
            <span className='text-[#5390D9]'>{t("yourBrand")}</span>{" "}
            {t("titleInOnline")}
          </p>
          <p className='text-[#000814] text-[24px] mobile:text-[14px] mobile:px-[40px] text-center px-[250px] mobile:mb-10 mb-[100px]'>
            {t("mainText")}
          </p>
          <div className='relative h-[582px] mobile:hidden'>
            <div className='w-[475px] h-[258px] rounded-[30px] bg-[#023047] px-[29px] pt-10 pb-[58px] flex items-center flex-wrap justify-between gap-y-[30px]'>
              <div className='flex items-center'>
                <p className='text-white text-[48px] font-extrabold'>200+</p>
                <p className='text-white font-extrabold max-w-[90px] ml-1 leading-[1.2]'>
                  {t("projectsDone")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] font-extrabold'>10+</p>
                <p className='text-white font-extrabold max-w-[90px] ml-1 leading-[1.2]'>
                  {t("creativePeople")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] font-extrabold'>5+</p>
                <p className='text-white font-extrabold max-w-[90px] ml-1 leading-[1.2]'>
                  {t("yearsExperience")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] font-extrabold'>120+</p>
                <p className='text-white font-extrabold max-w-[90px] ml-1 leading-[1.2] uppercase'>
                  {t("satisfiedCustomers")}
                </p>
              </div>
            </div>
            <Image
              src={"/icons/union1.svg"}
              alt='union'
              width={790}
              height={582}
              className='absolute top-[0] '
            />
            <div className='bg-[#5390D9] flex items-center cursor-pointer justify-center rounded-[30px] w-[268px] h-[86px] absolute top-0 right-[250px]'>
              <p className='text-white text-[25px] font-bold mr-3 uppercase'>
                {t("knowMore")}
              </p>
              <Image
                src={"/icons/arrow.svg"}
                alt='arrow'
                width={40}
                height={0}
                className=''
              />
            </div>
            <Image
              src={"/icons/union2.svg"}
              alt='union2'
              width={419}
              height={466}
              className='absolute top-[116px] right-[245px]'
            />
            <Image
              src={"/icons/union3.svg"}
              alt='union3'
              width={226}
              height={582}
              className='absolute top-0 right-[0px] '
            />
          </div>
          <div className='hidden mobile:flex flex-col items-center'>
            <div className='relative mb-4'>
              <Image
                src={"/icons/imageMobile.svg"}
                alt='img'
                width={160}
                height={126}
              />
              <Image
                src={"/icons/unionMobile.svg"}
                alt='union'
                width={340}
                height={272}
                className='-mt-[128px]'
              />
            </div>
            <div className='w-[475px] mobile:w-[340px] mb-4 mobile:h-[171px] h-[258px] rounded-[30px] mobile:px-6 bg-[#023047] px-[29px] pt-10 pb-[58px] mobile:pb-10 flex items-center flex-wrap justify-between gap-y-[30px]'>
              <div className='flex items-center'>
                <p className='text-white text-[48px] mobile:text-[24px] font-extrabold'>
                  200+
                </p>
                <p className='text-white mobile:text-[12px] font-extrabold max-w-[90px] ml-1 leading-[1.2]'>
                  {t("projectsDone")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] mobile:text-[24px] font-extrabold'>
                  10+
                </p>
                <p className='text-white font-extrabold mobile:text-[12px] max-w-[90px] ml-1 leading-[1.2]'>
                  {t("creativePeople")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] mobile:text-[24px] font-extrabold'>
                  5+
                </p>
                <p className='text-white font-extrabold mobile:text-[12px] max-w-[90px] ml-1 leading-[1.2]'>
                  {t("yearsExperience")}
                </p>
              </div>
              <div className='flex items-center'>
                <p className='text-white text-[48px] mobile:text-[24px] font-extrabold'>
                  120+
                </p>
                <p className='text-white font-extrabold mobile:text-[12px] max-w-[90px] ml-1 leading-[1.2] uppercase'>
                  {t("satisfiedCustomers")}
                </p>
              </div>
            </div>
            <div className='bg-[#5390D9] flex items-center cursor-pointer justify-center rounded-[30px] w-[338px] h-[75px]'>
              <p className='text-white font-bold mr-3 uppercase'>
                {t("knowMore")}
              </p>
              <Image
                src={"/icons/arrow.svg"}
                alt='arrow'
                width={40}
                height={0}
                className=''
              />
            </div>
          </div>
        </section>
        <section className='bg-[#000814] rounded-[30px] pt-[45px] pb-[60px] pl-[60px] pr-[88px] mb-[125px] mobile:mb-10 mobile:p-[28px]'>
          <p className='text-white text-[85px] font-bold pr-10 leading-[1.3] mb-[38px] mobile:mb-[26px] mobile:text-[36px] mobile:pr-0'>
            {t("effectiveSection")}
          </p>
          <div className='flex justify-between items-end mobile:flex-col mobile:items-center'>
            <p className='text-white text-[24px] max-w-[750px] leading-[1.3] mobile:text-base mobile:mb-[37px]'>
              {t("effectiveText")}
            </p>
            <Link
              href={"/contacts"}
              className='w-[277px] h-[87px] bg-[#023047] rounded-[30px] flex items-center justify-center mobile:w-[281px] mobile:h-[43px]'
            >
              <p className='text-white text-[25px] font-bold mr-3 mobile:mr-0 mobile:uppercase mobile:text-[14px]'>
                {t("contactUs")}
              </p>
              <Image
                src={"/icons/arrow.svg"}
                alt='arrow'
                width={45}
                height={0}
                className='mobile:hidden'
              />
            </Link>
          </div>
        </section>
        <section className='mb-[186px] mobile:mb-[62px]'>
          <div className='flex justify-between items-center mb-[106px] mobile:mb-10 mobile:flex-col '>
            <p className='text-[#000814] text-[64px] font-bold mobile:text-[32px] mobile:mb-[37px]'>
              {t("ourServices")}
            </p>
            <p className='text-[#000814] text-[20px] max-w-[662px] text-right mobile:text-[14px] mobile:text-center '>
              {t("ourServicesText")}
            </p>
          </div>
          <div className='mobile:flex mobile:flex-col mobile:items-center'>
            {array.map(({ text, title, link }, i) => (
              <Accordion
                key={title}
                text={text}
                title={title}
                link={link}
                index={i + 1}
                className={`${i === array.length - 1 && "border-none"}`}
              />
            ))}
          </div>
        </section>
        <section className='mb-[122px] mobile:mb-[68px]'>
          <p className='text-[#000814] text-[75px] font-semibold mobile:font-bold mobile:mb-[47px] mb-[82px] mobile:text-[32px] mobile:text-center'>
            {t("ourMostPopular")}
            <span className='text-[#5390D9] mobile:text-[#000814]'>
              {" "}
              {t("niches")}
            </span>
          </p>
          <div {...handlers}>
            {slider.map(({ text, title, id, image }, i) => (
              <Slider
                key={id}
                id={id}
                image={image}
                index={activeSlide}
                text={text}
                title={title}
                rightAnimation={rightAnimation}
              />
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <div
              className={`w-[75px] h-[75px] rounded-full mr-10 mobile:mr-40 bg-[#5390D9] flex cursor-pointer ${
                activeSlide === 1 && "opacity-50 !cursor-not-allowed"
              }`}
              onClick={handlePrevSlide}
            >
              <Image
                src={"/icons/arrowWhite.svg"}
                alt='arrow'
                width={20}
                height={20}
                className='m-[0_auto] rotate-90'
              />
            </div>
            <div
              className={`w-[75px] h-[75px] rounded-full bg-[#5390D9] flex cursor-pointer ${
                activeSlide === slider.length &&
                "opacity-50 !cursor-not-allowed"
              }`}
              onClick={handleNextSlide}
            >
              <Image
                src={"/icons/arrowWhite.svg"}
                alt='arrow'
                width={20}
                height={20}
                className='m-[0_auto] -rotate-90'
              />
            </div>
          </div>
        </section>
        <section className='mb-[168px] mobile:mb-[120px]'>
          <p className='text-center text-[#000814] text-[64px] mobile:text-[32px] font-semibold'>
            {t("weWorked")}
          </p>
          <p className='text-center text-[#5390D9] text-[64px] mobile:text-[32px] font-semibold'>
            {t("industryLeading")}
          </p>
          <p className='text-center text-[#000814] text-[64px] mobile:text-[32px] font-semibold mb-[108px] mobile:mb-[82px]'>
            {t("brands")}
          </p>
          <div className='flex justify-around items-center mb-[98px] mobile:flex-col'>
            <Image
              src={"/images/brand1.png"}
              alt='brand'
              width={282}
              height={79}
              className='mobile:mb-[99px] mobile:w-[179px] mobile:h-[51px]'
            />
            <Image
              src={"/images/brand2.png"}
              alt='brand'
              width={93}
              height={92}
              className='mobile:mb-[99px] mobile:w-[59px] mobile:h-[59px]'
            />
            <Image
              src={"/images/brand3.png"}
              alt='brand'
              width={210}
              height={104}
              className='mobile:w-[150px] mobile:h-[74px]'
            />
          </div>
          <div className='flex justify-around items-center pl-10 mobile:pl-0 mobile:flex-col'>
            <Image
              src={"/images/brand4.png"}
              alt='brand'
              width={283}
              height={69}
              className='mobile:mb-[99px] mobile:w-[161px] mobile:h-[39px]'
            />
            <Image
              src={"/images/brand5.png"}
              alt='brand'
              width={193}
              height={121}
              className='mobile:mb-[99px] mobile:w-[141px] mobile:h-[89px]'
            />
            <Image
              src={"/images/brand6.png"}
              alt='brand'
              width={251}
              height={76}
              className='mobile:w-[201px] mobile:h-[60px]'
            />
          </div>
        </section>
        <section className='mb-[162px]'>
          <p className='text-center text-[64px] mobile:text-[32px] font-semibold text-[#000814] mb-[17px] mobile:mb-[25px]'>
            {t("ourFeedback")}
          </p>
          {comments.map(({ id, text, stars, name }) => (
            <Comment
              key={id}
              id={id}
              text={text}
              name={name}
              stars={stars}
              index={activeComment}
            />
          ))}
        </section>
      </main>
    </Container>
  );
}
