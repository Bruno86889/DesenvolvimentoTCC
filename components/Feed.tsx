import React from "react";
import Image from "next/image";

import img from '../public/etec2.svg';
import news from '../styles/news.module.scss';
import { MainTitle, MediumText, SmallText } from "./text";
import Link from "next/link";

// export const Feed = () => {
//     return (
//         <div className={news.feed}>
//             <div className={news.recentNews}>

//                 <div className={news.mainNews}>
//                     <div className={news.feedItem + ' main'}>
//                         <Image alt="img" width={20} height={20} src={img} />
//                     </div>
//                 </div>

//                 <div className={news.othersNews}>
//                     <div className={news.feedItem}>
//                         <Image alt="img" src={img} />
//                     </div>
//                     <div className={news.feedItem}>
//                         <Image alt="img" width={20} height={20} src={img} />
//                     </div>

//                 </div>

//             </div>

//             <div className={news.recentDocuments}>
//                 <div className={news.document}>
//                     <div className="image">

//                     </div>
//                     <div className="text">
//                         <p>Um documento</p>
//                     </div>
//                 </div>

//                 <div className="document">
//                     <div className="image">

//                     </div>
//                     <div className="text">
//                         <p>Um documento</p>
//                     </div>
//                 </div>

//                 <div className="document">
//                     <div className="image">

//                     </div>
//                     <div className="text">
//                         <p>Um documento</p>
//                     </div>
//                 </div>

//                 <div className="document">
//                     <div className="image">

//                     </div>
//                     <div className="text">
//                         <p>Um documento</p>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

const News = () => {
    return (
        <>
            <MainTitle text="Notícias e Eventos" />
            <div className={news.news}>
                <div className={news.main}>
                    <NewsItem data={{ date: '05/11/22', title: 'Venha conhecer nossa ETEC no ETEC portas abertas',src:img, url:'blog/1',subtitle: 'O evento tem como objetivo divulgar as atividades da escola para os pais e para os possíveis alunos que vão realizar o vestibulinho'}} />
                    <NewsItem data={{ date: '04/11/22', title: 'Site da ETEC FHG entra no ar pela primeira vez',src: "/../public/img-1.jpg",url:'blog/2', subtitle: 'Estudantes do curso de informática do técnico modular desenvolvem protótipo do novo site da ETEC FHG'}} />
                </div>
                <div className={news.others}>
                    <NewsItem data={{ date: '03/11/22', title: 'Lorem ipsum dolor sit amet',url:'blog/3',src: "/../public/img-3.jpg" }} />
                    <NewsItem data={{ date: '03/11/22', title: 'Estão abertas as inscrições do Vestibular FATEC',src: "/../public/img-4.jpg",url:'blog/4' }} />
                    <NewsItem data={{ date: '02/11/22', title: 'Estão abertas as inscrições do Vestibulinho ETEC',src: "/../public/img-6.jpg",url:'blog/5' }} />
                </div>
            </div>
        </>
    )
}

const NewsItem = (props: { data: { date: string, title: string, subtitle?: string, url:string, src: any} }) => {
    return (
        <Link href={props.data.url} className={news.itemContainer}>
            <div className={news.newsItem}>
                <Image priority src={props.data.src} alt={""} width={200} height={100}/>
                <div className={news.text}>
                    <SmallText className="lighter" text={props.data.date} />
                    <MediumText className="bold" text={props.data.title} />
                    {props.data.subtitle ?? <SmallText text={props.data.subtitle || ''} />}
                </div>
            </div>
        </Link>
    )
}

export default News;