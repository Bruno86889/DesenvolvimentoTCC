import '../scss/tutorials.scss'
import { LegacyRef, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import {SectionTitle,MediumText, SmallText} from './Text';
import { Image } from './Navbar';
import etec from '../img/etec.jpeg';
import {Link} from 'react-router-dom';

import React from 'react';

export interface TutorialItems{
    url: string,
    text: string,
    src: string
}

export type TutorialList = TutorialItems[]

export interface TutorialSectionData {
    sectionTitle: string,
    tutorials: TutorialList
}

export type TutorialSectionList = TutorialSectionData[]

export const TutorialSection = (props:{data: TutorialSectionData})=>{
    return (
        <div className='tutorial-section'>
            <SectionTitle>{props.data.sectionTitle}</SectionTitle>
            <TurorialCarousel items={props.data.tutorials}/>
        </div>
    )
}

const TurorialCarousel = (props:{items:TutorialItems[]})=>{
    return (
        <div className="tutorial-carousel">
            {props.items.map((item,ind)=>{
                return <TutorialItem key={ind} src={item?.src} url={item?.url} text={item?.text}/>
            })}
        </div>
    )
}

const TutorialItem = ({url,text,src}:TutorialItems)=>{
    return (
        <div className="tutorial-item">
            <a target={'_blank'} href={url}>
                {src !== '' ?  <Image src={src}/> : <div className='img-section'></div>}
                
                <div className="tutorial-description">
                    <SmallText>{text}</SmallText>
                </div>
            </a>
        </div>
    );
}