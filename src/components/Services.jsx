// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import { Autoplay, EffectFlip, Navigation } from 'swiper/modules';


// import { useTranslation } from 'react-i18next';
// import { InView } from 'react-intersection-observer';

// const Services = () => {



//   const { t } = useTranslation(); // Obtenemos la función t() para traducir


//   const servicesList = t('servicesList', { returnObjects: true });
//   const servicesimg = t('servicesimg', { returnObjects: true });


 
//   return (

// <>



//     <InView triggerOnce={true}>
//   {({ inView, ref, entry }) => (
//     <strong
//       ref={ref}
//       className={
//         inView ? ' wingle text-2xl w-2/4 text-blue-300 w-72 text-center' : 'off'
//       }
//     >
//       {t('services.servicios')}
//     </strong>
//   )}
// </InView>


// <InView triggerOnce={true}>
//   {({ inView, ref, entry }) => (
//     <strong
//       ref={ref}
//       className={inView ? 'wingle text-5xl w-2/4 text-blue-500 w-72 text-center' : 'off'}
//     >
//       {t('services.heading')} <span className="text-blue-700">{t('services.do')}</span>
//     </strong>
//   )}
// </InView>



// <hr className="w-20  bg-blue-500" />



// <InView triggerOnce={true}>
//   {({ inView, ref, entry }) => (
// <ul ref={ref}       className={inView ? 'wingleOp w-full h-full gap-5 flex justify-center flex-wrap items-center' : 'off'}
// >

// <div className="w-40 bg-red-400"> ddrapador</div>

// <div className="bg-blue-700 w-2 rounded-lg h-screen">d</div>


// <div className="w-40 bg-red-400"> <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="blue" class="bi bi-arrow-left" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
// </svg>rapador</div>


//    {/* {servicesList.map((service, index) => (
   

//          <li key={index}  className=" shadow-lg  shadow-blue-500   flex items-center justify-center bg-black p-2 h-80 text-white rounded-xl	 ">
//            <div className="flex flex-col items-center justify-center gap-1">
      
//              <h3 className="text-xl text-center text-blue-300">{t(service.title)}</h3>
//              <p className="text-center w-full">{t(service.description)}</p>
            
//            </div>
//          </li>
         
       
//    ))} */}


//    {/* 

// {servicesimg.map((service, index) => (
//   <li key={index} className="shadow-lg shadow-blue-500 w-11/12 flex flex-col items-center justify-center bg-white p-2 h-80 text-black gap-3 rounded-xl md:w-64">
//     <h3 className="text-xl text-center text-blue-300">{t(service.title)}</h3>
//     <div className="w-full flex flex-col items-center justify-center gap-3">
//       <Swiper
//         spaceBetween={30}
//         effect={'fade'}
//         navigation={false}
//         autoplay={{
//           delay: 3000, // Ajusta el retraso deseado
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, EffectFlip, Navigation]}
//         className="mySwiper w-full h-full flex flex-col justify-between items-center"
//       >
//         {service.others.names.map((name, nameIndex) => (
//           <SwiperSlide key={nameIndex} className="w-full h-full">
//             <div className="w-full h-64">
//               <h6 className="text-2xl text-center flex justify-center">
//                 {t(name)}
//               </h6>
//               <img
//                 src={t(service.others.img[nameIndex])}
//                 alt=""
//                 className="w-full h-full object-contain"
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </li>
// ))} */}




//  </ul>

 

 

// )}
// </InView>



//  </>
// )
// }

// export default Services
import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';
import { LampDemo } from '../components/Lamp';


