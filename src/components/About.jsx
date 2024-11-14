import React, { useState } from 'react'
import Skills from '../components/Skills';
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';
import { SparklesCore } from '../components/MySkills';



const About = () => {

    const { t } = useTranslation(); // Obtenemos la función t() para traducir


    const [articulo, setarticulo] = useState(false)


    const handleDownloadCV = () => {
        // Reemplaza 'ruta_de_descarga_cv' con la URL de descarga de tu CV
        const cvDownloadUrl = 'img/JonathanPena_Resume.pdf';
        window.open(cvDownloadUrl, '_blank');
      };
    

    const seeMore = () => {
    
      setarticulo(!articulo)
    }

    const hideClass = `hide ${articulo ? "show" : ""}`
  



  

  return (

    <>

   


    <InView triggerOnce={true}>
  {({ inView, ref, entry }) => (
    <strong
      ref={ref}
      className={
        inView ? ' wingle text-2xl w-2/4 text-blue-300 w-72 text-center' : 'off'
      }
    >
      {t('aboutMe.about')}
    </strong>
  )}
</InView>


<InView triggerOnce={true}>
  {({ inView, ref, entry }) => (
    <strong
      ref={ref}
      className={inView ? 'wingle text-5xl w-2/4 text-blue-500 w-72 text-center' : 'off'}
    >
      {t('aboutMe.heading')} <span className="text-blue-700">{t('aboutMe.Im')}</span>
    </strong>
  )}
</InView>




<hr className="w-20  bg-blue-500" />


<div className="  w-full h-5/6	 flex flex-col-reverse  justify-center gap-5 items-start md:flex-row" >


    <InView triggerOnce="true" >
       {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'animado w-full h-92 flex flex-col items-center  justify-center md:w-2/4' : 'off'}>



/* From Uiverse.io by SouravBandyopadhyay */ 
 <div class="cardM">
 <p className="text-xl w-fulltext-center text-white p-4">{t('aboutMe.description0')}</p>
  <p className="text-xl text-start text-white p-4">{t('aboutMe.description1')}</p>
  <p className="text-xl text-start text-white p-4">{t('aboutMe.additionalDescription1')}</p>
  <p className="text-xl text-start text-white p-4">{t('aboutMe.additionalDescription2')}</p>
      <div class="go-corner">
        <div class="go-arrow">→</div>
      </div>
    </div>
    <button className="w-32 bg-blue-700 text-gray-200 shadow-xl shadow-blue-900 rounded-lg mt-7 p-2 mb-5 hover:scale-125 transition-transform duration-300 ease-in-out" onClick={handleDownloadCV}>
  {t('contactDiv.downloadCV')}
</button>




{/* <p className={hideClass}  >{t('aboutMe.additionalDescription1')}</p> 
<p className={hideClass}  >{t('aboutMe.additionalDescription2')}</p>


<button className="w-36 rounded-lg bg-blue-400 p-2" onClick={seeMore}>
      {articulo ? t('toggleButtonShowLess') : t('toggleButtonShowMore')}
    </button> */}


</div>

)}
</InView>



<InView triggerOnce="true" >
       {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'animadox w-full h-92 flex flex-col items-center gap-5 justify-around md:w-2/4' : 'off opacity-0'}>

<div className="shasha w-full h-96 backdrop-opacity-10 backdrop-invert bg-blue/30 p-4">
  
<div className="relative w-full h-full">
  {/* Imagen inicial */}
  <div className="absolute inset-0 w-full h-full bg-[url('../img/meC.jpg')] bg-center bg-cover grayscale transition-all duration-2000 ease-in-out hover:grayscale-0"></div>
  
  {/* Imagen que aparece en hover */}
  <div className="absolute inset-0 w-full h-full bg-[url('../img/me.jpg')] bg-center bg-cover opacity-0 hover:opacity-100 transition-opacity duration-2000 ease-in-out"></div>
</div>


          </div>



        




<aside className="w-fullh-92  relative">

<div className="w-screen h-screen absolute">

<SparklesCore/>
</div>
<p className="logo-1 sp relative ">{t('services.skillsHeading')}</p>


<div className="w-full">


<Skills/>
</div>
</aside>




</div>

)}
</InView>


</div>



</>
)
}

export default About