"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Proyects from "./Proyects";
import { CollectionCarousel } from "./Testimonials";
import { useTranslation } from 'react-i18next';

export const ContainerScroll = ({
  titleComponent,
  children
}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[60rem] gradi md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
      ref={containerRef}>
      <div
        className="py-10 md:py-40 w-full relative"
        style={{
          perspective: "1000px",
        }}>

        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent
}) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl mx-auto text-center">
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children
}) => {
  // Access translations here
  const { t } = useTranslation();

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="max-w-5xl -mt-12 mx-auto h-[30rem] md:h-[40rem] w-full border-4 border-[#6C6C6C] p-2 md:p-6 bg-[#222222] rounded-[30px] shadow-2xl">
      <div
        className="h-full w-full overflow-hidden rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
        {children}

        <section className="gradi w-screen h-screen relative flex flex-col gap-5 p-2 justify-start items-start">
          <h3 className="text-4xl bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent md:text-7xl">
            {t('testimonial')}
          </h3>

          <p className="text-white  w-72 md:w-1/2">
            {t('testimonialDesc')}
          </p>
          
          <div className="w-full h-80 overflow-hidden md:w-10/12">
            <CollectionCarousel />
          </div>
        </section>
      </div>
    </motion.div>
  );
};
