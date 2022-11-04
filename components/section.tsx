import React from 'react';

type Props = {
    children: JSX.Element | JSX.Element[],
    className?:string
}

export const Section:React.FC<Props> = ({children,className})=>{
    return <section className={className}>
        {children}
    </section>
}