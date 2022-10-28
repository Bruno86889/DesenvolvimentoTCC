import React from 'react';

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