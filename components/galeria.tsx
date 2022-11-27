import {useRef} from 'react';
import Image from "next/image";

import { useEffect, useState } from "react";
import { MainTitle } from "./text";

import galeria from '@/styles/galeria.module.scss';

const Galeria = () => {
    const [full,setFull] = useState(false)
    
    const imgs = useRef(["/img-1.jpg", "/img-2.jpg", "/img-3.jpg", "/img-4.jpg", "/img-5.jpg", "/img-6.jpg", "/img-7.jpg"])

    function handleFull(){
        setFull(!full)
    }
    return (
        <>
            <MainTitle text="Fotos da Escola" />
            <div className={galeria.galeria}>
                {imgs.current.map((img,i)=>{
                    return <Image src={img} key={i} alt={''} width={200} height={100}/>
                })}
            </div>
        </>
    )
}


export default Galeria;