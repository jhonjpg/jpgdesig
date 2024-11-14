import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Skills = () => {



    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    speed: 9000,
                    autoplaySpeed: 1000,
                    slidesToScroll: 1
                }
            }
        ]
    };


    const immg = [

        {

            fotos: [
                "skills/javascript.png",
                "skills/html.png",
                "skills/css.png",
                "skills/mongodb.png",
                "skills/reactjs.png",
                "skills/tailwind.png",
                "skills/nodejs.png",
                "skills/github.png",
                "skills/boostrap.png",
                "skills/jquerty.png",
                "skills/canva.png"




            ],

            nombres: ["JAVASCRIPT", "HTML", "CSS", "MONGO DB", "REACT JS ", " TAILWIND", "NODE JS", "GITHUB ", "BOOSTRAP", "JQUERY", "Canva"],

        }

    ]



    return (

        <>





            <section className=" flex w-full justify-center item-center flex-wrap">
                {/* <strong className="text-5xl w-full text-blue-500 w-72 text-center  		 ">{t('aboutMe.skillsHeading')} </strong> */}

                {immg[0].fotos.map((imageUrl, index) => (


                    <li key={index} className="w-90 scale-50 h-full  gap-5 flex flex-col justify-evenly  items-center">

                        <div className=" w-28 h-32">
                            <img className="w-full h-full object-cover object-center	" src={`./${imageUrl}`}
                                alt="ftt" />
                        </div>

                        <p className="text-2xl text-white text-center mt-4">{immg[0].nombres[index]}</p>
                    </li>


                ))}





            </section>


        </>


    )
}

export default Skills