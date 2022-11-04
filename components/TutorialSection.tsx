import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {SectionTitle, SmallText} from './text';
import tutorial from '../styles/tutorial.module.scss';

export interface TutorialItems{
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


export const TutorialSection = (props:{data: TutorialSectionData})=>{
    return (
        <div className={tutorial.tutorialSection}>
            <SectionTitle text={props.data.sectionTitle} />
            <TurorialCarousel items={props.data.tutorials}/>
        </div>
    )
}

const TurorialCarousel = (props:{items:TutorialList})=>{
    return (
        <div className={tutorial.tutorialCarousel}>
            {props.items.map((item:TutorialItems,ind:number)=>{
                return <TutorialItem key={ind} src={item?.src} url={item?.url} text={item?.text}/>
            })}
        </div>
    )
}

const TutorialItem = ({url,text,src}:TutorialItems)=>{
    return (
        <div className={tutorial.tutorialItem}>
            <Link target={'_blank'} href={url}>
               <div className={tutorial.imgSection}>
                    {src && <Image alt='' width={40} height={40} src={src}/>}
               </div>
                
                <div className={tutorial.tutorialDescription}>
                    <SmallText text={text}></SmallText>
                </div>
            </Link>
        </div>
    );
}