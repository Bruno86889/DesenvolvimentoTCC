import { useRef } from 'react';
import Image from "next/image";

import { useEffect, useState } from "react";
import { MainTitle } from "./text";

import galeria from '@/styles/galeria.module.scss';
import Carousel from 'better-react-carousel';

const Galeria = () => {
    const [full, setFull] = useState(false)

    const imgs = useRef(["/img-1.jpg", "/img-2.jpg", "/img-3.jpg", "/img-4.jpg", "/img-5.jpg", "/img-6.jpg", "/img-7.jpg","etec1.svg","nsa.svg","rh.jpg"])

    function handleFull() {
        setFull(!full)
    }
    return (
        <>
            <MainTitle text="Fotos da Escola" />
            <div className={galeria.galeria}>
                <Carousel containerClassName={galeria.galeriaContainer} cols={3} rows={2} gap={10} loop scrollSnap showDots>
                    {imgs.current.map((img,i)=>{
                        return <Carousel.Item key={i}>
                            <img width="100%" src={img} alt="" />
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </>
    )
}


export default Galeria;