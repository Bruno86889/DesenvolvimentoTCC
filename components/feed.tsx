import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MainTitle, MediumText, SmallText } from "./text";
import news from '@/styles/news.module.scss';

const newsData: NewsData[] = [
    {
        data: '05/11/22',
        titulo: 'Venha conhecer nossa ETEC no ETEC portas abertas',
        subtitulo: 'O evento tem como objetivo divulgar as atividades da escola para os pais e para os possíveis alunos que vão realizar o vestibulinho',
        src: "img-5.jpg",
        url: 'blog/1',
    },
    {
        data: '04/11/22',
        titulo: 'Site da ETEC FHG entra no ar pela primeira vez',
        subtitulo: 'Estudantes do curso de informática do técnico modular desenvolvem protótipo do novo site da ETEC FHG',
        src: "img-1.jpg",
        url: 'blog/2',
    },
    {
        data: '03/11/22',
        titulo: 'Estão abertas as inscrições do Vestibular FATEC',
        src: "img-4.jpg",
        url: 'blog/4'
    },
    {
        data: '02/11/22',
        titulo: 'Estão abertas as inscrições do Vestibulinho ETEC',
        src: "img-6.jpg",
        url: 'blog/5'
    },
    {
        data: '03/11/22',
        titulo: 'Lorem ipsum dolor sit amet',
        url: 'blog/3',
        src: "img-3.jpg"
    },
]

const News = () => {
    return (
        <>
            <MainTitle text="Notícias e Eventos" />
            <div className={news.news}>
                <div className={news.main}>
                    {[newsData[0], newsData[1]].map((newsItem, i) => {
                        return <NewsItem data={newsItem} mainNews={true} key={i}/>
                    })}
                </div>
                <div className={news.others}>
                    {newsData.map((newsItem, i) => {
                        if(i > 1) return <NewsItem data={newsItem} mainNews={true} key={i}/>
                    })}
                </div>
            </div>
        </>
    )
}

const NewsItem = (props: { data: NewsData, mainNews: boolean }) => {
    return (
        <Link href={props.data.url} className={news.itemContainer}>
            <div className={news.newsItem}>
                <Image priority src={"/" + props.data.src} alt={""} width={200} height={100} />

                <div className={news.text}>
                    <SmallText className="lighter" text={props.data.data} />
                    <MediumText className="bold" text={props.data.titulo} />
                    {props.mainNews ? <SmallText text={props.data.subtitulo} /> : ''}
                </div>
            </div>
        </Link>
    )
}

export default News;
