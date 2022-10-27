import React from 'react';
import '../scss/text.scss';

const MainTitle = ({children})=>{
    return (
        <h1>{children}</h1>
    )
}

const SubTitle = (children)=>{
    return (
        <h2>{children}</h2>
    )
}

const SectionTitle = ({children})=>{
    return (
        <h3>{children}</h3>
    )
}

const SmallText = ({children})=>{
    return (
        <p className='small'>{children}</p>
    )
}
const MediumText = ({children})=>{
    return (
        <p className='medium'>{children}</p>
    )
}
const LargeText = ({children})=>{
    return (
        <p className='large'>{children}</p>
    )
}
export {MainTitle,SubTitle,SectionTitle,SmallText,MediumText,LargeText}