import React from 'react';

interface TextProps {
    text?: string,
    className?: string,
    children?: any
}

const MainTitle = ({ text, className, children}: TextProps) => {
    return (
        <h1 className={className}>{text || children}</h1>
    )
}

const SubTitle = ({ text, className, children}: TextProps) => {
    return (
        <h2 className={className}>{text || children}</h2>
    )
}

const SectionTitle = ({ text, className, children}: TextProps) => {
    return (
        <h3 className={className}>{text || children}</h3>
    )
}

const SmallText = ({ text, className, children }: TextProps) => {
    return (
        <p className={'small ' + className}>{text || children}</p>
    )
}
const MediumText = ({ text, className, children }: TextProps) => {
    return (
        <p className={'medium ' + className}>{text || children}</p>
    )
}
const LargeText = ({ text, className, children }: TextProps) => {
    return (
        <p className={'large ' + className}>{text || children}</p>
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