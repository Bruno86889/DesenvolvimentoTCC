import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle, SmallText } from './text';
import tutorial from '@/styles/tutorial.module.scss';
import carousel from "@/styles/carousel.module.scss";

import { Mapear } from './util';
import { usePony } from 'pony-props';
import { ActionKind } from 'pony-props';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
    const {getSectionProps,
        getAnnouncerProps,
        getHeadingProps,
        getCarouselWrapperProps,
        getCarouselItemProps,
        getButtonProps,
        getCarouselProps,
        state} = usePony({numItems:props.items.length})
    
    return (
        <div {...getSectionProps()} className={`${props?.className}`}>
            <h1 {...getHeadingProps()}></h1>
            <div {...getCarouselWrapperProps()} className={tutorial.tutorialWrapper}>
                <ul {...getCarouselProps()} className={tutorial.tutorialList}>
                    {props.items.map((item,i)=>{
                        return <li key={i} className={tutorial.tutorialItem} {...getCarouselItemProps(i)}>
                            <Link target={'_blank'} href={item.url}>
                                <div className={tutorial.imgSection}>
                                    {item.src && <Image alt='' width={40} height={40} src={item.src} />}
                                </div>
                
                                <div className={tutorial.tutorialDescription}>
                                    <SmallText text={item.text}></SmallText>
                                </div>
                            </Link>
                    </li>
                    })}
                </ul>
            </div>

            {props.items.length < 3 ? 
            <>
            <div className={tutorial.leftButton}>
                <button {...getButtonProps(ActionKind.Previous)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </button>
            </div>
            <div className={tutorial.rightButton} >
                <button {...getButtonProps(ActionKind.Next)}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </button>
            </div>

            </> 
            
            : 
            <>
            <button style={{display: "none"}} {...getButtonProps(ActionKind.Next)}></button>
            </>}
            
            <div {...getAnnouncerProps()} className={tutorial.ponnies}>

            </div>
        </div>
    )
}

const TutorialItem = (props:{ url:string, text:string, src:string },...others:any) => {
    return (
        <li className={tutorial.tutorialItem} {...others}>
            <Link target={'_blank'} href={props.url}>
                <div className={tutorial.imgSection}>
                    {props.src && <Image alt='' width={40} height={40} src={props.src} />}
                </div>

                <div className={tutorial.tutorialDescription}>
                    <SmallText text={props.text}></SmallText>
                </div>
            </Link>
        </li>
    );
}
