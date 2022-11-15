import {useRef} from 'react';
import Image from "next/image";

import { useEffect, useState } from "react";
import { MainTitle } from "./text";

import galeria from '@/styles/galeria.module.scss';

const Galeria = () => {
    const [full,setFull] = useState(false)
    
    function handleFull(){
        setFull(!full)
    }
    return (
        <>
            <MainTitle text="Fotos da Escola" />
            <div className={galeria.galeria}>
                <DynamicImage />
                <DynamicImage />
                <DynamicImage />
                <DynamicImage />

                <DynamicImage />
                <DynamicImage />
                <DynamicImage />
                <DynamicImage />

                <DynamicImage />
                <DynamicImage />
                <DynamicImage />
                <DynamicImage />
            </div>
        </>
    )
}

const DynamicImage = () => {
    const [src, setSrc] = useState('')
    const [imgIndex, setImgIndex] = useState(0)

    const imgs = useRef(["/img-1.jpg", "/img-2.jpg", "/img-3.jpg", "/img-4.jpg", "/img-5.jpg", "/img-6.jpg", "/img-7.jpg"])

    useEffect(() => {
        imgIndex > imgs.current.length - 1 ? setImgIndex(0) : imgIndex
        setSrc(imgs.current[imgIndex])
    }, [imgIndex])

    return (
        <div className={galeria.imgGroup} onClick={() => {
            setImgIndex(imgIndex + 1)
        }}>
            <Image src={src} width={200} height={100} alt={""} />
        </div>
    )
}


export default Galeria;