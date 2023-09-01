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
                "skills/javascript.jpg",
                "skills/html.jpg",
                "skills/csss.jpg",
                "skills/mongodb.jpg",
                "skills/reactjs.jpg",
                "skills/tailwind.jpg",
                "skills/nodejs.jpg",
                "skills/github.jpg",
                "skills/boostrap.jpg",
                "skills/jquery.jpg"



            ],

            nombres: ["JAVASCRIPT", "HTML", "CSS", "MONGO DB", "REACT JS ", " TAILWIND", "NODE JS", "GITHUB ", "BOOSTRAP", "JQUERY"],






        }




    ]



    return (

        <>


       



                <Slider {...settings}>
               
                    {immg[0].fotos.map((imageUrl, index) => (
                      
                      
                      <li key={index} className="carousel scale-50 bg-red-200 h-full  gap-5 flex flex-col items-center">

                            <div className="w-full h-32">
                                    <img className="object-cover object-center	" src={imageUrl} alt="ftt" />
                                </div> 

                                    <p className="text-2xl text-white text-center mt-4">{immg[0].nombres[index]}</p>
                        </li>


                    ))}
                </Slider>



        </>


    )
}

export default Skills