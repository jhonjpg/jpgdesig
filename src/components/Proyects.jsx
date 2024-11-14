import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';
import GraphicDesign from './GraphicDesign';
import WebDesign from './WebDesign';


const Proyects = () => {


  const { t } = useTranslation(); // Obtenemos la función t() para traducir


    const [design, setDesign] = useState("web design")
    

    function handleComponentClick(componentName) {
      setDesign(componentName);
    
      }
    
   

    





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
      {t('proyects.heading')}
    </strong>
  )}
</InView>


<InView triggerOnce={true}>
  {({ inView, ref, entry }) => (
    <strong
      ref={ref}
      className={inView ? 'wingle text-5xl w-2/4 text-blue-500 w-72 text-center' : 'off'}
    >
      {t('proyects.proyect')}
    </strong>
  )}
</InView>


<hr className="w-20  bg-blue-500" />
<div className="w-full flex justify-center items-center gap-5">
  <h2 onClick={() => handleComponentClick('web design')} className={`w-72 text-center cursor-pointer ${design === 'web design' ? 'bg-blue-500 text-white p-1' : 'bg-blue-950 text-white'}`}>WEB DESIGN</h2>
  
  <h2 onClick={() => handleComponentClick('graphic design')} className={`w-72 text-center cursor-pointer ${design === 'graphic design' ? 'bg-blue-500 text-white p-1' : 'bg-blue-950 text-white'}`}>GRAPHIC DESIGN</h2>
</div>
<ul className="flex flex-col w-full items-center gap-4">
  {design === 'web design' && <WebDesign />}
  {design === 'graphic design' && <GraphicDesign />}
</ul>





</>  )
}

export default Proyects