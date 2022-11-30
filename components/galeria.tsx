import { useRef } from 'react';
import Image from "next/image";

import { useEffect, useState } from "react";
import { MainTitle } from "./text";

import galeria from '@/styles/galeria.module.scss';
import Carousel from 'better-react-carousel';

const Galeria = () => {
    const [full, setFull] = useState(false)

    const imgs = useRef([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])

    function handleFull() {
        setFull(!full)
    }
    return (
        <>
            <MainTitle text="Fotos da Escola" />
            <div className={galeria.galeria}>
                <Carousel containerClassName={galeria.galeriaContainer} cols={3} rows={2} gap={10} allowFullScreen loop scrollSnap showDots>
                    {imgs.current.map((img,i)=>{
                        return <Carousel.Item key={i}>
                            <img width="100%" src={`./uploads/img/img${img}.jpg`} alt="" />
                        </Carousel.Item>
                    })}
                </Carousel>
            </div>
        </>
    )
}


export default Galeria;