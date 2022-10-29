import Navbar from './Navbar';
import Footer from './Footer'
import React from 'react';
import { roboto } from './Text';
import Head from 'next/head';

export interface MetaData {
    title: string | undefined,
    keywords: undefined | string,
    robots: string,
    description: string | undefined
}

export const RootLayout = ({ children, meta }:{children:JSX.Element | JSX.Element[],meta:MetaData}) => {
    return <html lang='pt-br' className={roboto.className}>
        <Head>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="description" content={meta.description} />
            <meta name="keywords" content={meta.keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content={meta.robots}/>
            
            <link rel="icon" href="/logo.svg" type="image/x-icon" />

            <title>{meta.title}</title>
        </Head>
        <body className={roboto.className}>
            {children}
        </body>
    </html>
}

export const Layout = ({ children, meta}:{children:JSX.Element | JSX.Element[],meta:MetaData}) => {
    return (
        <RootLayout meta={meta}>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </RootLayout>
    )
}