const Services = () => {
  const [activeBranch, setActiveBranch] = useState(0);
  const [branchGradient, setBranchGradient] = useState('bg-gray-900');

  const { t } = useTranslation(); // Obtenemos la función t() para traducir

  const servicesList = t('servicesList', { returnObjects: true });

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const maxScroll = windowHeight * 2; // Ajusta esto si es necesario

    // Calcula el índice de la branch activa
    const newActiveBranch = Math.min(
      Math.floor(scrollPosition / (windowHeight * 0.3)),
      servicesList.length - 1
    );

    setActiveBranch(newActiveBranch);

    // Calcula el porcentaje de scroll y aplica un gradiente
    const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
    const color = `linear-gradient(to bottom, rgba(191, 219, 254, ${1 - scrollPercentage}) 0%, rgba(59, 130, 246, ${scrollPercentage}) 100%)`;
    
    setBranchGradient(color);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>


      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <strong
            ref={ref}
            className={
              inView ? 'wingle text-2xl w-2/4 text-blue-300 w-72 text-center' : 'off'
            }
          >
            {t('services.servicios')}
          </strong>
        )}
      </InView>

      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <strong
            ref={ref}
            className={inView ? 'wingle text-5xl w-3/4 text-blue-500 w-72 text-center' : 'off'}
          >
            {t('services.heading')} <span className="text-blue-700">{t('services.do')}</span>
          </strong>
        )}
      </InView>

  
      <div className="relative flex flex-col items-center justify-center h-screen">
        {/* Línea del centro del árbol */}
        <div
          className="absolute opacity-0  h-full w-1 md:opacity-1	"
          style={{ background: branchGradient, transition: 'background 0.5s' }}
        ></div>

        {/* Ramas */}
        <div className="absolute top-0 w-full flex flex-col  gap-8 items-center ">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className={`flex transition-opacity duration-500 ${
                index <= activeBranch ? "opacity-100" : "opacity-0"
              }`}
              style={{ marginTop: index * 0 + "px" }}
            >
              {/* Condicional para alternar entre izquierda y derecha */}
              {index % 2 === 0 ? (
                // Blue branches (a la izquierda de la línea central)
                <div className="flex justify-start w-96   z-20 pr-8 md:justify-end md:w-1/2 ">
                  <div className="flex items-center">
                    <div className="clip mr-2 text-lg text-white font-semibold">
                      <h3 className="text-2xl text-center text-blue-500">{t(service.title)}</h3>
                      <p className="text-center text-start w-full">{t(service.description)}</p>
                    </div>
                    <div className="w-96 h-1 bg-blue-500"></div>
                  </div>
                </div>
              ) : (
                // Red branches (a la derecha de la línea central)
                <div className="flex justify-end w-96 pl-60 gap-4 z-20 md:w-96  md:justify-start">
                  
                  <div className="flex items-center">
                    <div className="w-96 h-1 bg-blue-200"></div>
                    <div className="clip mr-2 text-lg text-white font-semibold">
                      <h3 className="text-2xl text-center text-blue-600">{t(service.title)}</h3>
                      <p className="text-center text-end w-full">{t(service.description)}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;



// background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 1)'%3e%3c/rect%3e%3crect width='60' height='60' clip-path='url(%26quot%3b%23SvgjsClipPath1001%26quot%3b)' x='56.12' y='365.49' fill='url(%26quot%3b%23SvgjsPattern1002%26quot%3b)' transform='rotate(104.23%2c 86.12%2c 395.49)'%3e%3c/rect%3e%3crect width='144' height='144' clip-path='url(%26quot%3b%23SvgjsClipPath1003%26quot%3b)' x='172.17' y='415.86' fill='url(%26quot%3b%23SvgjsPattern1004%26quot%3b)' transform='rotate(199.15%2c 244.17%2c 487.86)'%3e%3c/rect%3e%3crect width='288' height='288' clip-path='url(%26quot%3b%23SvgjsClipPath1005%26quot%3b)' x='909.59' y='380.42' fill='url(%26quot%3b%23SvgjsPattern1006%26quot%3b)' transform='rotate(64.83%2c 1053.59%2c 524.42)'%3e%3c/rect%3e%3crect width='302.71999999999997' height='302.71999999999997' clip-path='url(%26quot%3b%23SvgjsClipPath1007%26quot%3b)' x='312.52' y='219.65' fill='url(%26quot%3b%23SvgjsPattern1008%26quot%3b)' transform='rotate(236.65%2c 463.88%2c 371.01)'%3e%3c/rect%3e%3crect width='332.64' height='332.64' clip-path='url(%26quot%3b%23SvgjsClipPath1009%26quot%3b)' x='20.62' y='57.15' fill='url(%26quot%3b%23SvgjsPattern1010%26quot%3b)' transform='rotate(182.28%2c 186.94%2c 223.47)'%3e%3c/rect%3e%3cpath d='M1146.3 238.1 L1267.8 212.9L1268.7645599480195 287.2145599480194z' fill='rgba(61%2c 61%2c 61%2c 1)'%3e%3c/path%3e%3cpath d='M394.03 571.3299999999999 L435.43 668.38L468.88686405674133 565.6981359432588z' fill='rgba(79%2c 79%2c 79%2c 1)'%3e%3c/path%3e%3cpath d='M1238.3 183.09L1230.38 173.02 1238.46 163.09 1230.55 153.02 1238.63 143.09 1230.72 133.02 1238.8 123.09' stroke='rgba(79%2c 79%2c 79%2c 1)' stroke-width='1.05' stroke-dasharray='2%2c 2'%3e%3c/path%3e%3ccircle r='46.666666666666664' cx='824.7' cy='120.25' stroke='rgba(79%2c 79%2c 79%2c 1)' stroke-width='1' stroke-dasharray='3%2c 2'%3e%3c/circle%3e%3ccircle r='52.429087592934536' cx='321.26' cy='274.25' stroke='rgba(79%2c 79%2c 79%2c 1)' stroke-width='1'%3e%3c/circle%3e%3ccircle r='70.63125275693592' cx='713.82' cy='57.16' fill='rgba(79%2c 79%2c 79%2c 1)'%3e%3c/circle%3e%3cpath d='M401.31 227.44 L416.26 224.04L403.1840086760826 220.13900867608263z' fill='rgba(91%2c 91%2c 91%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1002'%3e%3cpath d='M3 1L3 5M1 3L5 3' stroke='rgba(91%2c 91%2c 91%2c 1)' fill='none' stroke-width='1'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1001'%3e%3ccircle r='15' cx='86.12' cy='395.49'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1004'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(79%2c 79%2c 79%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1003'%3e%3ccircle r='36' cx='244.17' cy='487.86'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6' height='6' patternUnits='userSpaceOnUse' id='SvgjsPattern1006'%3e%3cpath d='M0 6L3 0L6 6' stroke='rgba(79%2c 79%2c 79%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1005'%3e%3ccircle r='72' cx='1053.59' cy='524.42'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='6.88' height='6.88' patternUnits='userSpaceOnUse' id='SvgjsPattern1008'%3e%3cpath d='M0 6.88L3.44 0L6.88 6.88' stroke='rgba(61%2c 61%2c 61%2c 1)' fill='none'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1007'%3e%3ccircle r='75.67999999999999' cx='463.88' cy='371.01'%3e%3c/circle%3e%3c/clipPath%3e%3cpattern x='0' y='0' width='7.56' height='7.56' patternUnits='userSpaceOnUse' id='SvgjsPattern1010'%3e%3cpath d='M3.78 1L3.78 6.56M1 3.78L6.56 3.78' stroke='rgba(79%2c 79%2c 79%2c 1)' fill='none' stroke-width='1.23'%3e%3c/path%3e%3c/pattern%3e%3cclipPath id='SvgjsClipPath1009'%3e%3ccircle r='83.16' cx='186.94' cy='223.47'%3e%3c/circle%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");