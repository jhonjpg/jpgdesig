import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';



const GraphicDesign = () => {
    const { t } = useTranslation(); // Obtenemos la función t() para traducir


    const [selectedCategory, setSelectedCategory] = useState('logo'); // Estado para almacenar la categoría seleccionada



    const graphicDesign = t('graphicDesign', { returnObjects: true });

    const handleComponentClick = (category) => {
        setSelectedCategory(category); // Al hacer clic en una categoría, la almacenamos en el estado
      };

  return (

    <>
   <div className="w-full">
   <ul className="w-full flex gap-3 text-blue-200 text-2xl justify-evenly cursor-pointer">
        <li
          onClick={() => handleComponentClick('logo')}
          className={selectedCategory === 'logo' ? 'active' : ''}
        >
          Logo
        </li>
        <li
          onClick={() => handleComponentClick('banners')}
          className={selectedCategory === 'banners' ? 'active' : ''}
        >
          Banner
        </li>
        <li
          onClick={() => handleComponentClick('advertising')}
          className={selectedCategory === 'advertising' ? 'active' : ''}
        >
          Advertising
        </li>
        <li
          onClick={() => handleComponentClick('menu')}
          className={selectedCategory === 'menu' ? 'active' : ''}
        >
          Menu
        </li>
      </ul>

      <div>
      <ul className="w-full flex gap-3 flex-wrap justify-center">
  {graphicDesign.map((designCategory, index) => {
    // Verificamos si la categoría seleccionada coincide con la categoría actual en el mapeo
    if (selectedCategory === designCategory.proyectName) {
      return designCategory.design.map((designItem, designIndex) => {
        const isVideo = designItem.endsWith('.mp4'); // Verificamos si el elemento es un video
        return (
          <li key={designIndex} className="w-40 h-50 ">
            {isVideo ? (
              <video  autoPlay playsInline loop className="w-full h-full">
                <source src={designItem} type="video/mp4" />
                Tu navegador no soporta la reproducción de videos.
              </video>
            ) : (

              <div className="w-full h-40">              <img className="w-full h-full object-cover " src={designItem} alt={`Design ${designIndex}`} />
           
           </div>

            )}
          </li>
        );
      });
    }
    return null; // Si no coincide, retornamos null
  })}
</ul>

      </div>
    </div>


    </>
  )
}

export default GraphicDesign