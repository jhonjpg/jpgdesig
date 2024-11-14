import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';

const WebDesign = () => {

    const { t } = useTranslation(); // Obtenemos la función t() para traducir

    const [activeComponent, setActiveComponent] = useState("all");
    const [articulo, setarticulo] = useState(false)



    const Proyect = t('proyect', { returnObjects: true });


    const [expandedProject, setExpandedProject] = useState(null);



    const visible = `hidd  ${articulo ? "visi" : "hidd"}`
  


    const seeMore = (index) => {
        if (expandedProject === index) {
          setExpandedProject(null); // Cerrar la descripción si ya está abierta
        } else {
          setExpandedProject(index); // Abrir la descripción del proyecto correspondiente
        }
  
        setarticulo(true)
  
      };
  
  return (


<>


<li className="flex flex-wrap  gap-2 p-4 items-center justify-center w-full md:w-full  ">



    <div className="flex w-full	 flex-wrap gap-20 items-center justify-around  ">

        
    {Proyect.map((proyecto, index) => {

const isExpanded = expandedProject === index;

const containerClassName = isExpanded ? "relative w-full transition-all 	text-black p-2 bg-black  flex flex-col gap-3 md:w-1/4 justify-center items-center" : 'relative w-full transition-all		  text-black p-2  flex flex-col gap-3 md:w-1/4 justify-center items-center'; // Aplicar la clase black si está expandido


        if (activeComponent === 'all' || activeComponent === proyecto.categoria) {
          return (
            <div key={index} className={containerClassName} >

<h3 className="text-2xl text-white  uppercase" >{proyecto.proyectName}</h3>

<a className="flex w-full flex-col items-center  mb-10" href={proyecto.link} target="_blank">


                <div className="proyects  shadow-lg  shadow-blue-200">
                  <img src={proyecto.imagen} alt="" />
                </div>

                <div className="absolute w-2/4 h-24 shadow-lg  shadow-blue-200 top-52  ">
                  <img  className="w-full h-full " src={proyecto.imagen2} alt="" />
                </div>
              </a>
              {/* {isExpanded && <p className={visible}>{proyecto.description}</p>}
              <button onClick={() => seeMore(index)} className="w-32 p-2 bg-blue-500 mt-20">
      {isExpanded ? t('toggleButtonShowLess') : t('toggleButtonShowMore')}
    </button>             */}
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>





</li>



</>    )
}

export default WebDesign