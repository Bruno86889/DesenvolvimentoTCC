import React from 'react';

interface TextProps {
    text: string,
     className?: string
}

const MainTitle = ({ text, className}: TextProps) => {
    return (
        <h1 className={className}>{text}</h1>
    )
}

const SubTitle = ({ text, className}: TextProps) => {
    return (
        <h2 className={className}>{text}</h2>
    )
}

const SectionTitle = ({ text, className }: TextProps) => {
    return (
        <h3 className={className}>{text}</h3>
    )
}

const SmallText = ({ text, className }: TextProps) => {
    return (
        <p className={'small ' + className}>{text}</p>
    )
}
const MediumText = ({ text, className }: TextProps) => {
    return (
        <p className={'medium ' + className}>{text}</p>
    )
}
const LargeText = ({ text, className }: TextProps) => {
    return (
        <p className={'large ' + className}>{text}</p>
    )
}
export {
    MainTitle,
    SubTitle,
    SectionTitle,
    SmallText,
    MediumText,
    LargeText
}