import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MainTitle, MediumText, SmallText } from "./text";
import news from '@/styles/news.module.scss';

import { newsData } from "@/data/newsData";

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
                <Image priority src={"/uploads/img/" + props.data.src} alt={""} width={200} height={100} />

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
