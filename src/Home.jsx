import React, { useState, useEffect } from 'react';
import { InView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import Services from './components/Services';
import About from './components/About';
import Proyects from './components/Proyects';
import Navbar from './components/Navbar';
import { Parallax, Background } from 'react-parallax';
import { BackgroundBeamsWithCollision } from './components/Bg';
import { LampDemo } from './components/Lamp';
import { CollectionCarousel } from './components/Testimonials';
import { ContainerScroll } from './components/MyProyects';





const Home = () => {


  const { t } = useTranslation(); // Obtenemos la función t() para traducir


  const servicesList = t('servicesList', { returnObjects: true });

  const moved = () => {
    const squereStick = document.querySelector('.squere-stick');
    squereStick.style.left = '25%'; // Mueve el cuadrado hacia la izquierda
    squereStick.style.transition = 'left 1s ease'; // Establece la transición en la propiedad left

  };

  const resetPosition = () => {
    const squereStick = document.querySelector('.squere-stick');
    squereStick.style.left = '65%'; // Vuelve a la posición original
  };

  const handleScroll = () => {
    const scrollingDiv = document.querySelector('.squere-rotate');
    if (scrollingDiv) {
      const scrollPosition = window.scrollY;

      scrollingDiv.style.right = `${scrollPosition * 0.5}px`; // Ajusta la velocidad del desplazamiento

      // const scrollPositionx = window.scrollX;
      // scrollingDiv.style.left = `${scrollPositionx * 0.5}px`; // Ajusta la velocidad del desplazamiento


    }


  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  const start = () => {
    // Realizar el desplazamiento suave hasta 1000 píxeles desde la parte superior del documento.
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
      // Esto agrega el efecto suave al desplazamiento
    });
  };


  return (
    <>

      <main className="flex flex-col align-items justify-center w-full ">

        <nav className="w-full fixed top-0 z-50	">

          <Navbar />


        </nav>


        {/* <Parallax className="  w-screen h-full "
 strength={300}
 style={{
  position: 'absolute',
  bottom:"0px",
  right:"0px"
  
  
}}>
        <Background className="  w-screen h-screen"  >

        <section className="fondoshape absolute">

  
<div class="shape square"></div>
<div class="shape circle"></div>
<div class="shape hexagon"></div>
<div class="shape oval"></div>
<div class="shape parallelogram"></div>
<div class="shape star"></div>
<div class="shape x-shape"></div>


<div class="shape square"></div>
<div class="shape circle"></div>
<div class="shape oval"></div>
<div class="shape parallelogram"></div>
<div class="shape x-shape"></div>


<div class="shape square"></div>
<div class="shape circle"></div>
<div class="shape oval"></div>
<div class="shape parallelogram"></div>
<div class="shape x-shape"></div>




</section>


     

           </Background>


    </Parallax>
  */}



        <section id="home" className="flex  items-center justify-center flex-col-reverse w-screen h-screen gap-10  md:flex-row flex-col-reverse justify-center">



        <div className="w-screen  absolute">

<BackgroundBeamsWithCollision/>
</div>





          <aside className=" w-full h-2/4 z-10 flex flex-col items-center relative  md:w-1/4  h-full  justify-center items-center ">

            <div className="squere-rotate   w-full h-full flex justify-center   md:h-2/4   
">


              <img src="/img/meNew.png" className="w-72 h-full objesct-contain md:w-full" />
            </div>



            <div className="squere-stick h-full md:h-3/5 absolute top-30 right-20 bg-blue-500/50 w-8" onMouseEnter={moved} onMouseLeave={resetPosition}></div>



          </aside>



          <article className="w-10/12 h-2/4 pt-10  flex flex-col items-center z-10 justify-center gap-4  md:w-1/4 h-full  justify-center   ">


            <h2 className="text-2xl text-start w-full text-blue-500">{t('webDeveloper')}</h2>
            <h1 className="text-4xl text-gray-200 mb-2">{t('jpgDev')} Jonathan<span className="text-blue-300 border-b-2	border-blue-300 border-solid  "> Peña </span></h1>
            <p className="w-full text-start mt-1 text-gray-200">{t('descripcion')}</p>


            <button className="w-20 bg-blue-300 text-gray-900 rounded-lg p-1 hover:bg-blue-600 " onClick={start}>{t('start')}</button>


            <div className="w-72 flex items-center justify-center  ">
              <div className="card">
                <a href="https://www.instagram.com/jonathan_jjpg/" target="_blank" className="socialContainer containerOne">
                  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                </a>

                <a href="https://github.com/jhonjpg/" className="socialContainer containerTwo" target="_blank">
                  <svg className="socialSvg githubrSvg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg>              </a>

                <a href="https://www.linkedin.com/in/jonathanjpg" className="socialContainer containerThree" target="_blank">
                  <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>

                <a href="https://api.whatsapp.com/send?phone=18496237873"
                  className="socialContainer containerFour" target="_blank">
                  <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </a>
              </div>
            </div>



          </article>










        </section>




        <section id="services" className=" relative overflow-hidden bg-gray-900 w-full 	h-full  p-4  flex flex-col   md:flex-col justify-center items-center  gap-5">


        <div className="w-80 absolute top-0  h-20 md:w-screen ">

<LampDemo/>

</div>

<div className=" w-screen z-10 w-ful l 	h-full  p-20  flex flex-col   md:flex-col justify-center items-center  gap-5">


          <Services />
</div>


        </section>




        <section id="about" className="  spike w-full 	h-1-/12  p-4  flex flex-col   md:flex-col justify-center items-center  gap-5">

          <About />
        </section>


        <section id="proyects" className="  bg-gray-900 w-full 	h-1-/12  p-4  flex flex-col   md:flex-col justify-center items-center  gap-5">

          <Proyects />

        </section>



<section id="testimonials" className="w-screen">


<ContainerScroll/>

</section>


        <section id="contact" className=" relative w-full  bg-blue-900 flex flex-col md:flex-col  gap-5">

          <div className="w-full	 p-5	 flex flex-col items-center bg-black md:w-10/12">
            <strong className="text-3xl text-blue-500 md:text-4xl w-3/5   w-72 text-center  border-solid pb-5		 ">{t('contactDiv.contactMe')}</strong>


            <form className="w-full flex  flex-col p-3 justify-center  items-center  gap-5 " action="https://formsubmit.co/6c3bc50ed13db84e1fe2f0325dda5e61" method="POST">

              <div className="  w-10/12 md:w-3/4 flex flex-col gap-5 items-center justify-center">
                <input className=" w-full bg-transparent border-b-2	border-blue-500 border-solid pb-3  text-white md:w-3/4" type="text" name="name" required="" placeholder={t('contactDiv.name')} />
                <input className="w-full bg-transparent border-b-2	border-blue-500 border-solid pb-3   text-white md:w-3/4" type="email" name="email" required="" placeholder={t('contactDiv.email')} />
                <input className="w-full bg-transparent border-b-2	border-blue-500 border-solid pb-3   text-white md:w-3/4" type="tel" name="phone" required="" placeholder={t('contactDiv.phone')} />
                <textarea className="w-full bg-transparent border-b-2	border-blue-500 border-solid pb-3   text-white md:w-3/4" name="mensage" id="" cols="33" rows="4" placeholder={t('contactDiv.message')} required></textarea>


              </div>



              <a href="#">
                <button className="bg-blue-500 mt-3  w-24 rounded-lg" type="submit">{t('contactDiv.submit')}</button>
                <span></span>
              </a>



              <input type="hidden" name="_next" value="https://jhonjpg.github.io/jpgdesig/" />
              <input type="hidden" name="_captcha" value="false" />


            </form>

          </div>


          <div className="general wingleOp   right-20 w-72 shadow-lg rounded-lg shadow-blue-500 gap-2 flex flex-col justify-center items-center  h-80  md:absolute  w-1/4  right-32 top-30'">

            <p className="text-gray-300 w-full flex gap-1  pl-5"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 512 512" id="IconChangeColor"><title>ionicons-v5-o</title><path d="M471.05,168.36,263.24,65.69a16.37,16.37,0,0,0-14.48,0L41,168.36a16,16,0,0,0-9,14.31V432a16.09,16.09,0,0,0,16.19,16H463.81A16.09,16.09,0,0,0,480,432V182.67A16,16,0,0,0,471.05,168.36ZM256,97.89l173,85.44L253.3,270.11l-173-85.44Z" id="mainIconPathAttribute" fill="#ffffff"></path></svg>: jonathan050315jj@gmail.com </p>

            <p className="text-gray-300 flex gap-1 w-full pl-5">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" /> </svg>: +1 (908) 591-5193</p>

            <p className="text-gray-300 w-full flex gap-1  pl-5">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16"> <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" /> </svg>
              : 9:00 AM - 6:00 PM</p>


            <div className="w-72 flex items-center justify-center  ">
              <div className="card">
                <a href="https://www.instagram.com/jonathan_jjpg/" target="_blank" className="socialContainer containerOne">
                  <svg className="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                </a>

                <a href="https://github.com/jhonjpg/" className="socialContainer containerTwo" target="_blank">
                  <svg className="socialSvg githubrSvg" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path> </svg>              </a>

                <a href="https://www.linkedin.com/in/jonathanjpg" className="socialContainer containerThree" target="_blank">
                  <svg className="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>

                <a href="https://api.whatsapp.com/send?phone=19085915193"
                  className="socialContainer containerFour" target="_blank">
                  <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </a>
              </div>
            </div>
          <div className="bg-red-400 w-20 h-16  "><img src="img/jdw.png" className="w-full h-full object-cover" alt="" /></div>

          </div>



        </section>






        <footer>

          </footer>

     

      </main>

    </>
  );
}

export default Home;



