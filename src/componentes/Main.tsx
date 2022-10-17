import React from 'react';
import '../scss/main.scss';

export const Main = ({children, ...props})=>{
    return <main {...props}>
        {children}
    </main>
}

export const Section = ({children,...props})=>{
    return <section {...props}>
        {children}
    </section>
}