import React from 'react';
import {Roboto} from '@next/font/google'

const roboto = Roboto({weight: '400'})

interface TextProps {
    text: string
}

const MainTitle = ({text}:TextProps)=>{
    return (
        <h1 className={roboto.className}>{text}</h1>
    )
}

const SubTitle = ({text}:TextProps)=>{
    return (
        <h2 className={roboto.className}>{text}</h2>
    )
}

const SectionTitle = ({text}:TextProps)=>{
    return (
        <h3 className={roboto.className}>{text}</h3>
    )
}

const SmallText = ({text}:TextProps)=>{
    return (
        <p className={roboto.className + ' small'}>{text}</p>
    )
}
const MediumText = ({text}:TextProps)=>{
    return (
        <p className={roboto.className + ' medium'}>{text}</p>
    )
}
const LargeText = ({text}:TextProps)=>{
    return (
        <p className={roboto.className + ' large'}>{text}</p>
    )
}
export {MainTitle,SubTitle,SectionTitle,SmallText,MediumText,LargeText,roboto}