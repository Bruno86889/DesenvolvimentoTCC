import React from 'react';

type Props = {
    children: JSX.Element | JSX.Element[]
}
export const Main = ({children, ...props}:Props)=>{
    return <main {...props}>
        {children}
    </main>
}

export const Section = ({children,...props}:Props)=>{
    return <section {...props}>
        {children}
    </section>
}