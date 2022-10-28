import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {SectionTitle, SmallText} from './Text';


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
        <div className='tutorial-section'>
            <SectionTitle key={1}>{props.data.sectionTitle}</SectionTitle>
            <TurorialCarousel key={1} items={props.data.tutorials}/>
        </div>
    )
}

const TurorialCarousel = (props:{items:TutorialList})=>{
    return (
        <div className="tutorial-carousel">
            {props.items.map((item:TutorialItems,ind:number)=>{
                return <TutorialItem key={ind} src={item?.src} url={item?.url} text={item?.text}/>
            })}
        </div>
    )
}

const TutorialItem = ({url,text,src}:TutorialItems)=>{
    return (
        <div className="tutorial-item">
            <Link target={'_blank'} href={url}>
                <a>
                {/* {src !== '' ?  <Image alt='' width={40} height={40} src={src}/> : <div className='img-section'></div>} */}
                <div className='img-section'></div>
                
                <div className="tutorial-description">
                    <SmallText>{text}</SmallText>
                </div>
                </a>
            </Link>
        </div>
    );
}