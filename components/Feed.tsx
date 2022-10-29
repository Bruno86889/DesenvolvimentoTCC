import React from "react";
import Image from "next/image";

import img from '../public/etec2.svg';
import news from '../styles/news.module.scss';

export const Feed = () => {
    return (
        <div className={news.feed}>
            <div className={news.recentNews}>

                <div className={news.mainNews}>
                    <div className={news.feedItem + ' main'}>
                        <Image alt="img" width={20} height={20} src={img} />
                    </div>
                </div>

                <div className={news.othersNews}>
                    <div className={news.feedItem}>
                        <Image alt="img" width={20} height={20} src={img} />
                    </div>
                    <div className={news.feedItem}>
                        <Image alt="img" width={20} height={20} src={img} />
                    </div>
                   
                </div>

            </div>

            <div className={news.recentDocuments}>
                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

                <div className="document">
                    <div className="image">

                    </div>
                    <div className="text">
                        <p>Um documento</p>
                    </div>
                </div>

            </div>
        </div>
    )
}