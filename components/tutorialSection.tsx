import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle, SmallText } from './text';
import tutorial from '@/styles/tutorial.module.scss';
import carousel from "@/styles/carousel.module.scss";

import { Mapear } from './util';


export interface TutorialItems {
    url: string,
    text: string,
    src: any
}

export type TutorialList = TutorialItems[]

export type TutorialSectionData = {
    sectionTitle: string,
    tutorials: TutorialList
}

export type TutorialSectionList = TutorialSectionData[]


export const TutorialSection = (props: { data: TutorialSectionData }) => {
    return (
        <div className={tutorial.tutorialSection}>
            <SectionTitle text={props.data.sectionTitle} />
            {/* <TurorialCarousel items={props.data.tutorials}/> */}
            <Carousel className={tutorial.tutorialCarousel} items={props.data.tutorials} itemModel={TutorialItem} />

        </div>
    )
}

const Carousel = (props: { className?: string, items: any[], itemModel: any }) => {
    const visibleBalls = useRef(0)

    useEffect(()=>{
        //
    })
    
    return (
        <div className={`${carousel.carousel} ${props?.className}`}>
            <div>
                {Mapear(props.itemModel, props.items)}
            </div>
            <div>
                <span>{visibleBalls.current}</span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

const TutorialItem = ({ url, text, src }: TutorialItems) => {
    return (
        <div className={tutorial.tutorialItem}>
            <Link target={'_blank'} href={url}>
                <div className={tutorial.imgSection}>
                    {src && <Image alt='' width={40} height={40} src={src} />}
                </div>

                <div className={tutorial.tutorialDescription}>
                    <SmallText text={text}></SmallText>
                </div>
            </Link>
        </div>
    );
}
