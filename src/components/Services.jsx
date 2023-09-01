import React from 'react'
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';

const Services = () => {



  const { t } = useTranslation(); // Obtenemos la función t() para traducir


  const servicesList = t('servicesList', { returnObjects: true });

 
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
      {t('services.servicios')}
    </strong>
  )}
</InView>


<InView triggerOnce={true}>
  {({ inView, ref, entry }) => (
    <strong
      ref={ref}
      className={inView ? 'wingle text-5xl w-2/4 text-blue-500 w-72 text-center' : 'off'}
    >
      {t('services.heading')} <span className="text-blue-700">{t('services.do')}</span>
    </strong>
  )}
</InView>



<hr className="w-20  bg-blue-500" />



<InView triggerOnce={true}>
  {({ inView, ref, entry }) => (
<ul ref={ref}       className={inView ? 'wingleOp w-full h-full gap-5 flex justify-around flex-wrap items-center' : 'off'}
>
   {servicesList.map((service, index) => (
   
         <li key={index}  className=" shadow-lg  shadow-blue-500 w-72  flex items-center justify-center bg-black p-2 h-80 text-white rounded-xl	 ">
           <div className="flex flex-col items-center justify-center gap-3">
      
             <h3 className="text-xl text-center text-blue-300">{t(service.title)}</h3>
             <p className="text-center w-full">{t(service.description)}</p>
            
           </div>
         </li>
       
   ))}
 </ul>

)}
</InView>
 </>
)
}

export default Services