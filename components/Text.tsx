import React from 'react';

interface TextProps {
    text: string
}

const MainTitle = ({ text }: TextProps) => {
    return (
        <h1>{text}</h1>
    )
}

const SubTitle = ({ text }: TextProps) => {
    return (
        <h2>{text}</h2>
    )
}

const SectionTitle = ({ text }: TextProps) => {
    return (
        <h3>{text}</h3>
    )
}

const SmallText = ({ text }: TextProps) => {
    return (
        <p className={'small'}>{text}</p>
    )
}
const MediumText = ({ text }: TextProps) => {
    return (
        <p className={'medium'}>{text}</p>
    )
}
const LargeText = ({ text }: TextProps) => {
    return (
        <p className={'large'}>{text}</p>
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