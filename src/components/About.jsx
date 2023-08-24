import React, { useState } from 'react'
import Skills from '../components/Skills';
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';



const About = () => {

    const { t } = useTranslation(); // Obtenemos la función t() para traducir



    const [articulo, setarticulo] = useState(false)


    const handleDownloadCV = () => {
        // Reemplaza 'ruta_de_descarga_cv' con la URL de descarga de tu CV
        const cvDownloadUrl = 'img/contact/JonathanPena_Resume.pdf';
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


<div className=" w-full h-5/6	 flex flex-col  justify-center gap-5 items-center md:flex-row" >


    <InView triggerOnce="true" >
       {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'animado w-full h-92 flex flex-col items-center  justify-center md:w-2/4' : 'off'}>




  <p className="text-xl w-fulltext-center text-white p-4">{t('aboutMe.description0')}</p>
  <p className="text-xl text-start text-white p-4">{t('aboutMe.description1')}</p>


<p className={hideClass}  >{t('aboutMe.additionalDescription1')}</p> 
<p className={hideClass}  >{t('aboutMe.additionalDescription2')}</p>

<button className="w-36 rounded-lg bg-blue-400  p-2" onClick={seeMore}>{articulo ? "Menos": "leer Mas"}</button>


</div>

)}
</InView>



<InView triggerOnce="true" >
       {({ inView, ref, entry }) => (

<div ref={ref} className={inView ? 'animadox w-full h-92 flex flex-col items-center gap-5 justify-around md:w-2/4' : 'off'}>


<div className="cont shadow-blue-200	 shadow-xl   w-5/6 h-5/6	">


<img  className="w-full h-full object-contain" src="img/me.jpg" alt=""  />
</div>


<button className="w-32 bg-blue-700 text-gray-200 shadow-xl  shadow-blue-900 rounded-lg mt-10 p-2" onClick={handleDownloadCV}>{t('contactDiv.downloadCV')}</button>



</div>

)}
</InView>


</div>


<div className="caru w-full h-42 flex flex-col  ">

<strong className="text-5xl w-full text-blue-500 w-72 text-center  		 ">{t('aboutMe.skillsHeading')} </strong>

<Skills/>
</div>

</>
)
}

export default About